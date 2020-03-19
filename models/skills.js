const mongoose = require('mongoose');
const schema = mongoose.Schema;
const myschema = new schema({
    file:String,
    title:String,
    experience:String   
});
module.exports = mongoose.model('skills',myschema,'skills')