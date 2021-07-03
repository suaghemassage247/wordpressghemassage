var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cart: {type: Object, required: false},
    address: {type: String, required: false},
    name: {type: String, default: "camera"},
    phone:{type:String,required:false},
    email:{type:String,default:"vinh230787@gmail.com"},
    note: {type: String, required: false}
});

module.exports = mongoose.model('Order', schema);
