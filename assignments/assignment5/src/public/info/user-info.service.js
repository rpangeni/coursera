(function () {
"use strict";

angular.module('public')
.service('UserInfoService', UserInfoService);

UserInfoService.$inject = ['$http', 'ApiPath'];
function UserInfoService($http, ApiPath){
  var service = this;

  var userInfos = [];

  service.addInfo = function(userInfo){
    userInfos.push(userInfo);
  };

  service.getInfo = function(){
    return userInfos.length > 0 ? userInfos[0]: null;
  };


}

})();
