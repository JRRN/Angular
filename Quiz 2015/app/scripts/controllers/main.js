'use strict';

/**
 * @ngdoc function
 * @name proApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proApp
 */
angular.module('proApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
		  	{
		  		title: 'HTML5 Boilerplate',
				text: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
			},{
		  		title: 'AngularJS',
		  		text: 'AngularJS is a toolset for building the framework most suited to your application development.'
			},{
		  		title: 'Karma',
		  		text: 'Spectacular Test Runner for JavaScript.'
		  	},{ 
		  		title: 'E2E',
		  		text: ''
		  	},{
		  		title: 'Protactor',
		  		text: ''
		  	}
		];
	}
);
