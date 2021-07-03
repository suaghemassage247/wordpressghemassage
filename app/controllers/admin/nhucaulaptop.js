const mongoose = require("mongoose");
const nhucaucontrol = require("../../models/nhucaulaptop");

exports.nhucaus_get_all = (req, res, next) => {
if(req.isAuthenticated()){
    nhucaucontrol.find()
      .select("_id name ")
      .exec()
      .then(docs => {
        const nhucaus = {
          count: docs.length,
          nhucau: docs.map(doc => {
            return {
              name: doc.name,
              _id: doc._id,
              request: {
                type: "GET",
                url: "http://localhost:3000/nhucau/"+ doc._id
              }
            };
          })
        };
        res.render('backend/nhucau/nhucau-all',{nhucaus:nhucaus,layout:'layouts/layoutsadmin'})
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
exports.nhucaus_add_nhucau=(req,res,next)=>{
  res.render('backend/nhucau/nhucau-create');
    }
exports.nhucaus_create_nhucau = (req, res, next) => {
  const nhucau = new nhucaucontrol({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name
  });
  nhucau
    .save()
    .then(result => {
      console.log(result);
      res.redirect('/nhucau')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.nhucaus_get_nhucau = (req, res, next) => {
  const id = req.params.nhucauId;
  nhucaucontrol.findById(id)
    .select("_id name")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/nhucau/nhucau-detail',{nhucau:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.nhucaus_get_nhucau_edit = (req, res, next) => {
  const id = req.params.nhucauId;
  nhucaucontrol.findById(id)
    .select("name")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/nhucau/nhucau-detail-edit',{nhucau:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.nhucaus_update_nhucau = (req, res, next) => {
  const id = req.params.nhucauId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  nhucaucontrol.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "nhucau updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/nhucau/" + id
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
exports.nhucaus_update_nhucau_edit = (req, res, next) => {
  const id = req.params.nhucauId;
  nhucaucontrol.findById(id,function(err,doc){
      doc.name=req.body.name;
      doc.save();
      console.log(id);
      console.log(req.body.name);
    })
  .exec()
  .then((err,doc)=>{
    res.redirect('/nhucau');
  });
}
exports.nhucau_delete = (req, res, next) => {
  const id = req.params.nhucauId;
  nhucaucontrol.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/nhucau",
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
