'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Application Service
 * @exports Client/Tasks
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
var Tasks = function () {
  function Tasks(http) {
    _classCallCheck(this, Tasks);

    this.http = http;
  }
  /**
   * Get tasks.
   *
   * @example
   * const params = {
   *   page: 1,
   * };
   * client.tasks.list(params);
   * @returns {Array} Tasks.
   */


  _createClass(Tasks, [{
    key: 'list',
    value: function list() {
      return this.http.sendRequest('/tasks', {
        method: 'GET'
      });
    }
    /**
     * Create a task.
     *
     * @example
     * const data = {
     *   name: 'MyTask',
     *   description: '...',
     * }
     * client.tasks.create(data);
     * @param {*} data -
     * @param {number} data.org_id - Organization id.
     * @param {string} data.name - Task name.
     * @param {string} data.description - Task description.
     * @returns {Object} Task object.
     */

  }, {
    key: 'create',
    value: function create(data) {
      return this.http.sendRequest('/tasks', {
        method: 'POST',
        body: JSON.stringify(data)
      });
    }
    /**
     * Get a specific task.
     *
     * @example
     * client.task(1).get();
     * @returns {Object} Task object.
     */

  }, {
    key: 'get',
    value: function get() {
      return this.http.sendRequest('/tasks/' + this.taskId, {
        method: 'GET'
      });
    }
    /**
     * Update a task.
     *
     * @example
     * const data = {
     *   name: 'MyTask',
     *   description: '...',
     * };
     * client.task(1).update(data);
     * @param {Object} data -
     * @param {number} data.org_id - Organization id.
     * @param {string} data.name - Task name.
     * @param {string} data.description - Task description.
     * @returns {Object} Task object.
     */

  }, {
    key: 'update',
    value: function update(data) {
      return this.http.sendRequest('/tasks/' + this.taskId, {
        method: 'PATCH',
        body: JSON.stringify(data)
      });
    }
    /**
     * Delete a task.
     *
     * @example
     * client.task(1).delete();
     */

  }, {
    key: 'delete',
    value: function _delete() {
      return this.http.sendRequest('/tasks/' + this.taskId, {
        method: 'DELETE'
      });
    }
  }]);

  return Tasks;
}();

exports.default = Tasks;