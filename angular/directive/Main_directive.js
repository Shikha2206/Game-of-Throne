myApp.directive("myCharacters",function(){
    return {
        restrict:"E",
        templateUrl:"./views/characters.html",
        controller : function($scope){
                }
            }
        }
    }
});
myApp.directive("myBooks",function(){
    return {
        restrict:"E",
        templateUrl:"./views/books.html",
        controller : function($scope){
        }
    }
});
myApp.directive("myHouses",function(){

    return {
        restrict:"E",
        templateUrl:"./views/houses.html",
        controller : function($scope){    
        }
    }
});
myApp.directive("myAllDetails",function(){
    return {
        restrict:"E",
        templateUrl:"./views/main-page.html",
        controller : function($scope){
                }
            }
});