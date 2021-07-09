app.controller('marketPlaceCtrl', function($scope, totalProducts, totalStores, categories, products, configValue) {
    $scope.totalProducts = totalProducts.data.total
    $scope.totalStores = totalStores.data.total
    $scope.categories = categories.data.categories
    $scope.products = products.data.data
    $scope.url = configValue.baseURL
    
    $scope.isEmpty = picture => picture ? false : true
})