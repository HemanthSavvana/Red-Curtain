angular.module('homePageModule')
.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl:'src/templates/homePageTemplate.html',
			controller : 'homePageCtrl'
		}).

		when('/movie/popular',{
			templateUrl: 'src/templates/moviesPAndTRTemplate.html',
			controller : 'moviesPopularCtrl'
		}).
		when('/movie/top_rated',{
			templateUrl: 'src/templates/moviesPAndTRTemplate.html',
			controller : 'moviesTopRatedCtrl'
		}).
		when('/tv/popular',{
			templateUrl: 'src/templates/tvPAndTRTemplate.html',
			controller : 'tvPopularCtrl'
		}).
		when('/tv/top_rated',{
			templateUrl: 'src/templates/tvPAndTRTemplate.html',
			controller : 'tvTopRatedCtrl'
		}).
		when('/person/popular',{
			templateUrl: 'src/templates/personPopularTemplate.html',
			controller : 'personPopularCtrl'
		}).
		when('/movie/:id',{
			templateUrl:'src/templates/movieDetailsTemplate.html',
			controller: 'movieDetailsCtrl'
		}).
		when('/soap/:id',{
			templateUrl:'src/templates/soapDetailsTemplate.html',
			controller: 'soapDetailsCtrl'
		}).
		otherwise({
			redirectTo: '/'
		})
}]);