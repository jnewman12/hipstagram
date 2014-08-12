// Angular Start
//window.App = angular.module('hipstagram', ['ngResource'])

var app = angular.module("hipstagram", ['ngResource']);
app.controller('MainController', function ($scope, instagram){

    $scope.layout = 'grid';

    $scope.pics = [];

    instagram.fetchPopular(function(data){

        $scope.pics = data;
    });

});
app.factory('instagram', function($resource){
	return {
		fetchPopular: function(callback){

			var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
				client_id: '8d342d39937545babc238fdecc033a8a'
			},{

				fetch:{method:'JSONP'}
			});

			api.fetch(function(response){
				callback(response.data);

			});
		}
	}
});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//


;
