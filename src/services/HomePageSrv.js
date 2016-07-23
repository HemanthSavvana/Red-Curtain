angular.module('homePageModule')
.service('HomePageSrv',function($http){
	
	return {
		movieUpcoming : (function(){
			return $http.get('http://api.themoviedb.org/3/movie/upcoming?language=en&api_key=fa72e2361da29c69da447d8e84ef8525')
			.then(function(data){
				return data.data.results;
			},function(data){
				alert('movieUpcoming api call failed');
			});
		})(),

		tvOnAir : (function(){
			return $http.get('http://api.themoviedb.org/3/tv/on_the_air?api_key=fa72e2361da29c69da447d8e84ef8525')
			.then(function(data){
				return data.data.results;
			},function(data){
				alert('tvOnAir api failed');
			});
		})()

	};

});