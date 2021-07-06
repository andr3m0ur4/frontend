app.factory('productsAPI', ($http, config) => {
    const getTotal = () => $http.get(`${config.baseURL}/products/total`)
    const latestProducts = () => $http.get(`${config.baseURL}/products/latest-products`)
    const myProducts = configData => $http.get(`${config.baseURL}/products/my-list`, configData)

    return {
        getTotal,
        latestProducts,
        myProducts
    }
})