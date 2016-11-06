(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['shortNames', 'UserInfoService']
function SignupController(shortNames, UserInfoService) {
  var signupCtrl = this;
  signupCtrl.shortNames = shortNames;

  signupCtrl.submit = function(){
    if (signupCtrl.isValidFavoriteDish()){
      var userInfo = {
        firstname: signupCtrl.firstname,
        lastname: signupCtrl.lastname,
        email: signupCtrl.email,
        phone: signupCtrl.phone,
        favdish: signupCtrl.favdish
      };
      UserInfoService.addInfo(userInfo);
      signupCtrl.completed = true;
    }
  };

  signupCtrl.isValidFavoriteDish = function(){
    return shortNames.indexOf(signupCtrl.favdish) > -1;
  }
}

})();
