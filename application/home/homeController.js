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
	}
]);