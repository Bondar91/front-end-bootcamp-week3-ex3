(function() {

	var blogAppControllers = angular.module("blogApp.controllers", []);

	blogAppControllers.controller("BlogController", ["API_URL", "$http", "$scope", function(API_URL, $http, $scope) {
		$http.get(API_URL)
			.then(function(response) {
				console.log(response);
				$scope.posts = response.data;
			});
				
	}]);

	blogAppControllers.controller("PostController", ["API_URL", "$http", "$routeParams", "$scope", function(API_URL, $http, $routeParams, $scope) {
		$http.get(API_URL + "/" + $routeParams.id)
			.then(function(response) {
				console.log(response);
				$scope.post = response.data;
			});
	}]);

})();