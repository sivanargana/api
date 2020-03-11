const mongoose = require('mongoose');
const schema = mongoose.Schema;
const myschema = new schema({
    img:String,
    link:String,
    logo:String,
    title:String   
});
module.exports = mongoose.model('projects',myschema,'projects')