angular.module('homePageModule')
	.controller('movieDetailsCtrl',function(MovieSoapDetailsSrv,$routeParams,$scope){
		var id = $routeParams.id;
		$scope.movie ={};
		MovieSoapDetailsSrv.movieId(id);
		MovieSoapDetailsSrv.movieDetails().then(function(results){
			$scope.movie=results;
		});

	});