var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
const nhucauSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:{type:String,default:"học tập văn phòng"}
});
module.exports= mongoose.model('nhucauLaptop',nhucauSchema);
