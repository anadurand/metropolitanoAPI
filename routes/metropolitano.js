var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/metropolitano");

router.route('/')
.get(helpers.getRegular)
  


module.exports = router;