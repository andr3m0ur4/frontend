app.factory('storesAPI', ($http, config) => {
    const getTotal = () => $http.get(`${config.baseURL}/stores/total`)
    const register = data => $http.post(`${config.baseURL}/stores/register`, data)

    return {
        getTotal,
        register
    }
})