/* -------------------------------- *\
	BackboneJS application
\* -------------------------------- */

// Model
var model = Backbone.Model.extend();

// Collection
var collection = Backbone.Collection.extend();

// View
var view = Backbone.View.extend();

// Router
var router = Backbone.Router.extend();

/* -------------------------------- *\
	Create the application
\* -------------------------------- */
$(function() {

	window.app = new router();
	Backbone.history.start();

});
