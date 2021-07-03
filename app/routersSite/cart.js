const express =  require ('express')
const router = express.Router();
const Laptop = require("../models/laptop");
var Cart = require('../models/cart');
var Order = require('../models/order');
var nodemailer= require('nodemailer');
var hbs= require('nodemailer-express-handlebars');
 var bodyParser = require('body-parser');
router.get('/cart/add-to-cart/:id', function(req, res, next) {
  if(req.useragent.isMobile){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Laptop.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/cart/shopping-cart')
    });
  }
  else{
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Laptop.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/cart/shopping-cart')
    });

  }

});
router.get('/cart/shopping-cart/',function(req,res,next){
    if(req.useragent.isMobile){
      if (!req.session.cart) {
          return res.render('mobile/shopping-cart-mb', {products: null,layout:'layouts/layoutmobile/layoutcart'});
      }
      var cart = new Cart(req.session.cart);
                  res.render('mobile/shopping-cart-mb', {products: cart.generateArray(), totalPrice: cart.totalPrice,layout:'layouts/layoutmobile/layoutcart'});
                  next();
    }
    else{
      if (!req.session.cart) {
          return res.render('fontend/shopping-cart', {products: null});
      }
      var cart = new Cart(req.session.cart);
          Laptop.find()
                              .limit(5)
                              .skip(0)
                              .select("_id name nameseo phanloai nsx nhucau tinhnang image imagedefault price description baohanh index")
                              .exec()
                              .then(docs => {
                                var modelorder = {
                                  count: docs.length,
                                  sanphams: docs.map(doc => {
                                    return {
                                      name: doc.name,
                                      nameseo:doc.nameseo,
                                      price: doc.price,
                                      nsx: doc.nsx,
                                      tinhnang:doc.tinhnang,
                                      image: doc.image,
                                      imagedefault:doc.imagedefault,
                                      _id: doc._id,
                                      baohanh:doc.baohanh,
                                      description:doc.description,
                                      index:doc.index,
                                      request: {
                                        type: "GET",
                                        url: "http://localhost:3000/ghemassages/" + doc._id
                                      }
                                    }
                                  })
                                };
                  res.render('fontend/laptop/shopping-cart', {modelorder:modelorder,products: cart.generateArray(), totalPrice: cart.totalPrice,layout:'layouts/layoutdesktop/layoutmaytinhdetail'});
                  next();
               })
    }


  })
