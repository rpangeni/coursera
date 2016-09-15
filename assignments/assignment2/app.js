(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyList = this;

  list.items = ShoppingListCheckOffService.getItems();

}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var boughtList = this;
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [];

  service.addItem = function (itemName, itemQuantity) {
    var item = {
      name: itemName,
      quantity: itemQuantity
    };
    toBuyItems.push(item);
  };

  service.removeItem = function(itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.getItems = function() {
    return items;
  };
}



})();
