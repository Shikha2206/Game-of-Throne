//firstController to view all matches
myApp.controller('firstController',['$http','$location','$routeParams','IceAndFireService',function($http,$location,$routeParams,IceAndFireService){ 
   var main=this;
	this.bookdata1=[]; 
	this.housedata1=[];
	this.characterdata1=[];
	this.housePrev=1;
	this.houseNext=1;
	this.charPrev=1;
	this.charNext=1;
	this.bookRecord = function()
	 {
      IceAndFireService.bookData()
       .then(function successCallback(response)
	   {
		   console.log(response);
		   console.log("inside book Controller");
		   console.log(response.data);
		   main.bookdata1=response.data;
		   console.log(main.bookdata1);
	   },function errorCallback(reason)
	   {
		   alert("getting some error with Book record");
	   })	   
     };
	 this.bookRecord();
	 this.houseRecord=function()
	{
		IceAndFireService.houseData()
		.then(function successCallback(response)
		{
			console.log("entering houses")
			console.log("inside house Controller");
			main.housedata1=response.data;
			console.log(main.housedata1);
		},function errorCallback(reason)
		{
			alert("getting some error with House record")
		})
	};
	this.houseRecord();
	this.characterRecord=function()
	  {
		  IceAndFireService.characterData()
		  .then(function successCallback(response)
		  {
			  console.log("entering characters")
		  console.log("inside character Controller");
		  main.characterdata1=response.data;
		  console.log(main.characterdata1);
		  },function errorCallback(reason)
		  {
			  alert("getting some error with character record");
		  })
	  };
	   this.characterRecord();
	   this.getPrevHouse=function(type)
	 {
		 main.housedata1.length=0;
		 if(type==='houses')
		 {
			 if(main.housePrev>1)
			 {
				 console.log(main.housePrev);
				 main.housePrev=main.housePrev-1;
				 IceAndFireService.houseAllDetail(main.housePrev)
				 .then(function successCallback(response)
				 {
					 main.housedata1=response.data;
					 console.log(main.housedata1);
				 },function errorCallback(reason)
				 {
					 alert("getting some error in prev records");
				 }
				 )
			}
			 else if(main.housePrev===1)
            {
                   alert("There's no previous entry");
            }
		 }
		main.houseNext=main.housePrev; 
	 };
	 this.getNextHouse=function(type)
	 {
		  main.housedata1.length=0;
		 if(type==='houses')
		 {
			 if(main.houseNext===0 || main.houseNext >0 )
			 {
				 main.houseNext=main.houseNext+1;
				 IceAndFireService.houseAllDetail(main.houseNext)
				 .then(function successCallback(response)
				 {
					 main.housedata1=response.data;
					 console.log(main.housedata1);
				 }
				,function errorCallback(reason)
				 {
					 alert("getting some error with next records");
				 })
			 }
		 }
		 main.housePrev=main.houseNext;
	 };
	 this.getPrevCharacter=function(type)
	 {
		 if(type==='characters')
		 {
			 main.characterdata1.length=0;
			 if(main.charPrev>0)
			 {
				 main.charPrev=main.charPrev-1;
				 IceAndFireService.characterAlldetail(main.charPrev)
				 .then(function successCallback(response)
				 {
					 main.characterdata1=response.data;
					 console.log(main.characterdata1);
				 },function errorCallback(reason)
				 {
					 alert("getting some error in prev records");
				 }
				 )
			}
			 else if(main.prevKey===0)
            {
                   alert("There's no previous entry");
            }
		 }
		 main.charNext=main.charPrev;
	 };
	 this.getNextCharacter=function(type)
	 {
		 if(type==='characters')
		 {
			 main.characterdata1.length=0;
			 if(main.charNext===0 || main.charNext >0 )
			 {
				 main.charNext=main.charNext+1;
				 IceAndFireService.characterAlldetail(main.charNext)
				 .then(function successCallback(response)
				 {
					 main.characterdata1=response.data;
					 console.log(main.characterdata1);
				 }
				 ,function errorCallback(reason)
				 {
					 alert("getting some error with next records");
				 })
			 }
		 }
		 main.charPrev=main.charNext;
	 }	 
}]);