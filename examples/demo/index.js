import 'isomorphic-fetch';
import RealFormData from 'form-data';
import chalk from 'chalk';
import Client from '../../src/Client';

if (!global.FormData) {
  global.FormData = RealFormData;
}

class Demo {
  constructor() {
    this.client = new Client({
      baseURL: 'http://192.168.1.176:8000',
    });
    this.client.http.interceptors.request.push((url, options) => {
      const newOptions = options;

      if (this.loggedJwt) {
        newOptions.headers.Authorization = `Bearer ${this.loggedJwt.access_token}`;
      }
      console.log(chalk.blue('Request:'));
      console.log(chalk.blue(`url: ${url}`));
      console.log(chalk.blue(`options: ${JSON.stringify(newOptions, null, 2)}`));
      console.log(chalk.blue('--------------------------------------------------'));

      return {
        url,
        options: newOptions,
      };
    });
    this.client.http.interceptors.response.push((response) => {
      setTimeout(async () => {
        console.log(chalk.blue('Response:'));
        console.log(chalk.blue(`url: ${(await response).url}`));
        console.log(chalk.blue(`status: ${(await response).status}`));
        console.log(chalk.blue(`statusText: ${(await response).statusText}`));
        console.log(chalk.blue('--------------------------------------------------'));
      });
      return response;
    });

    this.loggedJwt = null;
    this.loggedUser = null;
  }
  async test() {
    try {
      let data = {};
      const loggedUser = await this.client.account.login({
        email: 'lijy91@foxmail.com',
        password: '123456',
      });

      this.loggedJwt = loggedUser.jwt_token;
      this.loggedUser = loggedUser;
      console.log(chalk.green(JSON.stringify(loggedUser, null, 2)));

      data = await this.client.lists.list();
      console.log(chalk.green(JSON.stringify(data, null, 2)));
    } catch (error) {
      console.log(chalk.red(error));
    }
  }
}

new Demo().test();
