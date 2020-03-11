const mongoose = require('mongoose');
const schema = mongoose.Schema;
const myschema = new schema({
    logo:String,
    role:String,
    firstName:String,
    lasttName:String,
    about:String,   
    email:String,
    mobile:String,
    address:String,
    facebook:String,
    twitter:String,
    linkedin:String,
    youtube:String,
    codepen:String,
});
module.exports = mongoose.model('about',myschema,'about')