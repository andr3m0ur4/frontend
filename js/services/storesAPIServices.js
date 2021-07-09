app.factory('storesAPI', ($http, configValue) => {
    const getTotal = () => $http.get(`${configValue.baseURL}/stores/total`)
    const register = data => $http.post(`${configValue.baseURL}/stores/register`, data)
    const login = data => $http.post(`${configValue.baseURL}/stores/login`, data)
    const getName = configData => $http.get(`${configValue.baseURL}/stores/get-name`, configData)

    return {
        getTotal,
        register,
        login,
        getName
    }
})