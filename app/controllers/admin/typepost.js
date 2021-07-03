const mongoose = require("mongoose");
const typepostcontrol = require("../../models/typepost");

exports.typeposts_get_all = (req, res, next) => {
if(req.isAuthenticated()){
    typepostcontrol.find()
      .select("_id name ")
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
                url: "http://localhost:3000/typepost/"+ doc._id
              }
            };
          })
        };
        res.render('backend/typepost/typepost-all',{typeposts:typeposts,layout:'layouts/layoutsadmin'})
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
exports.typeposts_add_typepost=(req,res,next)=>{
  res.render('backend/typepost/typepost-create');
    }
exports.typeposts_create_typepost = (req, res, next) => {
  const typepost = new typepostcontrol({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name
  });
  typepost
    .save()
    .then(result => {
      console.log(result);
      res.redirect('/typepost')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.typeposts_get_typepost = (req, res, next) => {
  const id = req.params.typepostId;
  typepostcontrol.findById(id)
    .select("_id name")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/typepost/typepost-detail',{typepost:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.typeposts_get_typepost_edit = (req, res, next) => {
  const id = req.params.typepostId;
  typepostcontrol.findById(id)
    .select("name")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/typepost/typepost-detail-edit',{typepost:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.typeposts_update_typepost = (req, res, next) => {
  const id = req.params.typepostId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  typepostcontrol.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "NSX updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/typepost/" + id
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
exports.typeposts_update_typepost_edit = (req, res, next) => {
  const id = req.params.typepostId;
  typepostcontrol.findById(id,function(err,doc){
      doc.name=req.body.name;
      doc.save();
      console.log(id);
      console.log(req.body.name);
    })
  .exec()
  .then((err,doc)=>{
    res.redirect('/typepost');
  });
}
exports.typepost_delete = (req, res, next) => {
  const id = req.params.typepostId;
  typepostcontrol.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/typepost",
          body: { name: "String" }
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
