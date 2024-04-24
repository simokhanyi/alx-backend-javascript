function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      // Simulate a successful response
      resolve({ status: 200, body: 'Success' });
    }, 1000);
  });
}

export default getResponseFromAPI;
