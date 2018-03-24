var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://test:test@ds123399.mlab.com:23399/metropolitano');
mongoose.Promise = Promise;




module.exports.Regular = require("./regular");

