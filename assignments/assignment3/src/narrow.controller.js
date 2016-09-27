(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.directive("foundItems", FoundItemsDirective)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

function FoundItemsDirective(){
    var ddo = {
      templateUrl: 'src/founditems.template.html',
      scope: {
         items: '<',
         onRemove: '&'
      },
        //  controller: FoundItemsDirectiveController,
        //  controllerAs: 'list',
        //  bindToController: true,
         link: FoundItemsDirectiveLink,
         transclude: true
     };

     return ddo;
    }

 function FoundItemsDirectiveController(){
   var list = this;
 }


NarrowItDownController.$Inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService){
  var nidctrl = this;

  nidctrl.searchText = "";
  nidctrl.items = [];
  nidctrl.errorMessage = "";


  nidctrl.find =  function (){
    nidctrl.items = [];
    nidctrl.errorMessage = "";
    if (nidctrl.searchText){
      var promise =  MenuSearchService.getMatchedMenuItems(nidctrl.searchText);
      promise.then(function(response){
          nidctrl.items = response.data.menu_items.filter(function(item){
            return item.description.indexOf(nidctrl.searchText) != -1;
          });
          if (!nidctrl.items.length){
            nidctrl.errorMessage = "Nothing found.";

          } else {
            nidctrl.errorMessage = "";

          }
      })
      .catch(function(error){
        nidctrl.errorMessage = error;
      });
    } else{
      nidctrl.errorMessage ="Nothing found.";
    }
  };

  nidctrl.removeItem = function (itemIndex){
    nidctrl.items.splice(itemIndex,1);
  }
}

function FoundItemsDirectiveLink(scope, element,attr, controller){
  console.log(scope);
  scope.$watch('items', function (newValue, oldValue){
      if (newValue){
         element.find("div.error").slideDown(900);
      }
      else{
        element.find("div.error").slideUp(900);
      }
  });
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']

function MenuSearchService($http, ApiBasePath){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });
    return promise;
  }
}

})();
