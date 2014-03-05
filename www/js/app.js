"use strict";

require.config({
  paths: {
    "jquery": "lib/jquery", // jQuery v2.1.0,
    "backbone": "lib/backbone", // Backbone v1.1.2
    "underscore": "lib/underscore", // Underscore v1.6.0,
    "text": "lib/text" // Text v2.0.10
  }
});

// Start the main app logic.
require(["jquery","backbone", "views/HomeView"], function($, Backbone, HomeView) {

  var homeView = new HomeView({el: "#app"});
  homeView.render();
});
