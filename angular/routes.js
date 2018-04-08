myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
	.when("/allDetails",{
            // location of the template
        	templateUrl		: 'views/index-view.html',
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
		 .when("/Characters",{
              templateUrl : 'views/character.html',
              controller : 'firstController',
              controllerAs : 'firstInfo'
           })
        .otherwise(
            {
                redirectTo:'/'
            }
        );
}]);