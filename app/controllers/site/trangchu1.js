const mongoose = require("mongoose");
const Danhmuc = require("../../models/danhmuc");
const Slidehome = require("../../models/slidehome");
const Bannerfix = require("../../models/bannerfix");
const Laptop = require("../../models/laptop");
const useragent = require('express-useragent');
const Post = require("../../models/posts");

exports.trangchu_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Danhmuc.find()
        .select("_id name link alt index image")
        .sort('index')
        .exec()
        .then(docs => {
            var danhmucall = {
              count: docs.length,
              danhmucs: docs.map(doc => {
                return {
                  name: doc.name,
                  link:doc.link,
                  alt:doc.alt,
                  image: doc.image,
                  _id: doc._id,
                  index:doc.index,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/camera/" + doc._id
                  }
                }
              })
            };
            Post.find()
                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                 .limit(6)
                 .sort('index')
                 .exec()
                 .then(docs => {
                   const poststuvan = {
                     count: docs.length,
                     post: docs.map(doc => {
                       return {
                         title: doc.title,
                         titleseo: doc.titleseo,
                         shortdescription: doc.shortdescription,
                         _id: doc._id,
                         description:doc.description,
                         day:doc.day,
                         ogtitle:doc.ogtitle,
                         ogdescription:doc.ogdescription,
                         keywords:doc.keywords,
                         typepost:doc.typepost,
                         image:doc.image,
                         index:doc.index,
                         request: {
                           type: "GET",
                           url: "http://localhost:3000/posts/" + doc._id
                         }
                       };
                     })
                   };
                   Laptop.find()
                       .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
                       .limit(12)
                       .skip(0)
                       .sort('index')
                       .exec()
                       .then(docs => {
                           var laptopall = {
                             count: docs.length,
                             laptops: docs.map(doc => {
                               return {
                                 name: doc.name,
                                 nameseo: doc.nameseo,
                                 price:doc.price,
                                 nsx:doc.nsx,
                                 tinhnang:doc.tinhnang,
                                 baohanh: doc.baohanh,
                                 _id: doc._id,
                                 index:doc.index,
                                 description:doc.description,
                                 imagedefault:doc.imagedefault,
                                 image: doc.image,
                                 request: {
                                   type: "GET",
                                   url: "http://localhost:3000/laptop/" + doc._id
                                 }
                               }
                             })
                           };
            res.render('mobile/homemobile',{danhmucall:danhmucall,poststuvan:poststuvan,laptopall:laptopall,layout:'layouts/layoutmobile/layoutmobile'});
          })
          })
          })
          .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Danhmuc.find()
        .select("_id name link alt index image")
        .sort('index')
        .exec()
        .then(docs => {
            var danhmucall = {
              count: docs.length,
              danhmucs: docs.map(doc => {
                return {
                  name: doc.name,
                  link:doc.link,
                  alt:doc.alt,
                  image: doc.image,
                  _id: doc._id,
                  index:doc.index,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/camera/" + doc._id
                  }
                }
              })
            };
            Slidehome.find()
                .select("_id  image title index")
                .sort('index')
                .exec()
                .then(docs => {
                    var slideall = {
                      count: docs.length,
                      slides: docs.map(doc => {
                        return {
                          image: doc.image,
                          title:doc.title,
                            _id: doc._id,
                          index:doc.index,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/slide/" + doc._id
                          }
                        }
                      })
                    };
                    Bannerfix.find()
                        .select("_id  image title index")
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var bannerfixall = {
                              count: docs.length,
                              banners: docs.map(doc => {
                                return {
                                  image: doc.image,
                                  title:doc.title,
                                    _id: doc._id,
                                  index:doc.index,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/bannerfix/" + doc._id
                                  }
                                }
                              })
                            };
              res.render('fontend/trangchu',{danhmucall:danhmucall,slideall:slideall,bannerfixall:bannerfixall,layout:'layouts/layoutadmins'});
            })
          })
        })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
      }
  }
