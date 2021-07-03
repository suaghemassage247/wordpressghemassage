const mongoose = require("mongoose");
const Laptop = require("../../models/laptop");

const Post = require("../../models/posts");
const useragent = require('express-useragent');

exports.maytinh_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Laptop"})
        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
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
                  nhucau:doc.nhucau,
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
            Laptop.find({phanloai:"Laptop",nsx:"Laptop Dell"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var laptopdell = {
                  count: docs.length,
                  laptops: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
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
                Laptop.find({phanloai:"Laptop",nsx:"Laptop Asus"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptopasus = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                    Laptop.find({phanloai:"Laptop",nsx:"Laptop HP"})
                    .select("_id name nsx nhucau price tinhnang baohanh description index imagedefault image")
                    .limit(12)
                    .skip(0)
                    .sort('index')
                    .exec()
                    .then(docs => {
                        var laptophp = {
                          count: docs.length,
                          laptops: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              price:doc.price,
                              nsx:doc.nsx,
                              nhucau:doc.nhucau,
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
                        Laptop.find({phanloai:"Laptop",nsx:"Laptop Acer"})
                        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var laptopacer = {
                              count: docs.length,
                              laptops: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  nsx:doc.nsx,
                                  nhucau:doc.nhucau,
                                  price:doc.price,
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
                            Laptop.find({phanloai:"Laptop",nsx:"Laptop Lenovo"})
                            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                            .limit(12)
                            .skip(0)
                            .sort('index')
                            .exec()
                            .then(docs => {
                                var laptoplenovo = {
                                  count: docs.length,
                                  laptops: docs.map(doc => {
                                    return {
                                      name: doc.name,
                                      nameseo: doc.nameseo,
                                      nsx:doc.nsx,
                                      nhucau:doc.nhucau,
                                      price:doc.price,
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
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };

              res.render('mobile/laptop',{laptopall:laptopall,laptoplenovo:laptoplenovo,laptopdell:laptopdell,laptophp:laptophp,laptopasus:laptopasus,laptopacer:laptopacer,poststuvan:poststuvan,layout:'layouts/layoutmobile/layoutmobile'});

            })
            })
            })
            })
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
    Laptop.find({phanloai:"Laptop"})
        .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
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
                  nhucau:doc.nhucau,
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
            Laptop.find({phanloai:"Laptop",nsx:"Laptop Dell"})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var laptopdell = {
                  count: docs.length,
                  laptops: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      nhucau:doc.nhucau,
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
                Laptop.find({phanloai:"Laptop",nsx:"Laptop Asus"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptopasus = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                    Laptop.find({phanloai:"Laptop",nsx:"Laptop HP"})
                    .select("_id name nsx nhucau price tinhnang baohanh description index imagedefault image")
                    .limit(12)
                    .skip(0)
                    .sort('index')
                    .exec()
                    .then(docs => {
                        var laptophp = {
                          count: docs.length,
                          laptops: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              price:doc.price,
                              nsx:doc.nsx,
                              nhucau:doc.nhucau,
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
                        Laptop.find({phanloai:"Laptop",nsx:"Laptop Acer"})
                        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var laptopacer = {
                              count: docs.length,
                              laptops: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  nsx:doc.nsx,
                                  nhucau:doc.nhucau,
                                  price:doc.price,
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
                            Laptop.find({phanloai:"Laptop",nsx:"Laptop Lenovo"})
                            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                            .limit(12)
                            .skip(0)
                            .sort('index')
                            .exec()
                            .then(docs => {
                                var laptoplenovo = {
                                  count: docs.length,
                                  laptops: docs.map(doc => {
                                    return {
                                      name: doc.name,
                                      nameseo: doc.nameseo,
                                      nsx:doc.nsx,
                                      nhucau:doc.nhucau,
                                      price:doc.price,
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
                            Post.find({typepost:"Tư Vấn Chọn Mua"})
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
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
                                   Post.find({typepost:"Hướng Dẫn Kỹ Thuật"})
                                        .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                        .limit(8)
                                        .sort('index')
                                        .exec()
                                        .then(docs => {
                                          const postshuongdan = {
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
                                                  url: "http://localhost:3000/ghemassages/" + doc._id
                                                }
                                              };
                                            })
                                          };
              res.render('fontend/maytinh',{laptopall:laptopall,laptoplenovo:laptoplenovo,laptopdell:laptopdell,laptophp:laptophp,laptopasus:laptopasus,laptopacer:laptopacer,postshuongdan:postshuongdan,poststuvan:poststuvan,layout:'layouts/layoutadmin'});
            })
            })
            })
            })
            })
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
exports.laptopdell_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Laptop",nsx:"Laptop Dell"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
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
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/laptopdell',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
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
    Laptop.find({phanloai:"Laptop",nsx:"Laptop Dell"})
              .select("_id name nameseo nhucau nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
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
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
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
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('fontend/laptopdell',{laptop:laptop,layout:'layouts/layout'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }

}
exports.laptopasus_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Laptop",nsx:"Laptop Asus"})
              .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
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
                  Post.find({typepost:"Tư Vấn Chọn Mua"})
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
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/laptopasus',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Laptop",nsx:"Laptop Asus"})
              .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
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
                res.render('fontend/laptopasus',{laptop:laptop,layout:'layouts/layout'});
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
}
exports.laptophp_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    Laptop.find({phanloai:"Laptop",nsx:"Laptop HP"})
              .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop= {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
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
                                 url: "http://localhost:3000/ghemassages/" + doc._id
                               }
                             };
                           })
                         };
                res.render('mobile/laptophp',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
              })})
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
  else{
    Laptop.find({phanloai:"Laptop",nsx:"Laptop HP"})
              .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop= {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        nameseo: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        nhucau:doc.nhucau,
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
                res.render('fontend/laptophp',{laptop:laptop,layout:'layouts/layout'});
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
  }
}
exports.laptopacer_get_home = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nsx:"Laptop Acer"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopacer',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nsx:"Laptop Acer"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                  res.render('fontend/laptopacer',{laptop:laptop,layout:'layouts/layout'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptoplenovo_get_home = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nsx:"Laptop Lenovo"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptoplenovo',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nsx:"Laptop Lenovo"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                  res.render('fontend/laptoplenovo',{laptop:laptop,layout:'layouts/layout'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_hoctapvanphong = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"học tập văn phòng"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopvanphong',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"học tập văn phòng"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                  res.render('fontend/laptopvanphong',{laptop:laptop,layout:'layouts/layout'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_dohoa = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"đồ họa"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopdohoa',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"đồ họa"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                  res.render('fontend/laptopdohoa',{laptop:laptop,layout:'layouts/layoutadmin'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_gaming = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"gaming"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopgaming',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"gaming"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                  res.render('fontend/laptopgaming',{laptop:laptop,layout:'layouts/layoutadmin'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_mongnhe = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"mỏng nhẹ"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopmongnhe',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"mỏng nhẹ"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                  res.render('fontend/laptopmongnhe',{laptop:laptop,layout:'layouts/layoutadmin'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.laptop_caocap = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Laptop",nhucau:"cao cấp"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/laptopcaocap',{laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else {
      Laptop.find({phanloai:"Laptop",nhucau:"cao cấp"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop= {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          nhucau:doc.nhucau,
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
                  res.render('fontend/laptopcaocap',{laptop:laptop,layout:'layouts/layoutadmin'});
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
}
exports.desktop_get_home = (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Desktop"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          nhucau: doc.nhucau,
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/desktop',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else{
      Laptop.find({phanloai:"Desktop"})
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
                    Post.find({typepost:"Tư Vấn Chọn Mua"})
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                           Post.find({typepost:"Hướng dẫn kỹ thuật"})
                                .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                .limit(8)
                                .sort('index')
                                .exec()
                                .then(docs => {
                                  const postshuongdan = {
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
                                          url: "http://localhost:3000/ghemassages/" + doc._id
                                        }
                                      };
                                    })
                                  };
                  res.render('fontend/desktop',{poststuvan:poststuvan,postshuongdan:postshuongdan,laptopall:laptopall,layout:'layouts/layout'});
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
exports.phukien_get_home =  (req, res, next) => {
    if(req.useragent.isMobile){
      Laptop.find({phanloai:"Phukien"})
                .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptop = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          nhucau: doc.nhucau,
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                  res.render('mobile/phukien',{poststuvan:poststuvan,laptop:laptop,layout:'layouts/layoutmobile/layoutmobile'});
                })})
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    error: err
                   });
                  });
    }
    else{
      Laptop.find({phanloai:"Phukien"})
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
                    Post.find({typepost:"Tư Vấn Chọn Mua"})
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
                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                 }
                               };
                             })
                           };
                           Post.find({typepost:"Hướng dẫn kỹ thuật"})
                                .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                .limit(8)
                                .sort('index')
                                .exec()
                                .then(docs => {
                                  const postshuongdan = {
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
                                          url: "http://localhost:3000/ghemassages/" + doc._id
                                        }
                                      };
                                    })
                                  };
                  res.render('fontend/phukien',{poststuvan:poststuvan,postshuongdan:postshuongdan,laptopall:laptopall,layout:'layouts/layout'});
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
exports.maytinh_get_maytinhnameseo = (req, res, next) => {
    if(req.useragent.isMobile){
          const nameseo = req.params.maytinhnameseo;
          Laptop.find({nameseo:nameseo})
            .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
            .exec()
            .then(docs => {
                    var productdetail={
                                count: docs.length,
                                products: docs.map(doc => {
                                  return {
                                    name: doc.name,
                                    nameseo: doc.nameseo,
                                    price:doc.price,
                                    nsx:doc.nsx,
                                    nhucau:doc.nhucau,
                                    tinhnang:doc.tinhnang,
                                    baohanh: doc.baohanh,
                                    _id: doc._id,
                                    index:doc.index,
                                    description:doc.description,
                                    imagedefault:doc.imagedefault,
                                    image: doc.image,
                                    request: {
                                      type: "GET",
                                      url: "http://localhost:3000/maytinh/" + doc._id
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
                                                   url: "http://localhost:3000/ghemassages/" + doc._id
                                                 }
                                               };
                                             })
                                           };
                    res.render('mobile/product-detail-mb',{productdetail:productdetail,poststuvan:poststuvan,layout:"layouts/layoutmobile/layoutmobiledetail"});
                  })})
            .catch(err => {
                            console.log(err);
                            res.status(500).json({ error: err });
                          });
    }else{
      const nameseo = req.params.maytinhnameseo;
      console.log(nameseo);
      Laptop.find({nameseo:nameseo})
        .select("_id name nameseo nsx nhucau price tinhnang baohanh description index imagedefault image")
        .exec()
        .then(docs => {
                var productdetail={
                            count: docs.length,
                            products: docs.map(doc => {
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
                                  url: "http://localhost:3000/maytinh/" + doc._id
                                      }
                                    }
                                  })
                                };
                res.render('fontend/maytinh-detail',{productdetail:productdetail,layout:"layouts/layoutdesktop/layoutmaytinhdetail"});
              })
        .catch(err => {
                        console.log(err);
                        res.status(500).json({ error: err });
                      });
    }
  }
