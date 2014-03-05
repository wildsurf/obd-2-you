"use strict";

define(
  ["backbone", "underscore", "jquery", "text!views/tpl/home/Results.html", "../adapter"],
  function(Backbone, _, $, Result, Adapter) {

  var template = _.template(Result);

  return Backbone.View.extend({

    initialize: function (options) {
      this.code = options.code;
      this.render();
    },

    render: function () {
      var that = this;
      Adapter.findByCode(this.code).done(function(results) {
        that.$el.html(template({
          results: results
        }));
      });
      return this;
    }

  });

});
