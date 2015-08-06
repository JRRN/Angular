'use strict';

/**
 * @ngdoc function
 * @name proApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proApp
 */
angular.module('proApp')
	.controller('MainCtrl', function ($scope, $http) {
		$scope.lenguajes=[
			{title: "HTML5",url:'http://www.w3.org/TR/html5/',srcimg:'images/html5.png'},
			{title: "CSS3",url:'http://www.w3.org/Style/CSS/',srcimg:'images/css3.png'},
			{title: "Javascript",url:'https://www.javascript.com',srcimg:'images/js.png'},
			{title: "AngularJS",url:'https://angularjs.org',srcimg:'images/angular.png'},
			{title: "jQuery",url:'http://jquery.com',srcimg:'images/jquery.png'},
			{title: "Bootstrap",url:'http://getbootstrap.com',srcimg:'images/bootstrap.png'},
			{title: "Bower",url:'http://bower.io',srcimg:'images/bower.png'},
			{title: "Json",url:'http://json.org',srcimg:'images/json.png'},
			{title: "Grunt",url:'http://gruntjs.com',srcimg:'images/grunt.png'},
			{title: "Karma",url:'https://karma-runner.github.io/0.13/index.html',srcimg:'images/karma.png'},
			{title: "Yeoman",url:'http://yeoman.io',srcimg:'images/yo.png'},
			{title: "Git",url:'http://git-scm.com',srcimg:'images/git.png'},
			{title: "Github",url:'https://github.com',srcimg:'images/github.png'}
		];
	}
);
