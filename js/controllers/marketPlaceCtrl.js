app.controller('marketPlaceCtrl', function($scope, totalProducts, totalStores, categories, products) {
    $scope.totalProducts = totalProducts.data.total
    $scope.totalStores = totalStores.data.total
    $scope.categories = categories.data.categories
    $scope.products = products.data.data
    
    $scope.isEmpty = picture => picture ? false : true
})