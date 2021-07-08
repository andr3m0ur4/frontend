app.factory('productsAPI', ($http, config, httpPostFactory) => {
    const getTotal = () => $http.get(`${config.baseURL}/products/total`)
    const latestProducts = () => $http.get(`${config.baseURL}/products/latest-products`)
    const myProducts = configData => $http.get(`${config.baseURL}/products/my-list`, configData)
    const getProduct = id => $http.get(`${config.baseURL}/products/get/${id}`)
    const addProduct = (data, configData) => $http.post(`${config.baseURL}/products/new`, data, configData)
    const updatePhoto = (data, callback) => httpPostFactory(`${config.baseURL}/products/update-image`, data, callback)
    const updateProduct = (data, configData) => $http.put(`${config.baseURL}/products/${data.id}`, data, configData)

    return {
        getTotal,
        latestProducts,
        myProducts,
        getProduct,
        addProduct,
        updatePhoto,
        updateProduct
    }
})