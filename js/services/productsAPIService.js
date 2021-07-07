app.factory('productsAPI', ($http, config) => {
    const getTotal = () => $http.get(`${config.baseURL}/products/total`)
    const latestProducts = () => $http.get(`${config.baseURL}/products/latest-products`)
    const myProducts = configData => $http.get(`${config.baseURL}/products/my-list`, configData)
    const addProduct = (data, configData) => $http.post(`${config.baseURL}/products/new`, data, configData)

    return {
        getTotal,
        latestProducts,
        myProducts,
        addProduct
    }
})