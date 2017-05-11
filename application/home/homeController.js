app.controller('homeController', [ '$scope',
	function ($scope) {
		$scope.featured = [{
			"name" : "Golden Mile 1, Palm Jumeirah",
			"aed" : "AED 2,549,000/-",
			"image" : "assets/images/gm1.png",
			"banner": "Special Offers"
		},
		{
			"name" : "Jumeirah Zabeel Saray Palm Jumeirah",
			"aed" : "AED 30,000,000/-",
			"image" : "assets/images/jzs.png",
			"banner": "Hot Deals"
		},
		{
			"name" : "The Address The BLVD Downtown Dubai",
			"aed" : "AED 2,700,000/-",
			"image" : "assets/images/address.png",
			"banner": "Featured Properties"
		}];

		$scope.team = [{
			"id" : 1,
			"name" : "Daniel",
			"designation" : "Real Estate Agent",
			"image" : "assets/images/daniel.png",
			"phone": "+971 50 902 0486",
			"email": "daniel@lannhill.com"
		},
		{
			"id" : 2,
			"name" : "Omar",
			"designation" : "Real Estate Agent",
			"image" : "assets/images/omar.png",
			"phone": "+971 50 902 0486",
			"email": "omar@lannhill.com"
		},
		{
			"id" : 3,
			"name" : "Ahmad",
			"designation" : "Real Estate Agent",
			"image" : "assets/images/ahmad.png",
			"phone": "+971 50 902 0486",
			"email": "ahmad@lannhill.com"
		},
		{
			"id" : 4,
			"name" : "Labinot",
			"designation" : "Real Estate Agent",
			"image" : "assets/images/labinot.png",
			"phone": "+971 50 902 0486",
			"email": "labinot@lannhill.com"
		},
		{
			"id" : 5,
			"name" : "Olga",
			"designation" : "Real Estate Agent",
			"image" : "assets/images/olga.png",
			"phone": "+971 50 902 0486",
			"email": "olga@lannhill.com"
		},
		{
			"id" : 5,
			"name" : "Omar2",
			"designation" : "Real Estate Agent",
			"image" : "assets/images/omar.png",
			"phone": "+971 50 902 0486",
			"email": "omar@lannhill.com"
		},
		{
			"id" : 7,
			"name" : "Ahmad2",
			"designation" : "Real Estate Agent",
			"image" : "assets/images/ahmad.png",
			"phone": "+971 50 902 0486",
			"email": "ahmad@lannhill.com"
		}];
	
		var subArr = [];
		if($scope.team.length >= 5) {
			for (i = 0; i < $scope.team.length; i += 5) {
				subArr.push($scope.team.slice(i,i+5));
		    }
		    $scope.groupedSlides = subArr;
		}
	}
]);