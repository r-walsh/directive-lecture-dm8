angular.module('directiveLecture')
.directive('testDir', function() {
	return {
		  templateUrl: 'testDir.html'
		, restrict: 'E'
		, scope: {
			  firstName: '='
			, lastName: '@'
			, alertName: '&'
		}
	}
});