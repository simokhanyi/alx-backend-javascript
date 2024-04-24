function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      const responseData = /* Your API response data */;
      // Assuming the API call was successful, resolve the Promise with the response data
      resolve(responseData);
      // If there's an error in the API call, reject the Promise
      // reject(new Error("Failed to get response from API"));
    }, 1000); // Simulating a delay of 1 second
  });
}

export default getResponseFromAPI;
