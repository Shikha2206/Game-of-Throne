//firstController to view all matches
myApp.controller('mainController',['$http',$q','$location','IceAndFireService',function($http,$location,$q,IceAndFireService){ 
   var main=this;
	this.getAllData=[];
	 this.loadAll = function(){
      var characters=IceAndFireService.bookData();
      var books = IceAndFireService.houseData();
      var houses = IceAndFireService.characterData();
      $q.all([characters,books,houses]).then(function(response){
        for(var i in response){
          for(var j in response[i].data)
          main.getAllData.push(response[i].data[j]);
          console.log(main.getAllData);
        }
		function error(response){
        console.log(response);
        switch (response.status) {
          case 404:
            $location.path('/404');
            break;
          default:
            $location.path('/500');
        }
      })
    }
  }
   this.loadAll();
}]);