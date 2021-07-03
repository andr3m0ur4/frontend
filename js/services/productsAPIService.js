app.factory('productsAPI', ($http, config) => {
    const getTotal = () => $http.get(`${config.baseURL}/products/total`)
    const latestProducts = () => $http.get(`${config.baseURL}/products/latest-products`)

    return {
        getTotal,
        latestProducts
    }
})