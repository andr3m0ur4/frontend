app.controller('productCtrl', function($scope, product, configValue) {
    $scope.product = product.data.data
    $scope.url = configValue.baseURL

    $scope.isEmpty = picture => picture ? false : true
})