// (function() {
//   'use strict';
//
//   angular.module('NarrowItDownApp')
//   .service('MenuSearchService', MenuSearchService)
//   .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");
//
//   MenuSearchService.$inject = ['$http', 'ApiBasePath']
//
//   function MenuSearchService($http, ApiBasePath){
//     var service = this;
//
//     service.getMatchedMenuItems = function(searchTerm){
//       var promise = $http({
//         method: "GET",
//         url: (ApiBasePath + "/menu_items.json")
//       });
//       return promise;
//     }
//   }
//
// })();
