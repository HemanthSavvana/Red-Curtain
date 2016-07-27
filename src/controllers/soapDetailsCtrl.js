angular.module('homePageModule')
	.controller('soapDetailsCtrl',function(MovieSoapDetailsSrv,$routeParams,$scope){
		var id = $routeParams.id;
		$scope.tv ={};
		MovieSoapDetailsSrv.movieId(id);
		MovieSoapDetailsSrv.soapDetails().then(function(results){
			$scope.tv=results;
		});

	});