// var myApp = angular.module("myApp", []);

angular.module('myApp', [])
  .controller('SignupController', ['$scope', function($scope) {
      $scope.checkboxModel = {
        value : true
      };
      $scope.birthdate = {
        value : null
      };
      $scope.submit = function() {
        var birthday = $scope.birthdate.value;
        var today = new Date();

        var age = today.getFullYear() - birthday.getFullYear();
        var m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }    

        if ($scope.checkboxModel.value && age >= 18) {
          $scope.IsMatch=true;
          alert("Successfully registered!");
        }else{
          $scope.IsMatch=false;
          alert("Please make sure you are already 18 years of age.");
        }
        
      };
  }
  
]);

// (function(app){
//   "use strict";
//   app.controller("SignupController", function($scope){
//     $scope.checkboxModel = {
//       value : true
//     };
//     $scope.add = function() {
//       console.log("Sample")
//       if ($scope.checkboxModel.value) {
//         $scope.IsMatch=true;
//       }
//       $scope.IsMatch=false;
//     }
//   });
// })(myApp);