/**
 * TaskExtras Service
 * @exports apis/TaskExtras
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
class TaskExtras {
  constructor(http) {
    this.http = http;
  }
  /**
   * Get task extras.
   *
   * @example
   * const params = {
   *   page: 1,
   *   task_id: 1,
   * };
   * client.taskExtras.list(params);
   * @param {Object} params - Query params.
   * @param {number} params.task_id - Task id.
   * @returns {Array} Task extras.
   */
  list(params) {
    return this.http.sendRequest('/task_extras', {
      method: 'GET',
      params,
    });
  }
  /**
   * Create a task extra.
   *
   * @example
   * const data = {
   *   task_id: 1,
   *   type: 'map',
   *   key: '...',
   *   value: '...',
   * }
   * client.taskExtras.create(data);
   * @param {Object} data - Data.
   * @param {number} data.task_id - Task id.
   * @param {string} data.name - List name.
   * @param {string} data.description - List description.
   * @returns {Object} Task extra object.
   */
  create(data) {
    return this.http.sendRequest('/task_extras', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  /**
   * Get a specific task extra.
   *
   * @example
   * client.taskExtra(1).get();
   * @returns {Object} Task extra object.
   */
  get() {
    return this.http.sendRequest(`/task_extras/${this.listId}`, {
      method: 'GET',
    });
  }
  /**
   * Update a task extra.
   *
   * @example
   * const data = {
   *   type: 'map',
   *   key: '...',
   *   value: '...',
   * };
   * client.application(1).update(data);
   * @param {Object} data -
   * @param {string} data.type - Extra type.
   * @param {string} data.key - Extra key.
   * @param {string} data.value - Extra value.
   * @returns {Object} List object.
   */
  update(data) {
    return this.http.sendRequest(`/task_extras/${this.taskExtraId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }
  /**
   * Delete a task extra.
   *
   * @example
   * client.application(1).delete();
   */
  delete() {
    return this.http.sendRequest(`/task_extras/${this.taskExtraId}`, {
      method: 'DELETE',
    });
  }
}

export default TaskExtras;
