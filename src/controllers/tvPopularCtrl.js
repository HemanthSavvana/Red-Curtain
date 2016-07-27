	angular.module('homePageModule')
	.controller('tvPopularCtrl',function(MovieSoapDetailsSrv,$scope,$location){
		$scope.tv=[];
		MovieSoapDetailsSrv.popularTv()
			.then(function(results){
				$scope.tv=results;
			},function(data){
				alert('No TV series retrieved to display');
			});
		$scope.showSoapDetails = function(id){
		$location.path('/soap/'+id);
	};

	});