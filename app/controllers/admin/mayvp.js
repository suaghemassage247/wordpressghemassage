const mongoose = require("mongoose");
const Mayvp = require("../../models/mayvp");
exports.mayvps_get_all =(req, res, next) => {
  if(req.isAuthenticated()){
    Mayvp.find()
      .select("_id name nameseo nsx price title description image imagedefault")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          mayvps: docs.map(doc => {
            return {
              name: doc.name,
              nameseo:doc.nameseo,
              nsx: doc.nsx,
              price: doc.price,
              _id: doc._id,
              title:doc.title,
              description:doc.description,
              image: doc.image,
              imagedefault:doc.imagedefault,
              request: {
                type: "GET",
                url: "http://localhost:3000/mayvp/"+ doc._id
              }
            };
          })
        };
        res.render('backend/mayvp/mayvp-all',{response:response,layout:'layouts/layoutsadmin'})
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
exports.mayvps_add_mayvp=(req,res,next)=>{
  res.render('backend/mayvp/mayvp-create');
     }
exports.mayvps_create_mayvp = (req, res, next) => {
  const mayvp = new Mayvp({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    nameseo: req.body.nameseo,
    nsx:req.body.nsx,
    price: req.body.price,
    title:req.body.title,
    description:req.body.description,
    image: req.files['image'],
    imagedefault: req.files['imagedefault']
  });
  mayvp
    .save()
    .then(result => {
      console.log(result);
      res.redirect('/mayvp')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.mayvps_get_mayvp = (req, res, next) => {
  const id = req.params.mayvpId;
  Mayvp.findById(id)
    .select(" name nameseo nsx price title description imagedefault image")
    .exec()
    .then(doc => {
      console.log("get database", doc);
      res.render('backend/mayvp/mayvp-detail',{doc:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.mayvps_get_mayvp_edit = (req, res, next) => {
  const id = req.params.mayvpId;
  Mayvp.findById(id)
    .select("name nameseo nsx  price  title description imagedefault image")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/mayvp/mayvp-detail-edit',{mayvp:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.mayvps_update_mayvp = (req, res, next) => {
  const id = req.params.mayvpId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Mayvp.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Mayvp updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/mayvp/" + id
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
exports.mayvps_update_mayvp_edit = (req, res, next) => {
  const id = req.params.mayvpId;
  Mayvp.findById(id,function(err,doc){
    if(req.files['image']==undefined && req.files['imagedefault']==undefined){
      doc.name=req.body.name;
      doc.nameseo=req.body.nameseo;
      doc.nsx=req.body.nsx;
      doc.price=req.body.price;
      doc.title=req.body.title;
      doc.description=req.body.description;
      doc.save();
   }
   else if(req.files['imagedefault']==undefined){
     doc.name=req.body.name;
     doc.nameseo=req.body.nameseo;
     doc.nsx=req.body.nsx;
     doc.price=req.body.price;
     doc.title=req.body.title;
     doc.description=req.body.description;
     doc.image=req.files['image'];
     doc.save();
   }
   else if(req.files['image']==undefined){
     doc.name=req.body.name;
     doc.nameseo=req.body.nameseo;
     doc.nsx=req.body.nsx;
     doc.price=req.body.price;
     doc.title=req.body.title;
     doc.description=req.body.description;
     doc.imagedefault=req.files['imagedefault'];
     doc.save();
   }
   else{
     doc.name=req.body.name;
     doc.nameseo=req.body.nameseo;
     doc.nsx=req.body.nsx;
     doc.price=req.body.price;
     doc.title=req.body.title;
     doc.description=req.body.description;
     doc.imagedefault=req.files['imagedefault'];
     doc.image=req.files['image'];
     doc.save();
   }
    })
  .exec()
  .then((err,doc)=>{
    res.redirect('/mayvp');
  });
}
exports.mayvp_delete = (req, res, next) => {
  const id = req.params.mayvpId;
  Mayvp.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/products",
          body: { name: "String", price: "Number" }
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
