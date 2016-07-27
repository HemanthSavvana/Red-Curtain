angular.module('homePageModule')
	.config(function($authProvider){

		$authProvider.facebook({
      clientId: '1613913195568060',
      responseType: 'token'
    });

    $authProvider.google({
      clientId: '193211428818-5hvovch3vos543217k23mkbfsce84iaa.apps.googleusercontent.com',
      responseType: 'token'
    });

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });

	});