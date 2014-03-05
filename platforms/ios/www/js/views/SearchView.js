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
        this.inputs = [
          { codeId: 0, hint: hints[0] },
          { codeId: 1, hint: hints[1] },
          { codeId: 2, hint: hints[2] },
          { codeId: 3, hint: hints[2] },
          { codeId: 4, hint: hints[2] }
        ];
        this.render();
    },

    render: function () {
        this.$el.html(template({
          currentHint: this.currentHint,
          inputs: this.inputs
        }));
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
