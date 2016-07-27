angular.module('homePageModule')
	.controller('tvTopRatedCtrl',function(MovieSoapDetailsSrv,$scope,$location){
		$scope.tv=[];
		MovieSoapDetailsSrv.topRatedTv()
			.then(function(results){
				$scope.tv=results;
			},function(data){
				alert('No TV series retrieved to display');
			});
		$scope.showSoapDetails = function(id){
		$location.path('/soap/'+id);
	};

	});