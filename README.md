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

## usage
1. import css
  ```scss
  @import "~@jswork/react-collapse/dist/style.css";

  // or use sass
  @import "~@jswork/react-collapse/dist/style.scss";
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
          <ReactCollapse
            collapsed
            onChange={e => console.log(e)}
            summary={<header className="cursor-pointer bg-gray-200 px-4 py-1">Header</header>}>
            <div className="p-5 rounded-md rounded-t-none bg-white">
              The Component.
            </div>
          </ReactCollapse>

          <ReactCollapse
            collapsed
            onChange={e => console.log(e)}
            summary={
              <header className="cursor-pointer bg-gray-200 px-4 py-1">Header(slow element has bug)</header>
            }>
            <div className="p-5 rounded-md rounded-t-none bg-green-100">
              {/*<img width={500} height={200} src="https://via.placeholder.com/500x200" alt="placeholder" />*/}
              <img src="https://via.placeholder.com/500x200" alt="placeholder" />
            </div>
          </ReactCollapse>

          <ReactCollapse
            collapsed
            maxHeight={240}
            onChange={e => console.log(e)}
            summary={
              <header className="cursor-pointer bg-gray-200 px-4 py-1">Header(directly set maxHeight)</header>
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
