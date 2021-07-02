app.factory('productsAPI', ($http, config) => {
    const _getTotal = () => $http.get(`${config.baseURL}/products/get-total`)

    return {
        getTotal: _getTotal
    }
})