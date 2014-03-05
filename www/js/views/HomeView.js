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
        this.render();
    },

    render: function () {
        this.$el.html(template());
        this.searchView = new SearchView({ el: "#search-view" });
        this.resultsView = new ResultsView({ el: "#results-view", code: this.code });
        return this;
    },

    events: {
      "keyup .code-char": "search",
      "click #clear-filter": "clearFilter"
    },

    clearFilter: function() {
      this.initialize();
    },

    search: function(event) {
      var code = getCompleteCode(), $next = $(event.target).next("input");
      if ( event.keyCode < 45 || event.keyCode > 91 ) return;
      this.resultsView.render(code);
      if ($next.length) {
        console.log($next);
        $next.focus();
      }
    }


  });

});
