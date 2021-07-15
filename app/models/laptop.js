var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
const laptopSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:{type:String, required:true},
  nameseo:{type:String,default:"name-seo"},
  phanloai:{type:String,default:""},
  nsx:{type:String,default:""},
  nhucau:{type:String,default:""},
  price:{type:Number,required:false},
  description:{type:String,default:"Mô tả"},
  
  tinhnang:{type:String,default:"Tính năng"},
  baohanh:{type:String,default:"24 tháng"},
  index:{type:Number,default:1},
  image:{type:Array,default:"no"},
  imagedefault:{type:Array,default:"no"}
});
module.exports= mongoose.model('Laptop',laptopSchema);
