app.controller('signupCtrl', function($scope, storesAPI) {
    $scope.success = false
    $scope.error_email = false
    $scope.error = false
    $scope.error_message = ''

    $scope.registerStore = (store, address) => {
        const data = { store, address }

        storesAPI.register(data)
            .then(data => {
                if (!data.data.error) $scope.success = true
                if (data.data.error_email) $scope.error_email = true
                if (data.data.error) {
                    $scope.error = true
                    $scope.error_message = data.data.error
                }

                delete $scope.store
                delete $scope.address
                $scope.register.$setPristine()
            })
    }
})