"use strict";

define(
  ["backbone", "underscore", "jquery", 'text!views/tpl/home/Search.html'],
  function(Backbone, _, $, Search) {

  var template = _.template(Search),
    hints = [
      "Must be B, C, P or U",
      "Must be 0 or 1",
      "Can be any number"
    ];

  return Backbone.View.extend({

    initialize: function () {
        this.currentHint = "Enter the Diagnostic Trouble Code to filter the results.";
        this.code = ["","","","",""];
        this.inputs = [
          { codeId: 0, hint: hints[0], type: "text" },
          { codeId: 1, hint: hints[1], type: "tel" },
          { codeId: 2, hint: hints[2], type: "tel" },
          { codeId: 3, hint: hints[2], type: "tel" },
          { codeId: 4, hint: hints[2], type: "tel" }
        ];
        this.render();
    },

    render: function () {
        this.$el.html(template({
          currentHint: this.currentHint,
          inputs: this.inputs
        }));
        this.$el.find(".code-char:first").focus();
        return this;
    }

  });

});
