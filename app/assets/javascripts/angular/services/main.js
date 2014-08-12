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