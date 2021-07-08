app.controller('updateProductCtrl', function($scope, product, categories, productsAPI) {
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
        const formData = new FormData()
        const fileObject = document.getElementById('photos').files[0]

        if (fileObject) {
            formData.append('picture', fileObject)
            productsAPI.updatePhoto(formData, data => {
                if (!data.data.error) {
                    product.picture = data.data.new_filename
                    update(product)
                }

                document.getElementById('photos').value = ''
            })
        } else {
            update(product)
        }
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