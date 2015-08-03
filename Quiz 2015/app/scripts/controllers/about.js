'use strict';

/**
 * @ngdoc function
 * @name proApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proApp
 */

/*angular.module('proApp')
	.controller('AboutCtrl', function () {
	this.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];
	}
);*/

angular.module('proApp')
	.controller('AboutCtrl', function($scope){
		$scope.about = [
		  	{
				name: 'J.Rafa Ramón',
				image: 'images/foto.png',
				videomp4: 'http://www.w3schools.com/html/mov_bbb.mp4',
				videoogg: 'http://www.w3schools.com/html/mov_bbb.ogg'	
			}
		];
	}
);

