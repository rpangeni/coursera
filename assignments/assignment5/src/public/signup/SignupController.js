(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

function SignupController() {
  var $ctrl = this;
  $ctrl.firstname ="";
  $ctrl.lastname = "";
  $ctrl.email = "";
  $ctrl.address = "";
  $ctrl.favdish ="";
}

})();
