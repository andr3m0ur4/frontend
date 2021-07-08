app.controller('productCtrl', function($scope, product) {
    $scope.product = product.data.data

    $scope.isEmpty = picture => picture ? false : true
})