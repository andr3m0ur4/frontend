app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')

    $routeProvider.when('/', {
        templateUrl: 'view/home.html',
        controller: 'marketPlaceCtrl',
        resolve: {
            totalProducts: productsAPI => productsAPI.getTotal(),
            totalStores: storesAPI => storesAPI.getTotal(),
            categories: categoriesAPI => categoriesAPI.getCategories(),
            products: productsAPI=> productsAPI.latestProducts()
        }
    })
    $routeProvider.when('/signup', {
        templateUrl: 'view/signup.html',
        controller: 'signupCtrl'
    })
})