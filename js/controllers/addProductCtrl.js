app.controller('addProductCtrl', function($scope, categories, productsAPI) {
    if (!localStorage.getItem('jwt')) $location.path('/')

    const config = {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    }

    $scope.categories = categories.data.categories
    $scope.success = false
    $scope.error = false

    $scope.insert = product => {
        $scope.success = false
        $scope.error = false
        
        product.id_category = $scope.selectedCategory.id
        productsAPI.addProduct(product, config)
            .then(data => {
                if (!data.data.error && data.data.logged) {
                    $scope.success = true;
                } else {
                    $scope.error = true
                    $scope.error_message = data.data.error
                }
            })
    }
})