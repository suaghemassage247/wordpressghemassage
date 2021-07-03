const mongoose = require("mongoose");
const Camera = require("../../models/camera");
const NSX = require("../../models/nsx");
exports.cameras_get_all =(req, res, next) => {
  if(req.isAuthenticated()){
    Camera.find()
      .select("_id name nameseo nsx price title description sortdescription baohanh index image imagedefault")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          cameras: docs.map(doc => {
            return {
              name: doc.name,
              nameseo:doc.nameseo,
              nsx: doc.nsx,
              price: doc.price,
              _id: doc._id,
              title:doc.title,
              description:doc.description,
              sortdescription:doc.sortdescription,
              baohanh:doc.baohanh,
              index:doc.index,
              image: doc.image,
              imagedefault:doc.imagedefault,
              request: {
                type: "GET",
                url: "http://localhost:3000/camera/"+ doc._id
              }
            };
          })
        };
        res.render('backend/camera/camera-all',{response:response,layout:'layouts/layoutsadmin'})
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
exports.cameras_add_camera=(req,res,next)=>{
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
  res.render('backend/camera/camera-create',{nsxs:nsxs,layout:'layouts/layoutsadmin'});
     })
  .catch(err => {
  console.log(err);
  res.status(500).json({
    error: err
  });
});
}

exports.cameras_create_camera = (req, res, next) => {
  const myCamera = new Camera({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    nameseo: req.body.nameseo,
    nsx:req.body.nsx,
    price: req.body.price,
    title:req.body.title,
    sortdescription:req.body.sortdescription,
    description:req.body.description,
    baohanh:req.body.baohanh,
    index:req.body.index,
    image: req.files['image'],
    imagedefault: req.files['imagedefault']
  });
  myCamera
    .save()
    .then(result => {
      res.redirect('/camera')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.cameras_get_camera = (req, res, next) => {
  const id = req.params.cameraId;
  Camera.findById(id)
    .select(" name nameseo nsx price title sortdescription description baohanh index imagedefault image")
    .exec()
    .then(doc => {
      console.log("get database", doc);
      res.render('backend/camera/camera-detail',{doc:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.cameras_get_camera_edit = (req, res, next) => {
  const id = req.params.cameraId;
  Camera.findById(id)
    .select("name nameseo nsx  price  title sortdescription description baohanh index imagedefault image")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/camera/camera-detail-edit',{camera:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.cameras_update_camera = (req, res, next) => {
  const id = req.params.cameraId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Camera.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Camera updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/camera/" + id
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
exports.cameras_update_camera_edit = (req, res, next) => {
  const id = req.params.cameraId;
  Camera.findById(id,function(err,doc){
    if(req.files['image']==undefined && req.files['imagedefault']==undefined){
      doc.name=req.body.name;
      doc.nameseo=req.body.nameseo;
      doc.nsx=req.body.nsx;
      doc.price=req.body.price;
      doc.title=req.body.title;
      doc.sortdescription=req.body.sortdescription;
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
     doc.title=req.body.title;
     doc.sortdescription=req.body.sortdescription;
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
     doc.title=req.body.title;
     doc.sortdescription=req.body.sortdescription;
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
     doc.title=req.body.title;
     doc.sortdescription=req.body.sortdescription;
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
    res.redirect('/camera');
  });
}
exports.camera_delete = (req, res, next) => {
  const id = req.params.cameraId;
  Camera.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/camera",
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
