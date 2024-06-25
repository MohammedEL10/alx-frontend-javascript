exportfunction handleResponseFromAPI(promise) {
    return new Promise((resolve, reject) => {
        if (promise) {
            resolve({
                status: 200,
                body: success
            });
        } else {
            reject(new Error('Got a response from the API'))
        }
    })
}
console.log('Got a response from the API');