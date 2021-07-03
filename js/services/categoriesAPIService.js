app.factory('categoriesAPI', ($http, config) => {
    const getCategories = () => $http.get(`${config.baseURL}/categories`)

    return {
        getCategories
    }
})