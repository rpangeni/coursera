(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']

function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function(){
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return promise;
  };

  service.getItemsForCategory = function(categoryShortName){
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    });
    return promise;
  };
  
}


})();
