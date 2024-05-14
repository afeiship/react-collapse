import ReactCollapse from '@jswork/react-collapse/src';
import './index.css';
import '@jswork/react-collapse/src/style.scss';
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
      <div className="y-3">
        <ReactCollapse
          collapsed={val}
          onChange={e => console.log('value: ', e)}
          summary={
            <header className="cursor-pointer bg-gray-200 px-4 py-1">Header(summaryNode)</header>
          }>
          <div className="p-5 rounded-md rounded-t-none bg-green-100">
            {/*<img width={500} height={200} src="https://via.placeholder.com/500x200" alt="placeholder" />*/}
            <img src="https://via.placeholder.com/500x200" alt="placeholder" />
          </div>
        </ReactCollapse>
      </div>
    </div>
  );
}

export default App;
