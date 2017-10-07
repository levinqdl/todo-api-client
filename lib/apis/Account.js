'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Account Service
 * @exports Client/Account
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
var Account = function () {
  function Account(http) {
    _classCallCheck(this, Account);

    this.http = http;
  }
  /**
   * Register.
   *
   * @example
   * const data = {
   *   email: 'xxx@smallmdm.org',
   *   password: 'xxx',
   * };
   * client.account.register(data);
   * @param {Object} data - User data.
   * @param {string} data.email - Email.
   * @param {string} data.password - Password.
   * @returns {Object} User object.
   */


  _createClass(Account, [{
    key: 'register',
    value: function register(data) {
      return this.http.sendRequest('/account/register', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    }
    /**
     * Login.
     *
     * @example
     * const data = {
     *   email: 'xxx@smallmdm.org',
     *   password: 'xxx',
     * };
     * client.account.login(data);
     * @param {Object} data -
     * @param {string} data.email - Email.
     * @param {string} data.password - Password.
     * @returns {Object} User object.
     */

  }, {
    key: 'login',
    value: function login(data) {
      return this.http.sendRequest('/account/login', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    }
    /**
     * Logout.
     *
     * @example
     * client.account.logout();
     */

  }, {
    key: 'logout',
    value: function logout() {
      return this.http.sendRequest('/account/logout', {
        method: 'POST'
      });
    }
    /**
     * Fetch the currently logged in user.
     *
     * @example
     * client.account.getProfile();
     * @returns {Object} User object.
     */

  }, {
    key: 'getProfile',
    value: function getProfile() {
      return this.http.sendRequest('/account/profile', {
        method: 'GET'
      });
    }
    /**
     * Update the currently logged in user.
     *
     * @example
     * const data = {
     *   name: 'SmallMDM',
     *   birthday: '2017-09-27',
     * };
     * client.account.updateProfile(data);
     * @param {*} data - User data.
     * @param {string} data.name - Name.
     * @param {string} data.avatar_url - Avatar url.
     * @param {number} data.age - Age.
     * @param {string} data.gender - Gender.
     * @param {string} data.birthday - Birthday.
     * @returns {Object} User object.
     */

  }, {
    key: 'updateProfile',
    value: function updateProfile(data) {
      return this.http.sendRequest('/account/profile', {
        method: 'PATCH',
        data: data
      });
    }
  }]);

  return Account;
}();

exports.default = Account;