angular.module('homePageModule')
.controller('toolBarCtrl',function($interval,$http,$scope){
	
	$scope.message = {
			author : "Akira Kurosawa",
			quote : "There is nothing that says more about its creator than the work itself."
	};

	var obj ={content : null};
	var c=1;
	$http.get('src/data/quotes.json').success(function(data){
		obj.content = data;
	});

	$interval(function(){
		$scope.message=obj.content["object"+c];
		c++;
		if(c==6){
			c=1;
		}
	},5000);

	$scope.nextQuote = function(){
		$scope.message=obj.content["object"+c];
		c++;
		if(c==6){
			c=1;
		}
	};

	
});