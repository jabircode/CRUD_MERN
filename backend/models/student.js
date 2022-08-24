const mongoose = require('mongoose')
const Schema = mongoose.Schema

let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    id: {
        type: Number
    }
}, {
    collection: 'students-crud-mern'
})

module.exports = mongoose.model('Student', studentSchema)