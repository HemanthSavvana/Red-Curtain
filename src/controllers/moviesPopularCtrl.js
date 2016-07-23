angular.module('homePageModule')
	.controller('moviesPopularCtrl',function(MovieSoapDetailsSrv,$scope){
		$scope.movies=[];
		MovieSoapDetailsSrv.popularMovies()
			.then(function(results){
				$scope.movies=results;
			},function(data){
				alert('No movies retrieved to display');
			});
		$scope.showMovieDetails = function(id){
			
		};			
	});