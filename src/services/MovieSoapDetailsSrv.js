angular.module('homePageModule')
	.service('MovieSoapDetailsSrv',function($http){

		this.id=null;
		this.movieId = function(id){
		this.id = id;
		return this.id;
	    };

		this.movieDetails = function(){
			return $http.get('http://api.themoviedb.org/3/movie/'+this.id,{
				params:{api_key:"fa72e2361da29c69da447d8e84ef8525"}
			})
			.then(function(data){
				return data.data.results;
			},function(data){
				alert('movieDetails api failed');
			});
		};
		this.soapDetails = function(){
			return $http.get('http://api.themoviedb.org/3/tv/'+this.id,{
				params:{api_key:"fa72e2361da29c69da447d8e84ef8525"}
			})
			.then(function(data){
				return data.data.results;
			},function(data){
				alert('soapDetails api failed');
			});
		};
		this.popularMovies = function(){
			return $http.get('https://api.themoviedb.org/3/movie/popular',{
				params:{api_key:"fa72e2361da29c69da447d8e84ef8525"}
			}).then(function(data){
				return data.data.results;
			},function(data){
				alert('popularMovies api failed');
			});
		};
		this.topRatedMovies = function(){
			return $http.get('https://api.themoviedb.org/3/movie/top_rated',{
				params:{api_key:"fa72e2361da29c69da447d8e84ef8525"}
			}).then(function(data){
				return data.data.results;
			},function(data){
				alert('topRatedMovies api failed');
			});
		};
		this.popularTv = function(){
			return $http.get('https://api.themoviedb.org/3/tv/popular',{
				params:{api_key:"fa72e2361da29c69da447d8e84ef8525"}
			}).then(function(data){
				return data.data.results;
			},function(data){
				alert('popularTv api failed');
			});
		};
		this.topRatedTv = function(){
			return $http.get('https://api.themoviedb.org/3/tv/top_rated',{
				params:{api_key:"fa72e2361da29c69da447d8e84ef8525"}
			}).then(function(data){
				return data.data.results;
			},function(data){
				alert('topRatedTv api failed');
			});
		};
		this.popularPerson = function(){
			return $http.get('https://api.themoviedb.org/3/person/popular',{
				params:{api_key:"fa72e2361da29c69da447d8e84ef8525"}
			}).then(function(data){
				return data.data.results;
			},function(data){
				alert('popularPerson api failed');
			});
		};
	});