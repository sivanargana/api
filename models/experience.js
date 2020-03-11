const mongoose = require('mongoose');
const schema = mongoose.Schema;
const myschema = new schema({
    about :String,
    company : String,
    location : String,
    logo : String,
    period : String,
    role : String  
});
module.exports = mongoose.model('experience',myschema,'experience')