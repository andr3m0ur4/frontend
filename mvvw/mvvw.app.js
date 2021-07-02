(()=> {
    'use stric'
    
    angular
        .module('mvvw', [])
        .controller('leaocontroller', ['$scope', '$timeout', '$api.service', LeaoController])
    
    function LeaoController($scope, $timeout, $apiService) {

        $apiService.getWharever('qualquer coisa', (data)=> {
            $scope.name = data
        })


      
    }

})()
