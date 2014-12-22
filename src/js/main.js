'use strict';

/**
 * @ngdoc function
 * @name erinSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the erinSiteApp
 */
var app = angular.module('erinSiteApp', []);


app.controller('MainCtrl', function ($scope) {
  $scope.siteStatus = {
    p: "snow",
    p2: "stick",
    logged_in: false
  };

  $scope.passForm = {
    field: "",
    secondfield: "",
    error: false
  };

  $scope.login = function () {
    if ($scope.passForm.field.toLowerCase() == $scope.siteStatus.p && $scope.passForm.secondfield.toLowerCase() == $scope.siteStatus.p2) {
      $scope.siteStatus.logged_in = true;
      $scope.passForm.error = false;
    } else {
      $scope.passForm.error = true;
      $('#password_field').select();
    }
  };


  $(document).ready(function () {
    $('#fullpage').fullpage({
      'verticalCentered': true,
      'css3': true,
      'navigation': true,
      'navigationPosition': 'right',
      'slidesNavigation': true,
      'scrollingSpeed': 200,
      'easing': 'easeOutCirc'
    });

    var yolo = function (e) {
      $scope.passForm.error = false;
      if (e.keyCode == 13)
        $('#submit_button').click();
    };

    // If enter go
    $('#password_field').keypress(yolo);
    $('#password_two_field').keypress(yolo);
  });


});
