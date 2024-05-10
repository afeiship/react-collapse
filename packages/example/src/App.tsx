import ReactCollapse from '@jswork/react-collapse/src';
import './index.css';
import '@jswork/react-collapse/src/style.scss';

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

        <ReactCollapse
          collapsed
          maxHeight={240}
          onChange={e => console.log(e)}
          toolbar={
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
