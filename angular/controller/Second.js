//SecondController to view single match
myApp.controller('secondController', ['$http','$location','$routeParams','IceAndFireService',function($http,$location,$routeParams,IceAndFireService)
{
	var main=this;
	this.houseInstance=[];
	this.bookInstance=[];
	this.houseId=$routeParams.Id2;
	this.bookId1=$routeParams.Id1;
	this.characterId=$routeParams.Id3;
	this.characterInstance=[];  
	this.housewiseDetail=function()
	 {
		 IceAndFireService.houseDetail(main.houseId)
		 .then(function successCallback(response)
		 {
			 main.houseInstance.push(response.data)
			console.log(main.houseInstance);
		 },function errorCallback(reason)
		 {
			 alert("getting some error with Book Instance");
		 })
	 };
	  this.housewiseDetail();
	 this.bookwiseDetail=function()
	 {
		 IceAndFireService.bookDetail(main.bookId)
		 .then(function successCallback(response)
		 {
			 main.bookInstance.push(response.data)
			console.log(main.bookInstance);
		 },function errorCallback(reason)
		 {
			 alert("getting some error with Book Instance");
		 })
	 };
	 this.bookwiseDetail();
	 this.characterwiseDetail=function()
	 {
		 IceAndFireService.hosueDetail(main.characterId)
		 .then(function successCallback(response)
		 {
			 main.charcterInstance.push(response.data)
			console.log(main.characterInstance);
		 },function errorCallback(reason)
		 {
			 alert("getting some error with Book Instance");	
		 })
	 };
	 this.characterwiseDetail();
}]);