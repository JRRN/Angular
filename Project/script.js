//Modelo Alumnos
function AlumnosController($scope){
	$scope.alumnos=[
		{nombre: "Rafa RN", telefono: "123456789", curso: "Primero de Angular"},
		{nombre: "Fer RN",  telefono: "123456789", curso: "Primero de Angular"},
		{nombre: "Vir RN",  telefono: "123456789", curso: "Primero de Angular"},
		{nombre: "Luis RN", telefono: "123456789", curso: "Primero de Angular"}
	];
	
	$scope.Save = function(){
		$scope.alumnos.push({
			nombre:$scope.nuevoAlumno.nombre,
			nombre:$scope.nuevoAlumno.telefono,
			nombre:$scope.nuevoAlumno.curso,
		});
		$scope.formVisibility = false;
		console.log($scope.formVisibility);
	}

	$scope.formVisibility=false;
	$scope.ShowForm = function(){
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	}
}

