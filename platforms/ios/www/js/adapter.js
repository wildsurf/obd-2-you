"use strict";

define(["jquery"], function($) {

  var pub = {};

  pub.findByCode = function(code) {
      var deferred = $.Deferred(),
        results = troubleCodes.filter(function(element) {
          return element.code.toLowerCase().indexOf(code.toLowerCase()) > -1;
        });
      deferred.resolve(results);
      return deferred.promise();
  };

  var troubleCodes = [
    { "code": "P0420", "makeId": 0, "error": "Catalyst System Low Efficiency" },
    { "code": "P0171", "makeId": 0, "error": "Fuel Trim System Lean Bank" },
    { "code": "P0401", "makeId": 0, "error": "Exhaust Gas Recirculation (EGR) Flow Insufficient" },
    { "code": "P0174", "makeId": 0, "error": "Fuel Trim System Lean Bank" },
    { "code": "P0442", "makeId": 0, "error": "Evaporative Emission (EVAP) System Small Leak Detected" },
    { "code": "P0300", "makeId": 0, "error": "Engine Misfire Detected (random misfire)" },
    { "code": "P0455", "makeId": 0, "error": "Evaporative Emission (EVAP) System Leak Detected (large)" },
    { "code": "P0440", "makeId": 0, "error": "Evaporative Emission (EVAP) System" },
    { "code": "P0141", "makeId": 0, "error": "Oxygen Sensor Heater (H02S) Performance Bank 1 Sensor 2" },
    { "code": "P0430", "makeId": 0, "error": "Catalyst System Low Efficiency Bank 2" },
    { "code": "P0135", "makeId": 0, "error": "Oxygen Sensor (HO2S) Performance Bank 1 Sensor 1" },
    { "code": "P0446", "makeId": 0, "error": "EVAP Vent Solenoid Valve Control System" },
    { "code": "P0128", "makeId": 0, "error": "Coolant Thermostat" },
    { "code": "P0301", "makeId": 0, "error": "Cylinder 1 Misfire Detected" },
    { "code": "P0128", "makeId": 0, "error": "EVAP System Control Incorrect Purge Flow" },
    { "code": "P0411", "makeId": 0, "error": "Oxygen Sensor Slow Response Bank 1 Sensor 1" },
    { "code": "P0133", "makeId": 0, "error": "Cylinder 3 Misfire Detected" },
    { "code": "P0303", "makeId": 0, "error": "Cylinder 4 Misfire Detected" },
    { "code": "P0302", "makeId": 0, "error": "Cylinder 2 Misfire Detected" },
    { "code": "P0325", "makeId": 0, "error": "PCM Knock Sensor Circuit" },
    { "code": "P2011", "makeId": 0, "error": "Intake Manifold Runner Ctrl Circ/Open Bank2" },
    { "code": "P2012", "makeId": 0, "error": "Intake Manifold Runner Ctrl Circ Low Bank2" },
    { "code": "C0021", "makeId": 0, "error": "Brake Booster Performance (Subfault)" },
    { "code": "P1001", "makeId": 6, "error": "KOER Self-Test Not Completed, KOER Aborted Conditions" },
    { "code": "P1001", "makeId": 14, "error": "Data link connector (DLC) - self-test terminated" },
    { "code": "P1001", "makeId": 20, "error": "Evaporative emission (EVAP) canister purge valve - low output" },
    { "code": "P1000", "makeId": 6, "error": "OBD II Monitor Testing Not Complete Conditions" },
    { "code": "P1000", "makeId": 10, "error": "Engine control module (ECM) - internal error" },
    { "code": "P1000", "makeId": 11, "error": "System diagnosis incomplete" },
    { "code": "P1000", "makeId": 12, "error": "Engine control module (ECM) memory erased - no codes stored" },
    { "code": "P1000", "makeId": 14, "error": "OBD 11 monitor testing not complete" }
  ];


  var makes = [
    { id: 0, name: "Generic" },
    { id: 1, name: "Acura" },
    { id: 2, name: "Audi" },
    { id: 3, name: "BMW" },
    { id: 4, name: "Chevrolet" },
    { id: 5, name: "Dodge/Chrysler/Jeep" },
    { id: 6, name: "Ford" },
    { id: 7, name: "Honda" },
    { id: 8, name: "Infiniti" },
    { id: 9, name: "Isuzu" },
    { id: 10, name: "Jaguar" },
    { id: 11, name: "Kia" },
    { id: 12, name: "Land Rover" },
    { id: 13, name: "Lexus" },
    { id: 14, name: "Mazda" },
    { id: 15, name: "Mitsubishi" },
    { id: 16, name: "Nissan" },
    { id: 17, name: "Subaru" },
    { id: 18, name: "Toyota" },
    { id: 19, name: "VW" },
    { id: 20, name: "Saab"}
  ];

  return pub;

});

