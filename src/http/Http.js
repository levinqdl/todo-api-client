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
   */
  constructor(defaults) {
    this.defaults = defaults;
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
    const urlSearchParams = new URLSearchParams();
    if (options.params) {
      const keys = Object.keys(options.params);
      keys.forEach((key) => {
        const value = options.params[key];
        urlSearchParams.append(key, value);
      });
    }
    let requestUrl = `${this.defaults.baseURL}${url}?${urlSearchParams.toString()}`;
    let requestOptions = options;

    if (!requestOptions.headers) {
      requestOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };
    } else if (requestOptions.headers['Content-Type']) {
      delete requestOptions.headers['Content-Type'];
    }

    this.interceptors.request.forEach((interceptor) => {
      const request = interceptor(requestUrl, requestOptions);
      requestUrl = request.url;
      requestOptions = request.options;
    });

    let response = await fetch(requestUrl, requestOptions);
    this.interceptors.response.forEach((interceptor) => {
      response = interceptor(response);
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default Http;
