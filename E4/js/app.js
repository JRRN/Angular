(function(){
    "use strict";

    angular.module('Bookmarks',[
        //dependencies here
    ])

    .controller('MainController',function($scope){ //Step 1
        $scope.name = 'Invitado',
         $scope.categories = ['HTML5','JavaScript','CSS','Games'];                       //Step 2

    });

})();