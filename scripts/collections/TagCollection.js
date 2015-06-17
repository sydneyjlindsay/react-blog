var $ = require('jquery'); 
var Backbone = require('backbone'); 
Backbone.$ = $; 

var TagModel = require('../models/TagModel');

module.exports = Backbone.Collection.extend({
	model: TagModel
});

