angular.module('directiveLecture')
.controller('mainCtrl', function( $scope ) {
	$scope.test = 'This is a test';
	$scope.name = 'Ryan';


	$scope.whatsMyName = function( firstName, lastName ) {
		alert('Your name is ' + firstName + ' ' + lastName);
	}
});