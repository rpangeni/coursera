(function(){
  'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController );

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.items = "";
    $scope.message = ""

    $scope.checkIfTooMuch = function (){
      var realItems = $scope.items.split(",").filter(function(a) { return a.trim();});
      //remove any empty items
      
      if (realItems.length > 3){
        $scope.message = "Too much";
      } else if ($scope.items.length == 0){
        $scope.message = "Please enter data first.";
      } else if (realItems.length <= 3){
        $scope.message = "Enjoy!.";
      }
  };
}
})();
