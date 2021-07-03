const mongoose = require("mongoose");
const Typepost = require("../../models/typepost");
const Post = require("../../models/posts");
exports.posts_get_all = (req, res, next) => {
  if(req.isAuthenticated()){
     Post.find()
      .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          posts: docs.map(doc => {
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
        res.render('backend/posts/posts-all',{response:response,layout:'layouts/layoutsadmin'})
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }else{
    res.redirect('/admin/login');
  }
};
exports.posts_add_posts=(req,res,next)=>{
  Typepost.find()
   .select("_id name")
   .exec()
   .then(docs => {
     const typeposts = {
       count: docs.length,
       typepost: docs.map(doc => {
         return {
           name: doc.name,
           _id: doc._id,
           request: {
             type: "GET",
             url: "http://localhost:3000/posts/" + doc._id
           }
         };
       })
     };
    res.render('backend/posts/posts-create',{typeposts:typeposts,layout:'layouts/layoutsadmin'});
     })
     .catch(err => {
     console.log(err);
     res.status(500).json({
       error: err
     });
   });

}
exports.posts_create_posts = (req, res, next) => {
  const posts = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    titleseo: req.body.titleseo,
    shortdescription: req.body.shortdescription,
    description: req.body.description,
    image: req.file.filename || "",
    day:req.body.day,
    ogtitle:req.body.ogtitle,
    ogdescription:req.body.ogdescription,
    keywords:req.body.keywords,
    typepost:req.body.typepost,
    index:req.body.index
  });
  posts
    .save()
    .then(result => {
      console.log(result);
      res.redirect('/posts')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.posts_get_posts = (req, res, next) => {
  const id = req.params.postsId;
  Post.findById(id)
    .select(" title titleseo shortdescription description day ogtitle ogdescription keywords  typepost image index")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/posts/posts-detail',{post:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.posts_get_posts_edit = (req, res, next) => {
  const id = req.params.postsId;
  Post.findById(id)
    .select("title titleseo shortdescription description day ogtitle ogdescription keywords  typepost image index")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/posts/posts-detail-edit',{post:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.posts_update_posts = (req, res, next) => {
  const id = req.params.postsId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Post.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "posts updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/posts/" + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.posts_update_posts_edit = (req, res, next) => {
  const id = req.params.postsId;
  Post.findById(id,function(err,doc){
    if(!req.file){
      doc.title= req.body.title;
      doc.titleseo= req.body.titleseo;
      doc.shortdescription= req.body.shortdescription;
      doc.description= req.body.description;
      doc.day=req.body.day;
      doc.ogtitle=req.body.ogtitle;
      doc.ogdescription=req.body.ogdescription;
      doc.keywords=req.body.keywords;
      doc.typepost=req.body.typepost;
      doc.index=req.body.index;
      doc.save();
    }else{
      doc.title= req.body.title;
      doc.titleseo= req.body.titleseo;
      doc.shortdescription= req.body.shortdescription;
      doc.description= req.body.description;
      doc.image=req.file.filename;
      doc.day=req.body.day;
      doc.ogtitle=req.body.ogtitle;
      doc.ogdescription=req.body.ogdescription;
      doc.keywords=req.body.keywords;
      doc.typepost=req.body.typepost;
      doc.index=req.body.index;
      doc.save();
    }

  })
  .exec()
  .then((err,doc)=>{
    res.redirect('/posts');
  });
}
exports.posts_delete = (req, res, next) => {
  const id = req.params.postsId;
  Post.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/products",
          body: {  }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
