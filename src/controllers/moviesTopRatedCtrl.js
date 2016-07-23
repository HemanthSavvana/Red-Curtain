angular.module('homePageModule')
	.controller('moviesTopRatedCtrl',function(MovieSoapDetailsSrv,$scope){
		$scope.movies=[];
		MovieSoapDetailsSrv.topRatedMovies()
			.then(function(results){
				$scope.movies=results;
			},function(data){
				alert('No movies retrieved to display');
			});
		$scope.showMovieDetails = function(id){
			
		};	
	});