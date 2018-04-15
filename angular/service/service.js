myApp.service('IceAndFireService',function($http)
{
var main=this;
this.baseUrl= "https://anapioficeandfire.com/api";

this.bookData=function()
{
	return $http.get(main.baseUrl+"/books");
}
this.bookDetail=function(item)
{
	return $http.get(main.baseUrl+"/books/"+item);
}
this.houseData=function()
{
	return $http.get(main.baseUrl+"/houses");
}
this.houseDetail=function(item)
{
	return $http.get(main.baseUrl + "/houses/" +item);
}
this.characterData=function()
{
	return $http.get(main.baseUrl + "/characters");
}
this.characterDetail=function(item)
{
	return $http.get(main.baseUrl + "/characters/" + item);
}
this.houseAlldetail=function(value)
{
	return $http.get(main.baseUrl + "/houses" + "?page=" + value + "&pageSize=10");
}
this.characterAlldetail=function(value)
{
	return $http.get(main.baseUrl + "/characters" + "?page=" + value + "&pageSize=10");
}
this.singleDetails=function(url)
{
	return $http.get(url);
}
});

