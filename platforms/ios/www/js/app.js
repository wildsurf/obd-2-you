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
require(["jquery","adapter", "backbone", "views/HomeView"], function($, Adapter, Backbone, HomeView) {
    Adapter.findByCode("P0440").done(function(result) {
      console.log(result);
    });
    $("#app").html(new HomeView().el);
});
