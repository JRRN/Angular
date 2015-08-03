'use strict';

/**
 * @ngdoc function
 * @name proApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proApp
 */


angular.module('proApp')
	.controller('PreguntasCtrl', function($scope){
		$scope.preguntas = [
		  	{
				pregunta: '¿Capital de España?',
				respuesta: 'Madrid',
				tema: 'Geografía'
			},{
				pregunta: '¿Capital de Italia?',
				respuesta: 'Roma',
				tema: 'Geografía'
			},{
				pregunta: '¿Lenguaje de Programación?',
				respuesta: 'AngularJS',
				tema: 'Tecnología'
			}
		];

		$scope.formVisibility=false;
		$scope.ShowForm = function(){
			$scope.formVisibility=true;
			console.log($scope.formVisibility);
		};

		$scope.addPregunta = function(){
			$scope.preguntas.push({
				pregunta:$scope.nuevaPregunta.pregunta,
				respuesta:$scope.nuevaPregunta.respuesta,
				tema:$scope.nuevaPregunta.tema,
			});
			$scope.formVisibility = false;
			console.log($scope.formVisibility);
		};

		$scope.delPregunta = function(index){
			$scope.preguntas.splice(index, 1);
		};
	}
);