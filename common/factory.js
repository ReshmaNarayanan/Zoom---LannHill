app.factory('commonFactory', ['$http', '$q',
	function ($http, $q) {
		return {
			getData: function () {
				var deferred = $q.defer();
				$http.get('assets/data/propertyData.json')
				.then(function(response) {
					deferred.resolve(response.data);
				},
				function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			}
		}
	}
]);