"use strict";

define(["jquery", "backbone"], function ($, Backbone) {

  var TroubleCodeCollection = Backbone.Collection.extend({
      url: "http://guarded-temple-4548.herokuapp.com/trouble_codes.js",
      comparator: "code",
      parse: function (response) {
         return JSON.parse(response.trouble_codes);
      },
      findByCode: function(code) {
        return this.filter(function(model) {
          var codeArr = model.get("code").split(""), i, match = true;
          for (i=0; i<codeArr.length; i++) {
            if (!(codeArr[i].toLowerCase() === code[i].toLowerCase() || code[i] === "")) {
              match = false;
              break;
            }
          }
          return match;
        });
      }
  });

  return TroubleCodeCollection;

});
