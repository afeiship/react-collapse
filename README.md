# react-drawer
> Drawer for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-drawer
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-drawer/dist/style.css";

  // or use sass
  @import "~@jswork/react-drawer/dist/style.scss";
  ```
2. import js
  ```js
  import ReactCollapse from '@jswork/react-collapse';
  import './index.css';
  import '@jswork/react-collapse/dist/style.scss';

  function App() {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <h1>react-collapse</h1>
        <div className="y-3">
          <ReactCollapse collapsed onChange={e => console.log(e)}
                         toolbar={<header className="cursor-pointer bg-gray-200 px-4 py-1">Header</header>}>
            <div className="p-5 rounded-md rounded-t-none bg-white">
              The Component.
            </div>
          </ReactCollapse>

          <ReactCollapse
            collapsed
            onChange={e => console.log(e)}
            toolbar={
              <header className="cursor-pointer bg-gray-200 px-4 py-1">Header(slow element has bug)</header>
            }>
            <div className="p-5 rounded-md rounded-t-none bg-green-100">
              <img src="https://via.placeholder.com/500x200" alt="placeholder" />
            </div>
          </ReactCollapse>
        </div>
      </div>
    );
  }

  export default App;

  ```

## preview
- https://afeiship.github.io/react-drawer/

## license
Code released under [the MIT license](https://github.com/afeiship/react-drawer/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-drawer
[version-url]: https://npmjs.org/package/@jswork/react-drawer

[license-image]: https://img.shields.io/npm/l/@jswork/react-drawer
[license-url]: https://github.com/afeiship/react-drawer/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-drawer
[size-url]: https://github.com/afeiship/react-drawer/blob/master/dist/react-drawer.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-drawer
[download-url]: https://www.npmjs.com/package/@jswork/react-drawer
