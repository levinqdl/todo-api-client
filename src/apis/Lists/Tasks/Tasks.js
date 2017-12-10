import TaskExtras from './TaskExtras';
import TaskNotes from './TaskNotes';

/**
 * Tasks Service
 * @exports apis/Lists/Tasks
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
class Tasks {
  constructor(http) {
    this.http = http;
  }
  /**
   * Get task extras service instance.
   *
   * @example
   * // ...
   * @returns {Object} Task extras service with id.
   */
  get extras() {
    return this.extra();
  }
  /**
   * Get task extras service instance with id.
   *
   * @example
   * // ...
   * @param {number} id - Task extra id.
   * @returns {Object} Task extras service with id.
   */
  extra(id) {
    if (!this.taskExtraService) {
      this.taskExtraService = new TaskExtras(this.http);
    }
    this.taskExtraService.listId = this.listId;
    this.taskExtraService.taskId = this.taskId;
    this.taskExtraService.taskExtraId = id;
    return this.taskExtraService;
  }
  /**
   * Get task notes service instance.
   *
   * @example
   * // ...
   * @returns {Tasks} Task notes service.
   */
  get notes() {
    return this.note();
  }
  /**
   * Get task notes service instance with id.
   *
   * @example
   * // ...
   * @param {number} id - Task note id.
   * @returns {Object} Task notes service with id.
   */
  note(id) {
    if (!this.taskNoteService) {
      this.taskNoteService = new TaskNotes(this.http);
    }
    this.taskNoteService.listId = this.listId;
    this.taskNoteService.taskId = this.taskId;
    this.taskNoteService.taskNoteId = id;
    return this.taskNoteService;
  }
  /**
   * Get tasks.
   *
   * @example
   * const params = {
   *   page: 1,
   *   list_id: 0,
   * };
   * client.list(1).tasks.list(params);
   * @param {*} params - Query params.
   * @param {number} params.page - Page.
   * @returns {Array} Tasks.
   */
  list(params) {
    return this.http.sendRequest(`/lists/${this.listId}/tasks`, {
      method: 'GET',
      params,
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
   * client.list(1).tasks.create(data);
   * @param {*} data - Data.
   * @param {string} data.name - Task name.
   * @param {string} data.description - Task description.
   * @returns {Object} Task object.
   */
  create(data) {
    return this.http.sendRequest(`/lists/${this.listId}/tasks`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  /**
   * Get a specific task.
   *
   * @example
   * client.list(1).task(1).get();
   * @returns {Object} Task object.
   */
  get() {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}`, {
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
   * @param {number} data.task_id - Task id.
   * @param {string} data.name - Task name.
   * @param {string} data.description - Task description.
   * @returns {Object} Task object.
   */
  update(data) {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }
  /**
   * Delete a task.
   *
   * @example
   * client.list(1).task(1).delete();
   */
  delete() {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}`, {
      method: 'DELETE',
    });
  }
}

export default Tasks;
