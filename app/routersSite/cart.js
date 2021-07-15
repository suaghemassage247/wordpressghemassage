const express =  require ('express')
var mongoose = require('mongoose');
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
    var cartt=cart.generateArray();
    var output="";
    var totalprice=cart.totalPrice;
    for(var i=0;i<cartt.length;i++){
      output+= cartt[i].item.name  +" - "
    console.info("output la:",output);
    console.info("email:",email);
    var order = new Order({
        cart: cart,
        address: address,
        name: name,
        note:note,
        phone:phone,
        email:email,
        product:output,
        totalprice:totalprice
    });


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
    var cartt=cart.generateArray();
    var output="";
    var totalprice=cart.totalPrice;
    for(var i=0;i<cartt.length;i++){
      output+= cartt[i].item.name  +" - "
    console.info("output la:",output);
    console.info("email:",email);
    var order = new Order({
      _id:new mongoose.Types.ObjectId(),
        cart: cart,
        address: address,
        name: name,
        note:note,
        phone:phone,
        email:email,
        product:output,
        totalprice:totalprice
    });



    order.save(function(err, result) {
        req.flash('success', 'Đăng ký mua thành công');
        req.session.cart = null;
        console.log("dON hang :",order);
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

module.exports = router;
