function handleResponseFromAPI(promise) {
  promise.then(
    // On resolution
    (response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    },
    // On rejection
    (error) => {
      console.log('Got a response from the API');
      return new Error();
    }
  );
}

export default handleResponseFromAPI;
