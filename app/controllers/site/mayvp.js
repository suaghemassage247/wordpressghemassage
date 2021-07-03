const mongoose = require("mongoose");
const Mayvp = require("../../models/mayvp");

const useragent = require('express-useragent');

exports.mayvp_get_home = (req, res, next) => {
    Mayvp.find()
        .select("_id name nameseo nganhhang nsx price title description ")
        .exec()
        .then(docs => {
            var flashsale = {
              count: docs.length,
              ghemassages: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo:doc.nameseo,
                  nganhhang:doc.nganhhang,
                  nsx:doc.nsx,
                  price: doc.price,
                  _id: doc._id,
                  title:doc.title,
                  description:doc.description,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/mayvp/" + doc._id
                  }
                  res.render('fontend/index',{mayvp:mayvp});
                }
              })
            };
          })
        }
