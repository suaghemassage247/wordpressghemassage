const mongoose = require("mongoose");
const Danhmuc = require("../../models/danhmuc");
exports.danhmucs_get_all =(req, res, next) => {
  if(req.isAuthenticated()){
    Danhmuc.find()
      .select("_id name link alt index image ")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          danhmucs: docs.map(doc => {
            return {
              name: doc.name,
              alt:doc.alt,
              link:doc.link,
              _id: doc._id,
              index:doc.index,
              image: doc.image,
              request: {
                type: "GET",
                url: "http://localhost:3000/danhmuc/"+ doc._id
              }
            };
          })
        };
        res.render('backend/danhmuc/danhmuc-all',{response:response,layout:'layouts/layoutsadmin'})
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
exports.danhmucs_add_danhmuc=(req,res,next)=>{
  res.render('backend/danhmuc/danhmuc-create',{layout:'layouts/layoutsadmin'});
}

exports.danhmucs_create_danhmuc = (req, res, next) => {
  const myDanhmuc = new Danhmuc({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    link:req.body.link,
    alt: req.body.alt,
    index:req.body.index,
    image: req.files['image']
  });
  myDanhmuc
    .save()
    .then(result => {
      res.redirect('/danhmuc')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.danhmucs_get_danhmuc = (req, res, next) => {
  const id = req.params.danhmucId;
  Danhmuc.findById(id)
    .select(" name link alt index image")
    .exec()
    .then(doc => {
      console.log("get database", doc);
      res.render('backend/danhmuc/danhmuc-detail',{doc:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.danhmucs_get_danhmuc_edit = (req, res, next) => {
  const id = req.params.danhmucId;
  Danhmuc.findById(id)
    .select("name link alt index image")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/danhmuc/danhmuc-detail-edit',{danhmuc:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.danhmucs_update_danhmuc = (req, res, next) => {
  const id = req.params.danhmucId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Danhmuc.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Danhmuc updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/danhmuc/" + id
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
exports.danhmucs_update_danhmuc_edit = (req, res, next) => {
  const id = req.params.danhmucId;
  Danhmuc.findById(id,function(err,doc){
    if(req.files['image']==undefined){
      doc.name=req.body.name;
      doc.link=req.body.link;
      doc.alt=req.body.alt;
      doc.index=req.body.index;
      doc.save();
   }
   else{
     doc.name=req.body.name;
     doc.link=req.body.link;
     doc.alt=req.body.alt;
     doc.index=req.body.index;
     doc.image=req.files['image'];
     doc.save();
   }
    })
  .exec()
  .then((err,doc)=>{
    res.redirect('/danhmuc');
  });
}
exports.danhmuc_delete = (req, res, next) => {
  const id = req.params.danhmucId;
  Danhmuc.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/danhmuc",
          body: { }
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
