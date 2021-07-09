app.controller('myProductsCtrl', function($scope, $route, $document, myProducts, productsAPI) {
    if (!localStorage.getItem('jwt')) $location.path('/')

    const config = {
        headers: {
            jwt: localStorage.getItem('jwt')
        }
    }

    $scope.isEmpty = picture => picture ? false : true
    $scope.modal = {}
    
    if (!myProducts.data.error && myProducts.data.logged) {
        $scope.products = myProducts.data.data

        $scope.openModal = product => {
            $scope.modal.product = product
            angular.element($document.find('#modal')).modal('show')
        }

        $scope.delete = id => {
            productsAPI.deleteProduct(id, config)
                .then(data => {
                    if (!data.data.error && data.data.logged && data.data.thats_me) {
                        angular.element($document.find('#modal')).modal('hide')
                        $route.reload()
                    }
                })
        }
    }
})