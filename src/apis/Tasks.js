/**
 * Application Service
 * @exports Client/Tasks
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
class Tasks {
  constructor(http) {
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
  list() {
    return this.http.sendRequest('/tasks', {
      method: 'GET',
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
  create(data) {
    return this.http.sendRequest('/tasks', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  /**
   * Get a specific task.
   *
   * @example
   * client.task(1).get();
   * @returns {Object} Task object.
   */
  get() {
    return this.http.sendRequest(`/tasks/${this.taskId}`, {
      method: 'GET',
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
  update(data) {
    return this.http.sendRequest(`/tasks/${this.taskId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }
  /**
   * Delete a task.
   *
   * @example
   * client.task(1).delete();
   */
  delete() {
    return this.http.sendRequest(`/tasks/${this.taskId}`, {
      method: 'DELETE',
    });
  }
}

export default Tasks;
