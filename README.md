# react-collapse
> Collapse for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-collapse
```

## update
```shell
npm update @feizheng/react-collapse
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-collapse/dist/style.scss";

  // customize your styles:
  $react-collapse-options: ()
  ```
2. import js
  ```js
  import NxOfflineSw from '@feizheng/next-offline-sw';
  import ReactGithubCorner from '@feizheng/react-github-corner';
  import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactCollapse from '@feizheng/react-collapse';
  import './assets/style.scss';

  class App extends React.Component {
    state = { hasUpdate: false };

    componentDidMount() {
      NxOfflineSw.install({
        onUpdateReady: () => {
          this.setState({ hasUpdate: true });
        }
      });
    }

    render() {
      return (
        <div className="p-3 app-container">
          <ReactCollapse className="bg-gray-800 mb-5 text-white" />
          <button className="button">I am a button</button>
          <ReactSwUpdateTips value={this.state.hasUpdate} />
          <ReactGithubCorner value="https://github.com/afeiship/react-collapse" />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-collapse/


## license
Code released under [the MIT license](https://github.com/afeiship/react-collapse/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-collapse
[version-url]: https://npmjs.org/package/@feizheng/react-collapse

[license-image]: https://img.shields.io/npm/l/@feizheng/react-collapse
[license-url]: https://github.com/afeiship/react-collapse/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-collapse
[size-url]: https://github.com/afeiship/react-collapse/blob/master/dist/react-collapse.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-collapse
[download-url]: https://www.npmjs.com/package/@feizheng/react-collapse
