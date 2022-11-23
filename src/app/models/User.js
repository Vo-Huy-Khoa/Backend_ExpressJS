const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;


const User = new Schema({
    name: {type: String, maxLength: 50},
    email: {type: String, maxLength: 50},
    password: {type: String, maxLength: 255},
    avatar: {type: String, maxLength: 255},
    role: {type: String, maxLength: 50},
    slug: { type: String, slug: 'name', unique: true },
},{
    timestamps: true,
})

module.exports = mongoose.model('User', User);