const mongoose = require("mongoose");
const nsxcontrol = require("../../models/nsxlaptop");

exports.nsxs_get_all = (req, res, next) => {
if(req.isAuthenticated()){
    nsxcontrol.find()
      .select("_id name ")
      .exec()
      .then(docs => {
        const nsxs = {
          count: docs.length,
          nsx: docs.map(doc => {
            return {
              name: doc.name,
              _id: doc._id,
              request: {
                type: "GET",
                url: "http://localhost:3000/nsx/"+ doc._id
              }
            };
          })
        };
        res.render('backend/nsxlaptop/nsx-all',{nsxs:nsxs,layout:'layouts/layoutsadmin'})
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
exports.nsxs_add_nsx=(req,res,next)=>{
  res.render('backend/nsxlaptop/nsx-create');
    }
exports.nsxs_create_nsx = (req, res, next) => {
  const nsx = new nsxcontrol({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name
  });
  nsx
    .save()
    .then(result => {
      console.log(result);
      res.redirect('/nsxlaptop')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.nsxs_get_nsx = (req, res, next) => {
  const id = req.params.nsxId;
  nsxcontrol.findById(id)
    .select("_id name")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/nsxlaptop/nsx-detail',{nsx:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.nsxs_get_nsx_edit = (req, res, next) => {
  const id = req.params.nsxId;
  nsxcontrol.findById(id)
    .select("name")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/nsxlaptop/nsx-detail-edit',{nsx:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.nsxs_update_nsx = (req, res, next) => {
  const id = req.params.nsxId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  nsxcontrol.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "NSX updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/nsx/" + id
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
exports.nsxs_update_nsx_edit = (req, res, next) => {
  const id = req.params.nsxId;
  nsxcontrol.findById(id,function(err,doc){
      doc.name=req.body.name;
      doc.save();
      console.log(id);
      console.log(req.body.name);
    })
  .exec()
  .then((err,doc)=>{
    res.redirect('/nsxlaptop');
  });
}
exports.nsx_delete = (req, res, next) => {
  const id = req.params.nsxId;
  nsxcontrol.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/nsxlaptop",
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
