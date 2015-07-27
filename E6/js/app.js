(function(){
    "use strict";

    angular.module('Bookmarks',[
        //dependencies here
    ])

    .controller('MainController',function($scope){
        $scope.name = 'Invitado'
        $scope.categories = ['HTML5','JavaScript','CSS','Games'];
        $scope.bookmarks = [ //<--- Adding the data
            {id:1,name:'Quizzpot.com',url:'https://quizzpot.com',category:'JavaScript'},
            {id:2,name:'Html5 Game Devs',url:'https://html5gamedevs.com',category:'Games'},
            {id:3,name:'CSS Tricks',url:'http://css-tricks.com',category:'CSS'},
            {id:4,name:'Bootstrap',url:'http://getbootstrap.com',category:'CSS'},
            {id:5,name:'Card',url:'http://jessepollak.github.io/card/',category:'JavaScript'}
        ];
        //...

        $scope.currentCategory = 'JavaScript';    //Step 1

        $scope.setCurrentCategory = function(category){ //Step 2
            $scope.currentCategory = category;          //Step 3
        }
        $scope.isCurrentCategory = function(category){ //Step 2
            return $scope.currentCategory = category;          //Step 3
        }
    });

})();