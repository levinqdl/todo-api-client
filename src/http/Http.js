/**
 * A Very simple http client
 * @exports Http
 * @class
 */
class Http {
  /**
   * Create a new instance of Http.
   *
   * @example
   * // ...
   * @param {Object} defaults - The default config for the instance.
   * @param {string} defaults.baseURL - Coming soon.
   * @param {Object} defaults.headers.common - Coming soon.
   */
  constructor(defaults) {
    this.defaults = Object.assign({
      headers: {
        common: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    }, defaults);
    this.interceptors = { request: [], response: [] };
  }

  /**
   * Sends a single request to server.
   *
   * @example
   * // ...
   * @param {string} url - Coming soon.
   * @param {Object} options - Coming soon.
   */
  async sendRequest(url, options = {}) {
    let requestUrl = `${this.defaults.baseURL}${url}`;
    let requestOptions = Object.assign({
      headers: this.defaults.headers.common,
    }, options);

    /* eslint-disable */
    console.log('----------');
    console.log(requestUrl);
    console.log(JSON.stringify(requestOptions, null, 2));
    console.log('----------');
    /* eslint-enable */

    this.interceptors.request.forEach((interceptor) => {
      const request = interceptor(requestUrl, requestOptions);
      requestUrl = request.url;
      requestOptions = request.options;
    });

    /* eslint-disable */
    console.log('----------');
    console.log(requestUrl);
    console.log(JSON.stringify(requestOptions, null, 2));
    console.log('----------');
    /* eslint-enable */

    const response = await fetch(requestUrl, requestOptions);
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default Http;
