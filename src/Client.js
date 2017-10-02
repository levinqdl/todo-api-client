import Http from './http/Http';
import Account from './apis/Account';
import Users from './apis/Users';
import Lists from './apis/Lists';
import Tasks from './apis/Tasks';

/**
 * ToDo API Client
 * @module Client
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
class Client {
  constructor(defaults = {}) {
    this.http = new Http(defaults);

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
  get account() {
    return new Account(this.http);
  }
  /**
   * Get user service instance.
   *
   * @see Client/Users
   * @example
   * // ...
   * @returns {Users} User service.
   */
  get users() {
    return this.user(0);
  }
  /**
   * Get user service instance with id.
   *
   * @see Client/Users
   * @example
   * // ...
   * @param {string} id - User id.
   * @returns {Users} User service with id.
   */
  user(id) {
    if (!this.userService) {
      this.userService = new Users(this.http);
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
  get lists() {
    return this.list();
  }
  /**
   * Get list service instance with id.
   *
   * @example
   * // ...
   * @param {number} id - List id.
   * @returns {Lists} List service with id.
   */
  list(id) {
    if (!this.listService) {
      this.listService = new Lists(this.http);
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
  get tasks() {
    return this.task();
  }
  /**
   * Get task service instance with id.
   *
   * @example
   * // ...
   * @param {number} id - Task id.
   * @returns {Lists} Task service with id.
   */
  task(id) {
    if (!this.taskService) {
      this.taskService = new Tasks(this.http);
    }
    this.taskService.taskId = id;
    return this.taskService;
  }
}

export default Client;
