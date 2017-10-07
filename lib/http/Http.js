'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A Very simple http client
 * @exports Http
 * @class
 */
var Http = function () {
  /**
   * Create a new instance of Http.
   *
   * @example
   * // ...
   * @param {Object} defaults - The default config for the instance.
   * @param {string} defaults.baseURL - Coming soon.
   */
  function Http(defaults) {
    _classCallCheck(this, Http);

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


  _createClass(Http, [{
    key: 'sendRequest',
    value: async function sendRequest(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var requestUrl = '' + this.defaults.baseURL + url;
      var requestOptions = options;

      if (!requestOptions.headers) {
        requestOptions.headers = {};
      }

      requestOptions.headers = Object.assign({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, requestOptions.headers);

      this.interceptors.request.forEach(function (interceptor) {
        var request = interceptor(requestUrl, requestOptions);
        requestUrl = request.url;
        requestOptions = request.options;
      });

      var response = await fetch(requestUrl, requestOptions);
      this.interceptors.response.forEach(function (interceptor) {
        response = interceptor(response);
      });

      var responseJson = await response.json();
      return responseJson.data;
    }
  }]);

  return Http;
}();

exports.default = Http;