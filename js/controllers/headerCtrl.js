headerModule.controller('headerCtrl', function($scope, $location, storesAPI) {
    $scope.isLogged = () => localStorage.getItem('jwt')

    if ($scope.isLogged()) {
        const config = {
            headers: {
                jwt: localStorage.getItem('jwt')
            }
        }

        storesAPI.getName(config).then(data => {
            if (data.data.logged) {
                $scope.company_name = data.data.company_name
            }
        })

        $scope.logout = () => {
            localStorage.removeItem('jwt')
            $location.path('/')
        }
    }
})