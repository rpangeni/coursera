(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['menuItems', 'UserInfoService', 'ApiPath']
function InfoController( menuItems, UserInfoService, ApiPath) {
  var infoCtrl = this;
  infoCtrl.menuItems = menuItems;
  infoCtrl.service = UserInfoService;
  infoCtrl.userInfo = UserInfoService.getInfo();
  infoCtrl.basePath = ApiPath;
  infoCtrl.notFound =   function(){
    // first check the item details
    var userInfo = infoCtrl.service.getInfo();
    if (userInfo == null){
      return true;
    }
    else{
      //infoCtrl.favItem = MenuService.getMenuItem(infoCtrl.userInfo.favdish);
      return false;
    }
  };


  };
})();
