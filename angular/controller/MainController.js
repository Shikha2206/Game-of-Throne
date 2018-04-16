//firstController to view all matches
myApp.controller('indexController',['$http','$q','$location','IceAndFireService', function($http,$q,$location,IceAndFireService){
   var main=this;
	this.getAllData=[];
	 this.loadAll = function(){
      var promise1=IceAndFireService.bookData();
      var promise2 = IceAndFireService.houseData();
      var promise3 = IceAndFireService.characterData();
      $q.all([promise1,promise2,promise3]).then(function successCallback(response){
        for(var i in response){
          for(var j in response[i].data)
          main.getAllData.push(response[i].data[j]);
        }
		console.log(main.getAllData);
	  },function errorCallback(response){
        console.log(response);
		})
      };
   this.loadAll();
}]);