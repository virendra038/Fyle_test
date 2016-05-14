'use strict';

angular.module('deploymapApp')
    .service('service',function ($http,$q) {

	var URL =  "https://api.fyle.in/api/bank_branches"
	var service = this;
	service.taskList = {};

	service.bank = function(x){
         
    var b = $q.defer();
     
    $http({
     method  : 'GET',
     url     : URL,
     params : {city : x, offset:0,limit:50}
    
    })
    .success(function(response){
        b.resolve(response);
    })
    .error(function(error,status){
      b.reject(error);
    })

   return b.promise;
    }

   
});