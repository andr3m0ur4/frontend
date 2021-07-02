app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')

    $routeProvider.when('/', {
        templateUrl: 'view/index.html',
        controller: 'marketPlaceCtrl'
    })
})