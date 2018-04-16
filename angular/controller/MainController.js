//firstController to view all matches
myApp.controller('indexController',['$http','$q','$location','$routeParam','IceAndFireService', function($http,$q,$location,$routeParam,IceAndFireService,){
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
   this.url=$routeParam.url;
   this.singleDetail=function()
	 {
		 IceAndFireService.singleDetails(main.url)
		.then(function successCallback(response)
		 {
			 main.singleInstance.push(response.data)
			console.log(main.singleInstance);
		 },function errorCallback(reason)
		 {
			 alert("getting some error with Single Instance");	
		 })
	 };
	 this.singleDetail();
}]);