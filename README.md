# react-collapse
> Collapse for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-collapse
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | bool   | false    | false   | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |
| summary   | any    | false    | -       | The summary content.                  |


## usage
1. import css
  ```scss
  @import "~@jswork/react-collapse/dist/style.css";

  // or use sass
  @import "~@jswork/react-collapse/dist/style.scss";

  // customize your styles:
  $react-collapse-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactCollapse from '@jswork/react-collapse';
  import './assets/style.scss';

  class App extends React.Component {
    state = { value: false };

    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-collapse">
          <p className="p-3 bg-gray-200 mb-2">value: {this.state.value + ''}</p>
          <ReactCollapse
            summary="道可道，非常道"
            className="bg-gray-500 p-3"
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}>
            道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
            故常无欲，以观其妙，常有欲，以观其徼。
            此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
          </ReactCollapse>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-collapse/


## license
Code released under [the MIT license](https://github.com/afeiship/react-collapse/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-collapse
[version-url]: https://npmjs.org/package/@jswork/react-collapse

[license-image]: https://img.shields.io/npm/l/@jswork/react-collapse
[license-url]: https://github.com/afeiship/react-collapse/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-collapse
[size-url]: https://github.com/afeiship/react-collapse/blob/master/dist/react-collapse.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-collapse
[download-url]: https://www.npmjs.com/package/@jswork/react-collapse
