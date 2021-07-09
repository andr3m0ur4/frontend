app.factory('categoriesAPI', ($http, configValue) => {
    const getCategories = () => $http.get(`${configValue.baseURL}/categories`)

    return {
        getCategories
    }
})