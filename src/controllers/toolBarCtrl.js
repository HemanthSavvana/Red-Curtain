angular.module('homePageModule')
.controller('toolBarCtrl',function($interval,$http,$scope,$mdDialog,$auth){
	$scope.isOpen = "false";
	
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
	$scope.showDialog = function(ev){
	$mdDialog.show({
      controller: 'loginCtrl',
      templateUrl: 'src/templates/loginPopUpTemplate.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
	};

	$scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

	
});