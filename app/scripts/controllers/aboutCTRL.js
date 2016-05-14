'use strict';


angular.module('deploymapApp')
  .controller('aboutCTRL', function ($scope,service,$rootScope) {
  		$scope.cities = ["GURGAON", "BANGLORE","PATNA","PUNE","MUMBAI","ALLAHABAD","DELHI", "KERALA", "KANPUR", "AGRA"];
        
        $scope.city = "BANGLORE"
     	service.bank($scope.city)
  			.then(function(response){
  				$scope.data = response;
  			},function(error){
  				console.log('some error');
  			});
     	$scope.change = function(cityName){
     		$scope.cityName = cityName;
     		service.bank($scope.cityName)
  			.then(function(response){
  				$scope.data = response;
  			},function(error){
  				console.log('some error');
  			});
     	}

  		
  });

