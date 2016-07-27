angular.module('homePageModule')
  .controller('sideNavBarCtrl',function($location,$scope,$window){
  	$scope.facebook = function(){
  	
  		$window.location.href="https://www.facebook.com/hemanth558";
  	};
  	$scope.linkedIn = function(){
  		$window.location.href= "https://in.linkedin.com/in/hemanth-savvana-37a10253";
  	};
  	$scope.github = function(){
  		$window.location.href= "https://github.com/HemanthSavvana/";
  	};
  });