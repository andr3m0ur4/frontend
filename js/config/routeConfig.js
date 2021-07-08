app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')

    const config = {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    }

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
    $routeProvider.when('/signin', {
        templateUrl: 'view/signin.html',
        controller: 'signinCtrl'
    })
    $routeProvider.when('/my-products', {
        templateUrl: 'view/my-products.html',
        controller: 'myProductsCtrl',
        resolve: {
            myProducts: productsAPI => productsAPI.myProducts(config)
        }
    })
    $routeProvider.when('/product/:id', {
        templateUrl: 'view/product.html',
        controller: 'productCtrl',
        resolve: {
            product: (productsAPI, $route) => productsAPI.getProduct($route.current.params.id)
        }
    })
    $routeProvider.when('/products/add', {
        templateUrl: 'view/add-product.html',
        controller: 'addProductCtrl',
        resolve: {
            categories: categoriesAPI => categoriesAPI.getCategories()
        }
    })
    $routeProvider.when('/products/update/:id', {
        templateUrl: 'view/update-product.html',
        controller: 'updateProductCtrl',
        resolve: {
            categories: categoriesAPI => categoriesAPI.getCategories(),
            product: (productsAPI, $route) => productsAPI.getProduct($route.current.params.id)
        }
    })
})