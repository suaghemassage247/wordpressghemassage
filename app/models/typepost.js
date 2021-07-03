var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
const typepostSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:{type:String}
});
module.exports= mongoose.model('Typepost',typepostSchema);
