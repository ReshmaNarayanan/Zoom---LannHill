angular.module('lhAppRouter', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('public', {
		        views: {
		            '': { 
		            	templateUrl: "common/templates/base.tpl.html" 
		            },
		            'header@public': { 
		                templateUrl: 'common/templates/header.tpl.html'
		            },
		            'footer@public': { 
						templateUrl: 'common/templates/footer.tpl.html'
			     	}
		        }
		    })
			.state('propertySales', {
				parent: 'public',
				url: '/propertySales',
				views: {
					'content@public': {
						templateUrl: 'application/propertySales/propertySales.html',
						controller: 'propertyController'
					}
				}
			});
		$urlRouterProvider.otherwise('/propertySales');
	}
])