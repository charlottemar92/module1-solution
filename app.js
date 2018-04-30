(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
       $scope.message = "";  // "Enjoy or Too much"
       $scope.color = "";  //color of the message
       $scope.bColor = ""; // colore of the textbox border
         $scope.CustomStyle = {}; //ng-style contains font color
         $scope.Style = {};    // ng-style contains border color

      $scope.checkList = function () {
        var checkItem = $scope.item; // taking the list of items
        if (checkItem =="" || checkItem == null) {  // checking wether the list is empty
             $scope.message = "Please enter data first";
             $scope.color = "Red"; //  styling the font ..
             $scope.bColor = "Red" //  and the border
             $scope.CustomStyle = {
             'color' : $scope.color
           };
           $scope.Style = {
             'border-color' : $scope.bColor
           };
        }
        else {  // if the list is not empty
          var numOfItems = checkNumOfItems(checkItem); // counting the number of items

          if (numOfItems <= 3 ) {
            $scope.message = "Enjoy !";
            $scope.color = "Green";
            $scope.bColor = "Green";
            $scope.CustomStyle = {
            'color' : $scope.color
          };
          $scope.Style = {
            'border-color' : $scope.bColor
          };
          } else {
            $scope.message = "Too much !";
            $scope.color = "Green";
            $scope.bColor = "Green";
            $scope.CustomStyle = {
            'color' : $scope.color
          };
          $scope.Style = {
            'border-color' : $scope.bColor
          };
          }
        }
      };
/////////////////////////////////////////////////////////
     function checkNumOfItems(string) {
       var totalNumOfItems = 0;
        var arrayOfItems = string.split(','); // splitting the list in an array
        var emptyItems = hasEmptyElement(arrayOfItems);  // checking the array for blank strings
        // and if there is any... the function returns the number of them

        totalNumOfItems = arrayOfItems.length - emptyItems;
       return totalNumOfItems;
     }
//////////////////////////////////////////////////////

     function hasEmptyElement(array){
       var numOfEmpty = 0;
    for (var i=0; i<array.length; i++){ // checking every element
        var str = array[i].trim(); // if the element is "   " ..trim will convert it to ""
          if(str.length == 0)
          {
          numOfEmpty++; // counter that keep the number of empty elements
           }
    }
    return numOfEmpty;
}

    }


})();
