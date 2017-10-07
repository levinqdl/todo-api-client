'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Application Service
 * @exports Client/Lists
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
var Lists = function () {
  function Lists(http) {
    _classCallCheck(this, Lists);

    this.http = http;
  }
  /**
   * Get lists.
   *
   * @example
   * const params = {
   *   page: 1,
   * };
   * client.lists.list(params);
   * @returns {Array} Lists.
   */


  _createClass(Lists, [{
    key: 'list',
    value: function list() {
      return this.http.sendRequest('/lists', {
        method: 'GET'
      });
    }
    /**
     * Create a list.
     *
     * @example
     * const data = {
     *   name: 'MyList',
     *   description: '...',
     * }
     * client.applications.create(data);
     * @param {*} data -
     * @param {number} data.org_id - Organization id.
     * @param {string} data.name - List name.
     * @param {string} data.description - List description.
     * @returns {Object} List object.
     */

  }, {
    key: 'create',
    value: function create(data) {
      return this.http.sendRequest('/lists', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    }
    /**
     * Get a specific list.
     *
     * @example
     * client.application(1).get();
     * @returns {Object} List object.
     */

  }, {
    key: 'get',
    value: function get() {
      return this.http.sendRequest('/lists/' + this.listId, {
        method: 'GET'
      });
    }
    /**
     * Update a list.
     *
     * @example
     * const data = {
     *   name: 'MyList',
     *   description: '...',
     * };
     * client.application(1).update(data);
     * @param {Object} data -
     * @param {number} data.org_id - Organization id.
     * @param {string} data.name - List name.
     * @param {string} data.description - List description.
     * @returns {Object} List object.
     */

  }, {
    key: 'update',
    value: function update(data) {
      return this.http.sendRequest('/lists/' + this.listId, {
        method: 'PATCH',
        body: JSON.stringify(data)
      });
    }
    /**
     * Delete a list.
     *
     * @example
     * client.application(1).delete();
     */

  }, {
    key: 'delete',
    value: function _delete() {
      return this.http.sendRequest('/lists/' + this.listId, {
        method: 'DELETE'
      });
    }
  }]);

  return Lists;
}();

exports.default = Lists;