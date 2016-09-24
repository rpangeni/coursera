(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.markBought = function (index) {
    ShoppingListCheckOffService.markBought(index);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [ {name: "Mangoes", quantity: "10"},
                    {name: "Kilos of Banana", quantity: "40"},
                    {name: "Bread loaves", quantity: "2"},
                    {name: "Soft drink bottles", quantity: "3"},
                    {name: "Carrot bags", quantity: "3"},
                    {name: "Orange jiuce bottles", quantity: 2},
                    {name: "Buy toys for son", quantity: 300 }];
  var boughtItems = [];


  service.markBought = function(itemIndex) {
    boughtItems.push(toBuyItems.splice(itemIndex, 1)[0] );
  };

  service.getToBuyItems = function() {
    return toBuyItems;
  };
  service.getBoughtItems = function() {
    return boughtItems;
  }
}


})();
