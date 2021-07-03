app.factory('storesAPI', ($http, config) => {
    const _getTotal = () => $http.get(`${config.baseURL}/stores/total`)

    return {
        getTotal: _getTotal
    }
})