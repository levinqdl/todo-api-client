/**
 * Application Service
 * @exports Client/Lists
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
   * };
   * client.lists.list(params);
   * @returns {Array} Lists.
   */
  list() {
    return this.http.sendRequest('/lists', {
      method: 'GET',
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
   * client.application(1).get();
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
   * client.application(1).update(data);
   * @param {Object} data -
   * @param {number} data.org_id - Organization id.
   * @param {string} data.name - List name.
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
   * client.application(1).delete();
   */
  delete() {
    return this.http.sendRequest(`/lists/${this.listId}`, {
      method: 'DELETE',
    });
  }
}

export default Lists;
