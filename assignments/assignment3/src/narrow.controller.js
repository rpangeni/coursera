(function () {
'use strict';

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController);

NarrowItDownController.$Inject = ['MenuSearchService']

function NarrowItDownController(MenuSearchService){
  var nidctrl = this;

  nidctrl.searchText = "";
  nidctrl.foundItems = [];
  nidctrl.errorMessage = "";


  ctrl.find =  function (){
    nidctrl.foundItems = [];
    nidctrl.errorMessage = "";
    if (nidctrl.searchText){
      var promise =  MenuSearchService.getMatchedMenuItems(nidctrl.searchText);
      promise.then(function(response){
          nidctrl.foundItems = response.data.menu_items.filter(function(item){
            return item.description.indexOf(nidctrl.searchText) != -1;
          });
          if (!nidctrl.foundItems.length){
            nidctrl.errorMessage = "Nothing found.";
          } else {
            nidctrl.errorMessage = "";
          }
      })
      .catch(function(error){
        nidctrl.errorMessage = error;
      });
    } else{
      nidctrl.errorMessage ="Nothing found."
    }
  };

}
})();
