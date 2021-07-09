app.factory('productsAPI', ($http, configValue, httpPostFactory) => {
    const getTotal = () => $http.get(`${configValue.baseURL}/products/total`)
    const latestProducts = () => $http.get(`${configValue.baseURL}/products/latest-products`)
    const myProducts = configData => $http.get(`${configValue.baseURL}/products/my-list`, configData)
    const getProduct = id => $http.get(`${configValue.baseURL}/products/get/${id}`)
    const addProduct = (data, configData) => $http.post(`${configValue.baseURL}/products/new`, data, configData)
    const updatePhoto = (data, callback) => httpPostFactory(`${configValue.baseURL}/products/update-image`, data, callback)
    const updateProduct = (data, configData) => $http.put(`${configValue.baseURL}/products/${data.id}`, data, configData)
    const deletePhoto = (id, configData) => $http.delete(`${configValue.baseURL}/products/delete-image/${id}`, configData)
    const deleteProduct = (id, configData) => $http.delete(`${configValue.baseURL}/products/${id}`, configData)

    return {
        getTotal,
        latestProducts,
        myProducts,
        getProduct,
        addProduct,
        updatePhoto,
        updateProduct,
        deletePhoto,
        deleteProduct
    }
})