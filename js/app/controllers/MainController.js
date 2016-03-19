function MainController($scope) {
	$scope.name = 'Sara';
}

angular
	.module('app')
	.controller('MainController', MainController);