const mongoose = require('mongoose');
const schema = mongoose.Schema;
const myschema = new schema({
    about:String,
    icon:String,
    title:String   
});
module.exports = mongoose.model('services',myschema,'services')