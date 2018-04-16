myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when("/allDetails",{
            // location of the template
        	templateUrl		: 'views/mainpage.html',
        	// Which controller it should use 
            controller 		: 'indexController',
            // what is the alias of that controller.
        	controllerAs 	: 'allInfo'
        })
        .when("/books",{
            // location of the template
        	templateUrl		: 'views/book.html',
        	// Which controller it should use 
            controller 		: 'firstController',
            // what is the alias of that controller.
        	controllerAs 	: 'firstInfo'
        })
        .when("/houses",{
        	templateUrl     : 'views/house.html',
        	controller 		: 'firstController',
        	controllerAs 	: 'firstInfo'
        })
		 .when("/characters",{
              templateUrl : 'views/character.html',
              controller : 'firstController',
              controllerAs : 'firstInfo'
           })
		   .when("/books/:Id1",{
              templateUrl : 'views/books-detail.html',
              controller : 'secondController',
              controllerAs : 'singleInfo'
           })
		   .when("/houses/:Id2",{
              templateUrl : 'views/houses-detail.html',
              controller : 'secondController',
              controllerAs : 'singleInfo'
           })
		   .when("/characters/:Id3",{
              templateUrl : 'views/characters-detail.html',
              controller : 'secondController',
              controllerAs : 'singleInfo'
           })
        .otherwise(
            {
                redirectTo:'/'
            }
        );
}]);