angular.module('homePageModule')
	.controller('personPopularCtrl',function(MovieSoapDetailsSrv,$scope,$location){
		$scope.persons=[];
		MovieSoapDetailsSrv.popularPerson()
			.then(function(results){
				$scope.persons=results;
			},function(data){
				alert('No TV series retrieved to display');
			});
		$scope.showPersonDetails = function(id){
		$location.path('/person/'+id);
	};
	});