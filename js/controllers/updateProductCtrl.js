app.controller('updateProductCtrl', function($scope, $location, $document, product, categories, productsAPI) {
    if (!localStorage.getItem('jwt')) $location.path('/')

    const config = {
        headers: {
            'Content-Type': 'application/json',
            jwt: localStorage.getItem('jwt')
        }
    }

    $scope.product = product.data.data
    delete $scope.product['\u0000*\u0000db']
    $scope.categories = categories.data.categories
    $scope.selectedCategory = {
        id: $scope.product.id_category,
        name: $scope.product.category
    }
    $scope.success = false

    $scope.update = product => {
        $scope.success = false
        product.id_category = $scope.selectedCategory.id
        const formData = new FormData()
        const fileObject = $document.find('#photos')[0].files[0]

        if (fileObject) {
            formData.append('picture', fileObject)
            productsAPI.updatePhoto(formData, data => {
                if (!data.data.error) {
                    product.picture = data.data.new_filename
                    update(product)
                }

                $document.find('#photos')[0].value = ''
            })
        } else {
            update(product)
        }
    }

    $scope.deletePhoto = id => {
        productsAPI.deletePhoto(id, config)
            .then(data => {
                if (!data.data.error && data.data.logged && data.data.thats_me) {
                    $scope.product.picture = ''
                }
            })
    }

    function update(product) {
        productsAPI.updateProduct(product, config)
            .then(data => {
                if (!data.data.error && data.data.logged && data.data.thats_me) {
                    $scope.success = true
                }
            })
    }
})