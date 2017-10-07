'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * User Service
 * @exports Client/Users
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
var Users = function () {
  function Users(http) {
    _classCallCheck(this, Users);

    this.http = http;
  }
  /**
   * Get a specific user.
   *
   * @example
   * client.user(1).get();
   * @returns {Object} User object.
   */


  _createClass(Users, [{
    key: 'get',
    value: function get() {
      return this.http.sendRequest('/users/' + this.userId, {
        method: 'GET'
      });
    }
  }]);

  return Users;
}();

exports.default = Users;