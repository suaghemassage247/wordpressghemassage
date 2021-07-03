const mongoose = require("mongoose");
const Desktop = require("../../models/desktop");
const NSX = require("../../models/nsxlaptop");
exports.desktops_get_all =(req, res, next) => {
  if(req.isAuthenticated()){
    Desktop.find()
      .select("_id name nameseo nsx price tinhnang description baohanh index image imagedefault")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          desktops: docs.map(doc => {
            return {
              name: doc.name,
              nameseo: doc.nameseo,
              nsx: doc.nsx,
              price: doc.price,
              tinhnang:doc.tinhnang,
              _id: doc._id,
              description:doc.description,
              baohanh:doc.baohanh,
              index:doc.index,
              image: doc.image,
              imagedefault:doc.imagedefault,
              request: {
                type: "GET",
                url: "http://localhost:3000/desktop/"+ doc._id
              }
            };
          })
        };
        res.render('backend/desktop/desktop-all',{response:response,layout:'layouts/layoutsadmin'})
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
exports.desktops_add_desktop=(req,res,next)=>{
  NSX.find()
   .select("_id name")
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
             url: "http://localhost:3000/nsx/" + doc._id
           }
         };
       })
     };
  res.render('backend/desktop/desktop-create',{nsxs:nsxs,layout:'layouts/layoutsadmin'});
     })
  .catch(err => {
  console.log(err);
  res.status(500).json({
    error: err
  });
});
}

exports.desktops_create_desktop = (req, res, next) => {
  const myDesktop = new Desktop({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    nameseo: req.body.nameseo,
    nsx:req.body.nsx,
    price: req.body.price,
    tinhnang:req.body.tinhnang,
    description:req.body.description,
    baohanh:req.body.baohanh,
    index:req.body.index,
    image: req.files['image'],
    imagedefault: req.files['imagedefault']
  });
  myDesktop
    .save()
    .then(result => {
      res.redirect('/desktop')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.desktops_get_desktop = (req, res, next) => {
  const id = req.params.desktopId;
  Desktop.findById(id)
    .select(" name nameseo nsx price tinhnang description baohanh index imagedefault image")
    .exec()
    .then(doc => {
      console.log("get database", doc);
      res.render('backend/desktop/desktop-detail',{doc:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.desktops_get_desktop_edit = (req, res, next) => {
  const id = req.params.desktopId;
  Desktop.findById(id)
    .select("name nameseo nsx  price  tinhnang  description baohanh index imagedefault image")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/desktop/desktop-detail-edit',{desktop:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.desktops_update_desktop = (req, res, next) => {
  const id = req.params.desktopId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Desktop.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Camera updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/desktop/" + id
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
exports.desktops_update_desktop_edit = (req, res, next) => {
  const id = req.params.desktopId;
  Desktop.findById(id,function(err,doc){
    if(req.files['image']==undefined && req.files['imagedefault']==undefined){
      doc.name=req.body.name;
      doc.nameseo=req.body.nameseo;
      doc.nsx=req.body.nsx;
      doc.price=req.body.price;
      doc.tinhnang=req.body.tinhnang;
      doc.description=req.body.description;
      doc.baohanh=req.body.baohanh;
      doc.index=req.body.index;
      doc.save();
   }
   else if(req.files['imagedefault']==undefined){
     doc.name=req.body.name;
     doc.nameseo=req.body.nameseo;
     doc.nsx=req.body.nsx;
     doc.price=req.body.price;
     doc.tinhnang=req.body.tinhnang;
     doc.description=req.body.description;
     doc.baohanh=req.body.baohanh;
     doc.index=req.body.index;
     doc.image=req.files['image'];
     doc.save();
   }
   else if(req.files['image']==undefined){
     doc.name=req.body.name;
     doc.nameseo=req.body.nameseo;
     doc.nsx=req.body.nsx;
     doc.price=req.body.price;
     doc.tinhnang=req.body.tinhnang;
     doc.description=req.body.description;
     doc.baohanh=req.body.baohanh;
     doc.index=req.body.index;
     doc.imagedefault=req.files['imagedefault'];
     doc.save();
   }
   else{
     doc.name=req.body.name;
     doc.nameseo=req.body.nameseo;
     doc.nsx=req.body.nsx;
     doc.price=req.body.price;
     doc.tinhnang=req.body.tinhnang;
     doc.description=req.body.description;
     doc.baohanh=req.body.baohanh;
     doc.index=req.body.index;
     doc.imagedefault=req.files['imagedefault'];
     doc.image=req.files['image'];
     doc.save();
   }
    })
  .exec()
  .then((err,doc)=>{
    res.redirect('/desktop');
  });
}
exports.desktop_delete = (req, res, next) => {
  const id = req.params.desktopId;
  Desktop.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/desktop",
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
