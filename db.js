const mongoose = require('mongoose');
const db = "mongodb+srv://nargana:nargana@1993@cluster0-zzlly.mongodb.net/sivanargana";
const conn = mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},err=>{
if(!err){
  console.log('connected')
}
});



module.exports = conn;
