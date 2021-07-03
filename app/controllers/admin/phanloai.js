const mongoose = require("mongoose");
const phanloaicontrol = require("../../models/phanloai");

exports.phanloais_get_all = (req, res, next) => {
if(req.isAuthenticated()){
    phanloaicontrol.find()
      .select("_id name ")
      .exec()
      .then(docs => {
        const phanloais = {
          count: docs.length,
          phanloai: docs.map(doc => {
            return {
              name: doc.name,
              _id: doc._id,
              request: {
                type: "GET",
                url: "http://localhost:3000/phanloai/"+ doc._id
              }
            };
          })
        };
        res.render('backend/phanloai/phanloai-all',{phanloais:phanloais,layout:'layouts/layoutsadmin'})
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
exports.phanloais_add_phanloai=(req,res,next)=>{
  res.render('backend/phanloai/phanloai-create');
    }
exports.phanloais_create_phanloai = (req, res, next) => {
  const phanloai = new phanloaicontrol({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name
  });
  phanloai
    .save()
    .then(result => {
      console.log(result);
      res.redirect('/phanloai')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.phanloais_get_phanloai = (req, res, next) => {
  const id = req.params.phanloaiId;
  phanloaicontrol.findById(id)
    .select("_id name")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/phanloai/phanloai-detail',{phanloai:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.phanloais_get_phanloai_edit = (req, res, next) => {
  const id = req.params.phanloaiId;
  phanloaicontrol.findById(id)
    .select("name")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/phanloai/phanloai-detail-edit',{phanloai:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.phanloais_update_phanloai = (req, res, next) => {
  const id = req.params.phanloaiId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  phanloaicontrol.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "phanloai updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/phanloai/" + id
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
exports.phanloais_update_phanloai_edit = (req, res, next) => {
  const id = req.params.phanloaiId;
  phanloaicontrol.findById(id,function(err,doc){
      doc.name=req.body.name;
      doc.save();
      console.log(id);
      console.log(req.body.name);
    })
  .exec()
  .then((err,doc)=>{
    res.redirect('/phanloai');
  });
}
exports.phanloai_delete = (req, res, next) => {
  const id = req.params.phanloaiId;
  phanloaicontrol.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/phanloai",
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
