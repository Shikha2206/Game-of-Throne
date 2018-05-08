myApp.directive("myCharacters",function(){

    return {
        restrict:"E",
        templateUrl:"./views/characters.html",
        controller : function($scope){
            var index=$scope.item.url.lastIndexOf('/');
            $scope.id=$scope.item.url.substring(index+1);
            if($scope.item.url.search('characters')>-1){
                if($scope.item.aliases[0].length>1 && !$scope.item.name){
                    var aliases=$scope.item.aliases[0];
                    var name=$scope.item.name;
                    $scope.item.name=aliases;
                }
            }
        }
    }
});

myApp.directive("myBooks",function(){

    return {
        restrict:"E",
        templateUrl:"/views/books.html",
        controller : function($scope){
            var index=$scope.item.url.lastIndexOf('/');
            $scope.id=$scope.item.url.substring(index+1);
            // console.log($scope.item.name);
        }
    }
});

myApp.directive("myHouses",function(){

    return {
        restrict:"E",
        templateUrl:"./views/houses.html",
        controller : function($scope){
            var index=$scope.item.url.lastIndexOf('/');
            $scope.id=$scope.item.url.substring(index+1);
            // console.log($scope.item.name);
        }
    }
});