angular.module('homePageModule')
	.controller('personDetailsCtrl',function(MovieSoapDetailsSrv,$routeParams,$scope){
		var id = $routeParams.id;
		$scope.person ={};
		MovieSoapDetailsSrv.movieId(id);
		MovieSoapDetailsSrv.personDetails().then(function(results){
			$scope.person=results;
		});

	});