app.controller('signinCtrl', function($scope, $location, storesAPI) {
    $scope.error = false

    $scope.signin = store => {
        storesAPI.login(store)
            .then(data => {
                if (!data.data.error) {
                    localStorage.setItem('jwt', data.data.jwt)
                    delete $scope.store
                    $scope.signinForm.$setPristine()
                    $location.path('/')
                } else {
                    $scope.error = true
                }
            })
    }
})