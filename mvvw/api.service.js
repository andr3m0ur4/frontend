(()=> {
    'use strict'

    angular
        .module('mvvw')
        .service("$api.service", [ '$timeout', ApiService])

    function ApiService($timeout) {
        const that = this

        that.getWharever = getWharever
        
        function getWharever(wharever, callback = null) {
            $timeout(()=> {
                callback("OK!!! " + wharever)
            }, 3000)
        } 

    }
})()