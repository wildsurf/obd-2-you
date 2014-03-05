"use strict";

define(
  ["backbone", "underscore", "jquery", "text!views/tpl/home/Results.html", "../collections/TroubleCodeCollection"],
  function(Backbone, _, $, Result, TroubleCodeCollection) {

  var template = _.template(Result);

  return Backbone.View.extend({

    initialize: function () {
      var that = this;
      this.code = ["","","","",""];
      this.troubleCodes = new TroubleCodeCollection();
      this.troubleCodes.fetch({dataType: "jsonp", success: function() {
        that.render();
      }});
    },

    render: function (newCode) {
      var code = newCode || this.code,
        results = this.troubleCodes.findByCode(code);
      this.$el.html(template({
        results: results
      }));
      return this;
    }

  });

});
