const mongoose = require('mongoose');
const schema = mongoose.Schema;
const myschema = new schema({
    about : String,
    company : String,
    icon : String,
    location : String,
    title : String,
    year : String 
});
module.exports = mongoose.model('awards',myschema,'awards')