angular.module('homePageModule')
	.controller('moviesPopularCtrl',function(MovieSoapDetailsSrv,$scope,$location){
		$scope.movies=[];
		MovieSoapDetailsSrv.popularMovies()
			.then(function(results){
				$scope.movies=results;
			},function(data){
				alert('No movies retrieved to display');
			});
		$scope.showMovieDetails = function(id){
		$location.path('/movie/'+id);
	};			
	});