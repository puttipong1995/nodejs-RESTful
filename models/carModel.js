const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
    },
    date:{
        type: Date
    }
})

module.exports = mongoose.model('Car', carSchema)