angular.module('homePageModule')
	.controller('soapDetailsCtrl',function(MovieSoapDetailsSrv,$routeParams,$scope){
		var id = $routeParams.id;
		$scope.soapDetails ={};
		MovieSoapDetailsSrv.movieId(id);
		MovieSoapDetailsSrv.soapDetails().then(function(results){
			$scope.soapDetails=results;
		});

	});