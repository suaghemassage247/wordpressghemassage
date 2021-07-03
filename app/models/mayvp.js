var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
const mayvpSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:{type:String, required:true},
  nameseo:{type:String, required:true},
  nsx:{type:String,default:"Nhật"},
  price:{type:Number,required:true},
  title:{type:String,default:"Title"},
  description:{type:String,default:"Mô tả"},
  image:{type:Array,default:"no"},
  imagedefault:{type:Array,default:"no"}
});
module.exports= mongoose.model('Mayvp',mayvpSchema);
