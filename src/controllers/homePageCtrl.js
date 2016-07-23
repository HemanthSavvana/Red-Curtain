angular.module('homePageModule')
.controller('homePageCtrl',function(HomePageSrv,$scope,$location){
	$scope.movieUpcoming=[];
	HomePageSrv.movieUpcoming.then(function(results){
		$scope.movieUpcoming=results;
	});
	$scope.tvOnAir=[];
	HomePageSrv.tvOnAir.then(function(results){
		$scope.tvOnAir=results;
	});
	$scope.showMovieDetails = function(id){
		$location.path('/movie/'+id);
	};
	$scope.showSoapDetails = function(id){
		$location.path('/soap/'+id);
	};
});