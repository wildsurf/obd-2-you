"use strict";

define(
  ["backbone", "underscore", "jquery", "text!views/tpl/Home.html", "./SearchView", "./ResultsView"],
  function(Backbone, _, $, Home, SearchView, ResultsView) {

  var template = _.template(Home);

  function getCompleteCode() {
    return $(".code-char").map(function() { return $(this).val(); });
  }

  return Backbone.View.extend({

    initialize: function () {
        this.currentHint = "Enter the Diagnostic Trouble Code to filter the results.";
        this.code = ["","","","",""];
        this.render();
    },

    render: function () {
        this.$el.html(template());
        this.searchView = new SearchView({ el: "#search-view" });
        this.resultsView = new ResultsView({ el: "#results-view", code: this.code });
        this.searchView.render();
        this.resultsView.render();
        return this;
    },

    events: {
      "keyup .code-char": "search",
      "click #clear-filter": "clearFilter"
    },

    clearFilter: function() {
      this.initialize();
    },

    search: function() {
      this.code = getCompleteCode();
      this.resultsView = new ResultsView({ el: "#results-view", code: this.code });
    }


  });

});
