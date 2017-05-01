app.controller('propertyController', [ '$scope', 'commonFactory',
	function ($scope, commonFactory) {
		$scope.types = [
			{
				type: 'All Types',
				id: '1'
			},
			{
				type: 'Type 1',
				id: '2'
			},
			{
				type: 'Type 2',
				id: '2'
			}
		];
		$scope.selectedType = $scope.types[0];
		commonFactory.getData().then(function(response) {
			$scope.searchList = response.searchList;
		},
		function(error) {
			console.log(error);
		});
	}
]);