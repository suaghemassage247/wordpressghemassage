const mongoose = require("mongoose");
const Post = require("../../models/posts");
const useragent = require('express-useragent');
exports.posts_get_home = (req, res, next) => {
  if(req.useragent.isMobile){
    res.render('mobile/homemobile',{layout:'layouts/layoutmobile/layoutmobile'});
  }
  else{
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
               res.render('fontend/typepost',{poststuvan:poststuvan,postshuongdan:postshuongdan,layout:'layouts/layoutsadmin'});
                })
              })
            .catch(err => {
                 console.log(err);
                 res.status(500).json({
                   error: err
                 });
            });
  };
}
exports.posts_get_titleseo=(req,res,next)=>{
  if(req.useragent.isMobile){
    var titleseo= req.params.titleseo;
    Post.find({titleseo:titleseo})
    .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
    .limit(1)
    .sort('index')
    .exec()
    .then(docs => {
      const postsdetail = {
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
            hotposts:doc.hotposts,
            lastposts:doc.lastposts,
           typepost:doc.service,
            image:doc.image,
            index:doc.index,
            request: {
              type: "GET",
              url: "http://localhost:3000/ghemassages/" + doc._id
            }
          };
        })
      };

      Post.find({
        titleseo:{$ne:titleseo}
      })
      .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
      .sort('index')
      .exec()
      .then(docs => {
        const postsfilter = {
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
              hotposts:doc.hotposts,
              lastposts:doc.lastposts,
             typepost:doc.service,
              image:doc.image,
              index:doc.index,
              request: {
                type: "GET",
                url: "http://localhost:3000/ghemassages/" + doc._id
              }
            };
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
        res.render('mobile/news-detail-mb',{poststuvan:poststuvan,postsfilter:postsfilter,postsdetail:postsdetail,layout:'layouts/layoutmobile/layoutpostdetail'});
  })
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  }else{
    var titleseo= req.params.titleseo;
    Post.find({titleseo:titleseo})
    .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
    .limit(1)
    .sort('index')
    .exec()
    .then(docs => {
      const postsdetail = {
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
            hotposts:doc.hotposts,
            lastposts:doc.lastposts,
           typepost:doc.service,
            image:doc.image,
            index:doc.index,
            request: {
              type: "GET",
              url: "http://localhost:3000/ghemassages/" + doc._id
            }
          };
        })
      };

      Post.find({
        titleseo:{$ne:titleseo}
      })
      .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
      .sort('index')
      .exec()
      .then(docs => {
        const postsfilter = {
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
              hotposts:doc.hotposts,
              lastposts:doc.lastposts,
             typepost:doc.service,
              image:doc.image,
              index:doc.index,
              request: {
                type: "GET",
                url: "http://localhost:3000/ghemassages/" + doc._id
              }
            };
          })
        };
        res.render('fontend/posts-detail',{postsfilter:postsfilter,postsdetail:postsdetail,layout:'layouts/layout'});

      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  }

}
