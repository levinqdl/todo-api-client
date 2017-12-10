/**
 * Lists Service
 * @exports apis/Lists
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
class Lists {
  constructor(http) {
    this.http = http;
  }
  /**
   * Get lists.
   *
   * @example
   * const params = {
   *   page: 1,
   *   list_type: 'task_list',
   * };
   * client.lists.list(params);
   * @param {*} params - Query params.
   * @param {number} params.list_type - List type.
   * @returns {Array} Lists.
   */
  list(params) {
    return this.http.sendRequest('/lists', {
      method: 'GET',
      params,
    });
  }
  /**
   * Create a list.
   *
   * @example
   * const data = {
   *   list_type: 'task_list',
   *   title: 'MyList',
   * }
   * client.lists.create(data);
   * @param {*} data -
   * @param {string} data.list_type - List type.
   * @param {string} data.title - List title.
   * @returns {Object} List object.
   */
  create(data) {
    return this.http.sendRequest('/lists', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  /**
   * Get a specific list.
   *
   * @example
   * client.list(1).get();
   * @returns {Object} List object.
   */
  get() {
    return this.http.sendRequest(`/lists/${this.listId}`, {
      method: 'GET',
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
   * client.list(1).update(data);
   * @param {Object} data -
   * @param {number} data.title - List title.
   * @param {string} data.description - List description.
   * @returns {Object} List object.
   */
  update(data) {
    return this.http.sendRequest(`/lists/${this.listId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }
  /**
   * Delete a list.
   *
   * @example
   * client.list(1).delete();
   */
  delete() {
    return this.http.sendRequest(`/lists/${this.listId}`, {
      method: 'DELETE',
    });
  }
}

export default Lists;
