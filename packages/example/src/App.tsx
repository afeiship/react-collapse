import ReactCollapse from '@jswork/react-collapse/src';
import ReactSelection from '@jswork/react-selection';
import cx from 'classnames';
import './index.css';
import '@jswork/react-collapse/src/style.scss';
import { useEffect, useState } from 'react';

function App() {
  const [val, setVal] = useState(false);
  const [v1, setV1] = useState('apple');

  const items = [
    { value: 'apple', title: 'Apple', children: 'Apple' },
    { value: 'banana', title: 'Banana', children: 'Banana' },
    { value: 'orange', title: 'Orange', children: 'Orange' },
    { value: 'grape', title: 'Grape', children: 'Grape' },
  ];

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
      <div className="y-3">
        <ReactCollapse
          collapsed={val}
          onChange={e => console.log('value: ', e)}
          summary={
            <header className="bg-gray-200 px-4 py-1">Header(summaryNode)</header>
          }>
          <div className="p-5 rounded-md rounded-t-none bg-green-100">
            {/*<img width={500} height={200} src="https://via.placeholder.com/500x200" alt="placeholder" />*/}
            <img src="https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg" alt="placeholder" />
          </div>
        </ReactCollapse>

        <ReactCollapse
          readOnly
          onChange={e => console.log('value: ', e)}
          summary={
            <header className="bg-gray-200 px-4 py-1">Header(summaryNode/readOnly)</header>
          }>
          <div className="p-5 rounded-md rounded-t-none bg-green-100">
            <h1>Read Only</h1>
            {/*<img width={500} height={200} src="https://via.placeholder.com/500x200" alt="placeholder" />*/}
            <img src="https://via.placeholder.com/500x200" alt="placeholder" />
          </div>
        </ReactCollapse>

        <hr />
        <ReactSelection
          value={v1}
          onChange={e => setV1(e)}
          items={items}
          template={({ item, index }, options) => {
            return (
              <ReactCollapse
                key={index}
                collapsed={v1 !== item.value}
                summary={
                  <header
                    onClick={options?.cb}
                    className="bg-gray-200 px-4 py-1">
                    {item.title}
                  </header>
                }
              >
                {item.children} - CHILDREN.
              </ReactCollapse>
            );
          }}
          className="y-4"
        />
      </div>
    </div>
  );
}

export default App;
