/**
 * TaskExtras Service
 * @exports apis/Lists/Tasks/TaskExtras
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
   * };
   * client.list(1).task(1).extras.list(params);
   * @param {Object} params - Query params.
   * @param {number} params.page - Page.
   * @returns {Array} Task extras.
   */
  list(params) {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/extras`, {
      method: 'GET',
      params,
    });
  }
  /**
   * Create a task extra.
   *
   * @example
   * const data = {
   *   type: 'map',
   *   key: '...',
   *   value: '...',
   * }
   * client.list(1).task(1).extras.create(data);
   * @param {Object} data - Data.
   * @param {string} data.type - Extra type.
   * @param {string} data.key - Extra key.
   * @param {string} data.value - Extra value.
   * @returns {Object} Task extra object.
   */
  create(data) {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/extras`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  /**
   * Get a specific task extra.
   *
   * @example
   * client.list(1).task(1).extra(1).get();
   * @returns {Object} Task extra object.
   */
  get() {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/extras/${this.taskExtraId}`, {
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
   * client.list(1).task(1).extra(1).update(data);
   * @param {Object} data -
   * @param {string} data.type - Extra type.
   * @param {string} data.key - Extra key.
   * @param {string} data.value - Extra value.
   * @returns {Object} Task extra object.
   */
  update(data) {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/extras/${this.taskExtraId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }
  /**
   * Delete a task extra.
   *
   * @example
   * client.list(1).task(1).extra(1).delete();
   */
  delete() {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/extras/${this.taskExtraId}`, {
      method: 'DELETE',
    });
  }
}

export default TaskExtras;
