const mongoose = require("mongoose");
const Camera = require("../../models/camera");
const useragent = require('express-useragent');

exports.cameras_get_home = (req, res, next) => {
    Camera.find()
        .select("_id name nameseo nsx image imagedefault price baohanh title description sortdescription index")
        .exec()
        .then(docs => {
            var cameraall = {
              count: docs.length,
              cameras: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo:doc.nameseo,
                  nsx:doc.nsx,
                  price: doc.price,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  _id: doc._id,
                  baohanh:doc.baohanh,
                  title:doc.title,
                  description:doc.description,
                  sortdescription:doc.sortdescription,
                  index:doc.index,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/camera/" + doc._id
                  }
                }
              })
            };
              res.render('fontend/camera',{cameraall:cameraall,layout:'layouts/layoutadmin'});
            })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
