'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Http = require('./http/Http');

var _Http2 = _interopRequireDefault(_Http);

var _Account = require('./apis/Account');

var _Account2 = _interopRequireDefault(_Account);

var _Users = require('./apis/Users');

var _Users2 = _interopRequireDefault(_Users);

var _Lists = require('./apis/Lists');

var _Lists2 = _interopRequireDefault(_Lists);

var _Tasks = require('./apis/Tasks');

var _Tasks2 = _interopRequireDefault(_Tasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ToDo API Client
 * @module Client
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
var Client = function () {
  function Client() {
    var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Client);

    this.http = new _Http2.default(defaults);

    this.user = this.user.bind(this);
    this.list = this.list.bind(this);
    this.task = this.task.bind(this);
  }
  /**
   * Get account service instance.
   *
   * @see Client/Account
   * @example
   * // ...
   * @returns {Account} Account service.
   */


  _createClass(Client, [{
    key: 'user',

    /**
     * Get user service instance with id.
     *
     * @see Client/Users
     * @example
     * // ...
     * @param {string} id - User id.
     * @returns {Users} User service with id.
     */
    value: function user(id) {
      if (!this.userService) {
        this.userService = new _Users2.default(this.http);
      }
      this.userService.userId = id;
      return this.userService;
    }
    /**
     * Get list service instance.
     *
     * @example
     * // ...
     * @returns {Lists} List service.
     */

  }, {
    key: 'list',

    /**
     * Get list service instance with id.
     *
     * @example
     * // ...
     * @param {number} id - List id.
     * @returns {Lists} List service with id.
     */
    value: function list(id) {
      if (!this.listService) {
        this.listService = new _Lists2.default(this.http);
      }
      this.listService.listId = id;
      return this.listService;
    }
    /**
     * Get task service instance.
     *
     * @example
     * // ...
     * @returns {Tasks} Task service.
     */

  }, {
    key: 'task',

    /**
     * Get task service instance with id.
     *
     * @example
     * // ...
     * @param {number} id - Task id.
     * @returns {Lists} Task service with id.
     */
    value: function task(id) {
      if (!this.taskService) {
        this.taskService = new _Tasks2.default(this.http);
      }
      this.taskService.taskId = id;
      return this.taskService;
    }
  }, {
    key: 'account',
    get: function get() {
      return new _Account2.default(this.http);
    }
    /**
     * Get user service instance.
     *
     * @see Client/Users
     * @example
     * // ...
     * @returns {Users} User service.
     */

  }, {
    key: 'users',
    get: function get() {
      return this.user(0);
    }
  }, {
    key: 'lists',
    get: function get() {
      return this.list();
    }
  }, {
    key: 'tasks',
    get: function get() {
      return this.task();
    }
  }]);

  return Client;
}();

exports.default = Client;