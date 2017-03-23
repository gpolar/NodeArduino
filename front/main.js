var module = angular.module('fiapIoT',[]);
    module.controller('MainCtrl', function($scope, $http){
        
        $scope.ligar = function(){
            $http.get('http://localhost:3000/ligar').
            success(function(data){
                $scope.status = data;
                $scope.erro = '';
            })
            .error(function(error){
                $scope.erro = error;
            });
        };

        $scope.desligar = function(){
            $http.get('http://localhost:3000/desligar').
            success(function(data){
                $scope.status = data;
                $scope.erro = '';
            })
            .error(function(error){
                $scope.erro = error;
            });
        };

        $scope.temperatura = function(){
            $http.get('http://localhost:3000/temperature').
            success(function(data){
                $scope.status = data;
                $scope.erro = '';
            })
            .error(function(error){
                $scope.erro = error;
            });
        };

});