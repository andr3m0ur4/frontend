app.factory('storesAPI', ($http, config) => {
    const getTotal = () => $http.get(`${config.baseURL}/stores/total`)
    const register = data => $http.post(`${config.baseURL}/stores/register`, data)
    const login = data => $http.post(`${config.baseURL}/stores/login`, data)
    const getName = configData => $http.get(`${config.baseURL}/stores/get-name`, configData)

    return {
        getTotal,
        register,
        login,
        getName
    }
})