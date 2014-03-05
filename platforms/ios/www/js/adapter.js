"use strict";

define(["jquery"], function($) {

  var pub = {}, url = "http://localhost:3000/trouble_codes.js";

  pub.findByCode = function(code) {
      var deferred = $.Deferred();
      $.ajax({
        url: url,
        dataType: "jsonp",
        success: ajaxSuccess,
        error: function(f, e) {
          console.log(e);
        }
      });

      function ajaxSuccess(data) {
        var results = JSON.parse(data.trouble_codes).filter(function(element) {
          var codeArr = element.code.split(""), i, match = true;
          for (i=0; i<codeArr.length; i++) {
            if (!(codeArr[i].toLowerCase() === code[i].toLowerCase() || code[i] === "")) {
              match = false;
              break;
            }
          }
          return match;
        });
        deferred.resolve(results);
      }

      return deferred.promise();
  };

  return pub;

});

