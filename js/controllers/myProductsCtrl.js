app.controller('myProductsCtrl', function($scope, $route, myProducts, productsAPI) {
    if (!localStorage.getItem('jwt')) $location.path('/')

    const config = {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    }

    $scope.isEmpty = picture => picture ? false : true
    $scope.$ = $
    $scope.modal = {}
    
    if (!myProducts.data.error && myProducts.data.logged) {
        $scope.products = myProducts.data.data

        $scope.openModal = product => {
            $scope.modal.product = product
            $('#modal').modal('show')
        }

        $scope.delete = id => {
            productsAPI.deleteProduct(id, config)
                .then(data => {
                    if (!data.data.error && data.data.logged && data.data.thats_me) {
                        $('#modal').modal('hide')
                        $route.reload()
                    }
                })
        }
    }
})