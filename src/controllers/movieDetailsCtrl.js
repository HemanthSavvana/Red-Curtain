angular.module('homePageModule')
	.controller('movieDetailsCtrl',function(MovieSoapDetailsSrv,$routeParams,$scope){
		var id = $routeParams.id;
		$scope.movieDetails ={};
		MovieSoapDetailsSrv.movieId(id);
		MovieSoapDetailsSrv.movieDetails().then(function(results){
			$scope.movieDetails=results;
		});

	});