/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 */
function fetchModel(url) {
  const api = 'https://cf4ldg-8080.csb.app' + url;
  return fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error: ", error);
      throw error;
    });
}

export default fetchModel;
