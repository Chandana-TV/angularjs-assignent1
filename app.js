(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchMessage = "";
    $scope.lunchMenu ="";

    $scope.lunchStatus = function ()
    {
      var message = "";
      if($scope.lunchMenu == "")
      {
        message = "Please enter data first";
      }
      else if(getOrderLength($scope.lunchMenu)>3)
      {
        message = "Too much!";
      }
      else{
        message = "Enjoy!";
      }
      $scope.lunchMessage = message;
    };

    function getOrderLength(menu)
    {
      return menu.split(',').length;
    }
}

})();
