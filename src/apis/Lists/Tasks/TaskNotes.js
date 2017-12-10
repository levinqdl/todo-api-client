/**
 * TaskNotes Service
 * @exports apis/Lists/Tasks/TaskNotes
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
class TaskNotes {
  constructor(http) {
    this.http = http;
  }
  /**
   * Get task notes.
   *
   * @example
   * const params = {
   *   page: 1,
   * };
   * client.list(1).task(1).notes.list(params);
   * @param {Object} params - Query params.
   * @param {number} params.page - Page.
   * @returns {Array} Task notes.
   */
  list(params) {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/notes`, {
      method: 'GET',
      params,
    });
  }
  /**
   * Create a task note.
   *
   * @example
   * const data = {
   *   content: '...',
   * }
   * client.list(1).task(1).notes.create(data);
   * @param {Object} data - Data.
   * @param {string} data.content - Note content.
   * @returns {Object} Task note object.
   */
  create(data) {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/notes`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  /**
   * Get a specific task note.
   *
   * @example
   * client.list(1).task(1).note(1).get();
   * @returns {Object} Task note object.
   */
  get() {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/notes/${this.taskNoteId}`, {
      method: 'GET',
    });
  }
  /**
   * Update a task note.
   *
   * @example
   * const data = {
   *   content: '...',
   * };
   * client.list(1).task(1).note(1).update(data);
   * @param {Object} data -
   * @param {string} data.content - Note content.
   * @returns {Object} Task note object.
   */
  update(data) {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/notes/${this.taskNoteId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }
  /**
   * Delete a task note.
   *
   * @example
   * client.list(1).task(1).note(1).delete();
   */
  delete() {
    return this.http.sendRequest(`/lists/${this.listId}/tasks/${this.taskId}/notes/${this.taskNoteId}`, {
      method: 'DELETE',
    });
  }
}

export default TaskNotes;
