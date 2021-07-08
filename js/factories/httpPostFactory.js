app.factory('httpPostFactory', $http => {
    return (file, data, callback) => {
        $http({
            url: file,
            method: 'POST',
            data,
            headers: {
                'Content-Type': undefined
            }
        }).then(response => {
            callback(response)
        })
    }
})