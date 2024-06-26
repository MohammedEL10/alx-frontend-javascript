function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success'
    };
  }).catch(() => {
    console.error('An error occurred while fetching data from the API');
    return new Error();
  });
}