const mongoose = require("mongoose");
const Order = require("../../models/order");
const Laptop = require("../../models/laptop");

exports.orders_get_all = (req, res, next) => {
  Order.find()
    .select(" _id product totalprice address name phone email note")
    .exec()
    .then(docs => {
      const response={
        count: docs.length,
        orders: docs.map(doc => {
          return {
            _id: doc._id,
            product:doc.product,
            totalprice:doc.totalprice,
            cart:doc.cart,
            address: doc.address,
            name: doc.name,
            phone: doc.phone,
            email: doc.email,
            note: doc.note,
            request: {
              type: "GET",
              url: "http://localhost:3000/orders/" + doc._id
            }
          };
        })
      }
      res.render('backend/camera/orders-get-all',{response:response,layout:'layouts/layoutsadmin'})
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
exports.orders_all = (req, res, next) => {
  Order.find()
    .select("name _id phone email cart ")
    .exec()
    .then(docs => {
      const response={
        count: docs.length,
        orders: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            phone: doc.phone,
            email: doc.email,
            cart: doc.cart,
            request: {
              type: "GET",
              url: "http://localhost:3000/orders/" + doc._id
            }
          };
        })
      }
      res.render('backend/camera/orders-get-all',{response:response,layout:'layouts/layoutsadmin'})
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
exports.orders_add_order=(req,res,next)=>{
  Camera.find().exec()
    .then((docs)=>{
      const response = {
        count: docs.length,
        cameras: docs.map(doc => {
          return {
            _id: doc._id,
            name:doc.name
          };
        })
      };
      res.render('backend/camera/order-create',{response:response,layout:'layouts/layoutsadmin'});
    })
}
exports.orders_create_order = (req, res, next) => {
  Laptop.findById(req.body.laptopId)
    .then(laptop => {
      if (!laptop) {
        return res.status(404).json({
          message: "Ghemassage not found"
        });
      }
      const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        laptop: req.body.laptopId
      });
      return order.save();
    })
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Order stored",
        createdOrder: {
          _id: result._id,
          laptop: result.laptop,
          quantity: result.quantity
        },
        request: {
          type: "GET",
          url: "http://localhost:3000/orders/" + result._id
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
exports.orders_get_order = (req, res, next) => {
  Order.findById(req.params.orderId)
    .select('quantity camera')
    .populate("camera")
    .exec()
    .then(order => {
      if (!order) {
        return res.status(404).json({
          message: "Order not found"
        });
      }
      res.render('backend/camera/orderdetail',{order:order,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
exports.order_get_order_edit = (req, res, next) => {
  const id = req.params.orderId;
  Order.findById(id)
    .select("_id camera quantity")
    .populate("camera name")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      res.render('backend/camera/orderdetail-edit',{order:doc,layout:'layouts/layoutsadmin'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
exports.order_update_order = (req, res, next) => {
  const id = req.params.orderId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Order.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Order updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/order/" + id
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
exports.order_update_order_edit = (req, res, next) => {
  const id = req.params.orderId;
  Order.findById(id,function(err,doc){
    doc.quantity=req.body.quantity;
    doc.save();
  })
  .exec()
  .then((err,doc)=>{
    res.redirect('/orders');
  });
}
exports.orders_delete_order = (req, res, next) => {
  Order.remove({ _id: req.params.orderId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Order deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/orders",
          body: { cameraId: "ID", quantity: "Number" }
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
