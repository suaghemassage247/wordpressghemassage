var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
const danhmucSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:{type:String, required:true},
  link:{type:String, required:true},
  alt:{type:String, required:true},
  index:{type:Number,default:1},
  image:{type:Array,default:"no"}
});
module.exports= mongoose.model('Danhmuc',danhmucSchema);
