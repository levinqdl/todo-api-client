import 'isomorphic-fetch';
import chalk from 'chalk';
import Client from '../../src/Client';

class Demo {
  constructor() {
    this.client = new Client({
      baseURL: 'http://127.0.0.1:8888',
    });
    this.client.http.interceptors.request.push((url, options) => {
      if (!this.accessToken) {
        return { url, options };
      }
      return {
        url,
        options: Object.assign(options, {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }),
      };
    });
    console.log(this.client.http.defaults);
    console.log(this.client.http.interceptors);

    this.accessToken = '';
  }
  async test() {
    try {
      let data = {};
      data = await this.client.account.login({
        email: 'lijy91@foxmail.com',
        password: '123456',
      });
      this.accessToken = data.jwt_token.access_token;
      console.log(JSON.stringify(data, null, 2));

      // data = await this.client.lists.list();
      // console.log(JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      console.log(chalk.red(error.message));
    }
  }
}

new Demo().test();
