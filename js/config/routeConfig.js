app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')

    $routeProvider.when('/', {
        templateUrl: 'view/home.html',
        controller: 'marketPlaceCtrl',
        resolve: {
            totalProducts: productsAPI => productsAPI.getTotal()
        }
    })
})