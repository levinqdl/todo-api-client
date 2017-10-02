# todo-api-client

A very simple [ToDo](https://todo.blankapp.org) REST API client for JS.

Table of Contents
=================

* [Quick Start](#quick-start)
  * [Installation](#installation)
  * [Example](#example)
* [Discussion](#discussion)
* [License](#license)

Created by [gh-md-toc](https://github.com/ekalinin/github-markdown-toc)

## Quick Start

### Installation

Install `todo-api-client` in your project:

```bash
$ yarn add todo-api-client
```

### Example

```js
const client = new Client({});

// Create a task.
const data = {
  name: 'MyTask',
};
client.tasks.create(data);
```

## Discussion

If you have any suggestions or questions about this project, you can discuss it by [Gitter](https://gitter.im/blankapp/todo-client).

## License

```
MIT License

Copyright (c) 2017 JianyingLi <lijy91@foxmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```