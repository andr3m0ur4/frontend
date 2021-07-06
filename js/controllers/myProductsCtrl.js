app.controller('myProductsCtrl', function($scope, $location, myProducts) {
    if (!localStorage.getItem('jwt')) $location.path('/')

    $scope.isEmpty = picture => picture ? false : true
    
    if (!myProducts.data.error && myProducts.data.logged) {
        $scope.products = myProducts.data.data
    }
})