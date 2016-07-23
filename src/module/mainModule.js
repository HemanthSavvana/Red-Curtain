angular.module('mainModule',['ngMaterial','ngMaterialSidemenu','ngMdIcons'])
.controller('toolBarCtrl',function($scope,$interval,$http){

var obj = {content:null};
var c=1;
var jsonLen = 6;
 $scope.message = {
 	author: "Hemanth",
 	quote:"Amdocs"};

    $http.get('src/data/quotes.json').success(function(data) {
        obj.content = data;
        console.log(obj.content);
    });    


$interval(function(){
$scope.message= obj.content["object"+c];
c++;
if(c==jsonLen){
	c=1;
}
},5000);
});
