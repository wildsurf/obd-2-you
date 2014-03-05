"use strict";

define(
  ["backbone", "underscore", "jquery", "text!views/tpl/home/Results.html", "../collections/TroubleCodeCollection"],
  function(Backbone, _, $, Result, TroubleCodeCollection) {

  var template = _.template(Result);

  return Backbone.View.extend({

    initialize: function (options) {
      var that = this;
      this.code = options.code;
      this.troubleCodes = new TroubleCodeCollection();
      this.troubleCodes.fetch({dataType: "jsonp", success: function() {
        that.render();
      }});
    },

    render: function () {
      var results = this.troubleCodes.findByCode(this.code);
      this.$el.html(template({
        results: results
      }));
      return this;
    }

  });

});