router.get('/cart/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/cart/shopping-cart');
});
router.get('/cart/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/cart/shopping-cart');
});
router.get('/cart/add/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.addOne(productId);
    req.session.cart = cart;
    res.redirect('/cart/shopping-cart');
});
//thanh toan offline
router.get('/cart/checkout', function(req, res, next) {
  if(req.useragent.isMobile){
    if (!req.session.cart) {
        return res.redirect('/cart/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('mobile/checkout-mb', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg,layout:'layouts/layoutmobile/layoutcart'});
  }else{
    if (!req.session.cart) {
        return res.redirect('/cart/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    Laptop.find()
          .limit(5)
          .skip(0)
          .select("_id name nameseo nsx image imagedefault price baohanh title  sortdescription description  index")
          .exec()
          .then(docs => {
            Laptop.find()
                                .limit(5)
                                .skip(0)
                                .select("_id name nameseo nsx price tinhnang description baohanh index image imagedefault")
                                .exec()
                                .then(docs => {
                                    var modelorder = {
                                      count: docs.length,
                                      sanphams: docs.map(doc => {
                                        return {
                                          name: doc.name,
                                          nameseo:doc.nameseo,
                                          price: doc.price,
                                          nsx: doc.nsx,
                                          tinhnang:doc.tinhnang,
                                          image: doc.image,
                                          imagedefault:doc.imagedefault,
                                          _id: doc._id,
                                          baohanh:doc.baohanh,
                                          description:doc.description,
                                          index:doc.index,
                                          request: {
                                            type: "GET",
                                            url: "http://localhost:3000/ghemassages/" + doc._id
                                          }
                                        }
                                      })
                                    };
            res.render('fontend/laptop/checkout', {modelorder:modelorder,total: cart.totalPrice, errMsg: errMsg, noError: !errMsg,layout:'layouts/layoutdesktop/layoutmaytinhdetail'});
          })

        });
        }
});
router.post('/cart/checkout', function(req, res, next) {
  if(req.useragent.isMobile){
    if (!req.session.cart) {
        return res.redirect('/cart/shopping-cart');
    }

    var address=req.body.address,
    name= req.body.name,
    note=req.body.note,
    phone=req.body.phone,
    email=req.body.email;
    var cart = new Cart(req.session.cart);
    var order = new Order({
        cart: cart,
        address: address,
        name: name,
        note:note,
        phone:phone,
        email:email
    });
    var cartt=cart.generateArray();
    var output="";
    for(var i=0;i<cartt.length;i++){
      output+= cartt[i].item.name  +" - "
    console.info("output la:",output);
    console.info("email:",email);
    order.save(function(err, result) {
        req.flash('success', 'Đăng ký mua thành công');
        req.session.cart = null;
        console.log("ddonw hang :",order);
        console.log("giohang:%s",cart);
        var successMsg = req.flash('success')[0];
        var transporter =  nodemailer.createTransport({ // config mail server
            service: 'Gmail',
            auth: {
                user: 'ghemassagecentre@gmail.com',
                pass: 'Vinh@1234'
            }
        });
      const handlebarOptions = {
    viewEngine: {
      extName: '.hbs',
      partialsDir: 'app/views/fontend/',
      layoutsDir: '',
      defaultLayout: '',
    },
    viewPath: 'app/views/fontend/',
    extName: '.ejs',
  };
  transporter.use('compile', hbs(handlebarOptions));
        var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
            from: 'Ghemassagecentre <ghemassagecentre@gmail.com>',
            to: email,
            subject: 'Bạn đã đặt hàng thành công',
             template:'templateMailer',
             context:{
               address,
               name,
               note,
               phone,
               email,
               output
             }

        }
        transporter.sendMail(mainOptions, function(err, info){
            if (err) {
                console.log("loi roi ne",err);

            } else {
                console.log('Message sent: ' +  info.response);
            }
        });
        res.render('mobile/muahangthanhcong',{successMsg: successMsg, noMessages: !successMsg,order:order,cart:cart.generateArray(),layout:'layouts/layoutmobile/layoutcart'});
    });
  }
}else{
    if (!req.session.cart) {
        return res.redirect('/cart/shopping-cart');
    }

    var address=req.body.address,
    name= req.body.name,
    note=req.body.note,
    phone=req.body.phone,
    email=req.body.email;
    var cart = new Cart(req.session.cart);
    var order = new Order({
        cart: cart,
        address: address,
        name: name,
        note:note,
        phone:phone,
        email:email
    });
    var cartt=cart.generateArray();
    var output="";
    for(var i=0;i<cartt.length;i++){
      output+= cartt[i].item.name  +" - "
    console.info("output la:",output);
    console.info("email:",email);
    order.save(function(err, result) {
        req.flash('success', 'Đăng ký mua thành công');
        req.session.cart = null;
        console.log("ddonw hang :",order);
        console.log("giohang:%s",cart);
        var successMsg = req.flash('success')[0];
        var transporter =  nodemailer.createTransport({ // config mail server
            service: 'Gmail',
            auth: {
                user: 'ghemassagecentre@gmail.com',
                pass: 'Vinh@1234'
            }
        });
      const handlebarOptions = {
    viewEngine: {
      extName: '.hbs',
      partialsDir: 'app/views/fontend/',
      layoutsDir: '',
      defaultLayout: '',
    },
    viewPath: 'app/views/fontend/',
    extName: '.ejs',
  };
  transporter.use('compile', hbs(handlebarOptions));
        var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
            from: 'Ghemassagecentre <ghemassagecentre@gmail.com>',
            to: email,
            subject: 'Bạn đã đặt hàng thành công',
             template:'templateMailer',
             context:{
               address,
               name,
               note,
               phone,
               email,
               output
             }

        }
        transporter.sendMail(mainOptions, function(err, info){
            if (err) {
                console.log("loi roi ne",err);

            } else {
                console.log('Message sent: ' +  info.response);
            }
        });
        res.render('fontend/laptop/muahangthanhcong',{successMsg: successMsg, noMessages: !successMsg,order:order,cart:cart.generateArray(),layout:'layouts/layoutdesktop/layoutmaytinhdetail'});
    });
  }
}

});
//end thanh toan offline
//thanh toan online visa
router.get('/checkoutOnline', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/cart/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    Trademark.find({nganhhang:"Ghế massage"})
     .limit(8)
     .skip(0)
     .select("_id name nganhhang index")
     .exec()
     .then(docs => {
       const trademarks = {
         count: docs.length,
         trademark: docs.map(doc => {
           return {
             _id: doc._id,
             name:doc.name,
             nganhhang:doc.nganhhang,
             index:doc.index,
             request: {
               type: "GET",
               url: "http://localhost:3000/ghemassages/" + doc._id
             }
           };
         })
       };
       Trademark.find({nganhhang:"Máy chạy bộ"})
        .limit(10)
        .skip(0)
        .select("_id name nganhhang index")
        .exec()
        .then(docs => {
          const trademarksmaychaybo = {
            count: docs.length,
            trademark: docs.map(doc => {
              return {
                _id: doc._id,
                name:doc.name,
                nganhhang:doc.nganhhang,
                index:doc.index,
                request: {
                  type: "GET",
                  url: "http://localhost:3000/ghemassages/" + doc._id
                }
              };
            })
          };
          Trademark.find({nganhhang:/bếp/i})
           .limit(8)
           .skip(0)
           .select("_id name nganhhang index")
           .exec()
           .then(docs => {
             const trademarksbep = {
               count: docs.length,
               trademark: docs.map(doc => {
                 return {
                   _id: doc._id,
                   name:doc.name,
                   nganhhang:doc.nganhhang,
                   index:doc.index,
                   request: {
                     type: "GET",
                     url: "http://localhost:3000/ghemassages/" + doc._id
                   }
                 };
               })
             };
             Post.find({lastposts:true})
              .limit(6)
              .skip(0)
              .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords hotposts lastposts service image index")
              .sort('index')
              .exec()
              .then(docs => {
                const lastpostshome = {
                  count: docs.length,
                  posts: docs.map(doc => {
                    return {
                      title: doc.title,
                      titleseo:doc.titleseo,
                      shortdescription: doc.shortdescription,
                      _id: doc._id,
                      description:doc.description,
                      day:doc.day,
                      ogtitle:doc.ogtitle,
                      ogdescription:doc.ogdescription,
                      keywords:doc.keywords,
                      hotposts:doc.hotposts,
                      lastposts:doc.lastposts,
                      service:doc.service,
                      image:doc.image,
                      index:doc.index,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/ghemassages/" + doc._id
                      }
                    };
                  })
                };
                Ghemassage.find({bestsell:true,name:/ghế/ig})
                    .limit(2)
                    .skip(0)
                    .select("_id name nameseo status nganhhang trademark image imagedefault price pricesale baohanh title description ogtitle ogdescription keywords index")
                    .exec()
                    .then(docs => {
                        var ghebestsellmenuhome = {
                          count: docs.length,
                          ghemassages: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              status:doc.status,
                              nganhhang:doc.nganhhang,
                              trademark:doc.trademark,
                              price: doc.price,
                              pricesale:doc.pricesale,
                              saleoff:doc.price - doc.pricesale,
                              image: doc.image,
                              imagedefault:doc.imagedefault,
                              _id: doc._id,
                              baohanh:doc.baohanh,
                              title:doc.title,
                              description:doc.description,
                              ogtitle:doc.ogtitle,
                              ogdescription:doc.ogdescription,
                              keywords:doc.keywords,
                              index:doc.index,
                              request: {
                                type: "GET",
                                url: "http://localhost:3000/ghemassages/" + doc._id
                              }
                            }
                          })
                        };
                        Ghemassage.find({bestsell:true,nganhhang:"Máy chạy bộ"})
                            .limit(2)
                            .skip(0)
                            .select("_id name nameseo status nganhhang trademark image imagedefault price pricesale baohanh title description ogtitle ogdescription keywords index")
                            .exec()
                            .then(docs => {
                                var maychaybobestsellmenuhome = {
                                  count: docs.length,
                                  ghemassages: docs.map(doc => {
                                    return {
                                      name: doc.name,
                                      nameseo:doc.nameseo,
                                      status:doc.status,
                                      nganhhang:doc.nganhhang,
                                      trademark:doc.trademark,
                                      price: doc.price,
                                      pricesale:doc.pricesale,
                                      saleoff:doc.price - doc.pricesale,
                                      image: doc.image,
                                      imagedefault:doc.imagedefault,
                                      _id: doc._id,
                                      baohanh:doc.baohanh,
                                      title:doc.title,
                                      description:doc.description,
                                      ogtitle:doc.ogtitle,
                                      ogdescription:doc.ogdescription,
                                      keywords:doc.keywords,
                                      index:doc.index,
                                      request: {
                                        type: "GET",
                                        url: "http://localhost:3000/ghemassages/" + doc._id
                                      }
                                    }
                                  })
                                };
                res.render('fontend/checkoutOnline', {ghebestsellmenuhome:ghebestsellmenuhome,maychaybobestsellmenuhome:maychaybobestsellmenuhome,lastpostshome:lastpostshome,trademarksbep:trademarksbep,trademarksmaychaybo:trademarksmaychaybo,trademarks:trademarks,total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
          })
        })
      })
    })
      })
    })
});
router.post('/checkoutOnline', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/cart/shopping-cart');
    }
    var cart = new Cart(req.session.cart);

    var stripe = require("stripe")(
        "sk_test_KWHq6vVU1wFDupU5IDKcqG4u"
    );

    stripe.charges.create({
        amount: cart.totalPrice ,
        currency: "vnd",
        source: req.body.stripeToken, // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
            req.flash('error', err.message);
            return res.redirect('/cart/checkoutOnline');
        }
        var order = new Order({
            cart: cart,
            address: req.body.address,
            name: req.body.name,
            paymentId: charge.id
        });
        order.save(function(err, result) {
            req.flash('success', 'Successfully bought product!');
            req.session.cart = null;
            res.redirect('/ghe-massage');
        });
    });
});
//end thanh toan offline
module.exports = router;
