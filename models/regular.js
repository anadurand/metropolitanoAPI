var mongoose = require('mongoose');
var regularSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'El nombre no puede ser un campo vacio'
    },

    category : {
        type : String,
        default: false
    },

    schedule: {
        type: Array,
        required: 'Los horarios no pueden estar vacios',
    }
})

var Regular = mongoose.model('Regular', regularSchema);

module.exports = Regular;