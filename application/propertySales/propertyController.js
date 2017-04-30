app.controller('propertyController', [ '$scope',
	function ($scope) {
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
	}
]);