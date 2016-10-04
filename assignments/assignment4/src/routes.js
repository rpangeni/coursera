(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function (result){
           return result.data;
         });
      }]
    }
  })
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as itemCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              console.log("Categories: " + $stateParams.category);
              return MenuDataService.getItemsForCategory($stateParams.category)
                .then(function (result) {
                  return result.data.menu_items;
                });
            }]
    }
  });
}

})();
