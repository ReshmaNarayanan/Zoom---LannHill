app.directive('searchList', [
	function () {
		return {
	        restrict: 'AE',
			scope: {
				list: "="
			},
			templateUrl: 'application/propertySales/search-list.html'
	    };
	}
]);