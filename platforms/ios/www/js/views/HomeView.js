"use strict";

define(
  ["backbone", "underscore", "jquery", "text!views/tpl/Home.html", "./SearchView", "./ResultsView"],
  function(Backbone, _, $, Home, SearchView, ResultsView) {

  var template = _.template(Home);

  return Backbone.View.extend({

    initialize: function () {
        this.currentHint = "Enter the Diagnostic Trouble Code to filter the results.";
        this.searchView = new SearchView();
        this.resultsView = new ResultsView();
        this.render();
    },

    render: function () {
        this.$el.html(template());
        this.$el.find("#search-view").html(this.searchView.el);
        this.$el.find("#results-view").html(this.resultsView.el);
        // this.searchView = new EmployeeListView({collection: this.employeeList, el: $(".scroller", this.el)});
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
