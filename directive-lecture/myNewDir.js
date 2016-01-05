angular.module('directiveLecture')
.directive('myNewDir', function() {
	return {
		  templateUrl: 'myNewDir.html'
		, restrict: 'E'
		, scope: {
			firstName: '='
		}
		, link: function( scope, elem, attrs ) {
			console.log(scope.firstName);
			console.log(elem);
			console.log(attrs);
			elem.css({'color': 'blue'});
			// elem.text(scope.firstName)
		}
		, controller: 'mainCtrl'
	}
});