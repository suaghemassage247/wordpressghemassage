const mongoose = require("mongoose");
const Laptop = require("../../models/laptop");
const NSX = require("../../models/nsxlaptop");
const Phanloai = require("../../models/phanloai");
const Nhucau = require("../../models/nhucaulaptop");
exports.laptops_get_all =(req, res, next) => {
  if(req.isAuthenticated()){
    Laptop.find()
      .select("_id name nameseo phanloai  nsx nhucau price tinhnang description baohanh index image imagedefault")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          laptops: docs.map(doc => {
            return {
              name: doc.name,
              nameseo: doc.nameseo,
              phanloai:doc.phanloai,
              nsx: doc.nsx,
              nhucau: doc.nhucau,
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
                url: "http://localhost:3000/laptop/"+ doc._id
              }
            };
          })
        };
        res.render('backend/laptop/laptop-all',{response:response,layout:'layouts/layoutsadmin'})
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
exports.laptops_add_laptop=(req,res,next)=>{
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
             url: "http://localhost:3000/nsxlaptop/" + doc._id
           }
         };
       })
     };
     Nhucau.find()
      .select("_id name")
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
                url: "http://localhost:3000/nsxlaptop/" + doc._id
              }
            };
          })
        };
        Phanloai.find()
         .select("_id name")
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
                   url: "http://localhost:3000/nsxlaptop/" + doc._id
                 }
               };
             })
           };
  res.render('backend/laptop/laptop-create',{phanloais:phanloais,nsxs:nsxs,nhucaus:nhucaus,layout:'layouts/layoutsadmin'});
     })
  })
  })
  .catch(err => {
  console.log(err);
  res.status(500).json({
    error: err
  });
});
}

exports.laptops_create_laptop = (req, res, next) => {
  const myLaptop = new Laptop({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    nameseo: req.body.nameseo,
    phanloai:req.body.phanloai,
    nsx:req.body.nsx,
    nhucau:req.body.nhucau,
    price: req.body.price,
    tinhnang:req.body.tinhnang,
    description:req.body.description,
    baohanh:req.body.baohanh,
    index:req.body.index,
    image: req.files['image'],
    imagedefault: req.files['imagedefault']
  });
  myLaptop
    .save()
    .then(result => {
      res.redirect('/laptop')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
exports.laptops_get_laptop = (req, res, next) => {
  const id = req.params.laptopId;
  Laptop.findById(id)
    .select(" name nameseo phanloai nsx price tinhnang description baohanh index imagedefault image")
    .exec()
    .then(doc => {
      console.log("get database", doc);
      res.render('backend/laptop/laptop-detail',{doc:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.laptops_get_laptop_edit = (req, res, next) => {
  const id = req.params.laptopId;
  Laptop.findById(id)
    .select("name nameseo phanloai nsx nhucau price  tinhnang  description baohanh index imagedefault image")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/laptop/laptop-detail-edit',{laptop:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.laptops_update_laptop = (req, res, next) => {
  const id = req.params.laptopId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Laptop.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Camera updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/laptop/" + id
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
exports.laptops_update_laptop_edit = (req, res, next) => {
  const id = req.params.laptopId;
  Laptop.findById(id,function(err,doc){
    if(req.files['image']==undefined && req.files['imagedefault']==undefined){
      doc.name=req.body.name;
      doc.nameseo=req.body.nameseo;
      doc.phanloai=req.body.phanloai;
      doc.nsx=req.body.nsx;
      doc.nhucau=req.body.nhucau;
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
     doc.phanloai=req.body.phanloai;
     doc.nsx=req.body.nsx;
     doc.nhucau=req.body.nhucau;
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
     doc.phanloai=req.body.phanloai;
     doc.nsx=req.body.nsx;
     doc.nhucau=req.body.nhucau;
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
     doc.phanloai=req.body.phanloai;
     doc.nsx=req.body.nsx;
     doc.nhucau=req.body.nhucau;
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
    res.redirect('/laptop');
  });
}
exports.laptop_delete = (req, res, next) => {
  const id = req.params.laptopId;
  Laptop.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Product deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/laptop",
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
