"use strict";

define(
  ["backbone", "underscore", "jquery", "text!views/tpl/home/Results.html", "../adapter"],
  function(Backbone, _, $, Result, Adapter) {

  var template = _.template(Result);

  return Backbone.View.extend({

    initialize: function () {
      this.render();
    },

    render: function () {
      var that = this;
      Adapter.findByCode("P1000").done(function(results) {
        that.$el.html(template({
          results: results
        }));
      });
      return this;
    }

    // events: {
    //     "keyup .search-key":    "search",
    //     "keypress .search-key": "onkeypress"
    // },

    // search: function (event) {
    //     var key = $('.search-key').val();
    //     this.employeeList.fetch({reset: true, data: {name: key}});
    // },

    // onkeypress: function (event) {
    //     if (event.keyCode === 13) { // enter key pressed
    //         event.preventDefault();
    //     }
    // }

  });

});
