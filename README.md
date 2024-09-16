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
  import { useEffect, useState } from 'react';

  function App() {
    const [val, setVal] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setVal(true);
      }, 3000);
    }, []);

    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <h1>react-collapse</h1>
        <div className="y-2">
          <button className="btn btn-primary btn-sm w-full" onClick={() => setVal(!val)}>Toggle - {String(val)}</button>
          <div className="y-3">
            <ReactCollapse
              value={val}
              onChange={e => console.log('value: ', e)}
            >
              <div className="p-5 rounded-md rounded-t-none bg-green-100">
                <img width="200" src="https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg"
                     alt="placeholder" />
              </div>
            </ReactCollapse>
          </div>
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
