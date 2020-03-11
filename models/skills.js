const mongoose = require('mongoose');
const schema = mongoose.Schema;
const myschema = new schema({
    icon:String,
    title:String,
    experience:String   
});
module.exports = mongoose.model('skills',myschema,'skills')