import logo from './logo.svg';
import './App.css';
import Demoprops from './buoi3/demoProps';
import Main from './projectGame/main';

function App() {
  return (
    <div>
      {/* Hạn chế gọi nhiều Component trong App.js */}
      {/* Nên sử dụng Component child nhiều hơn */}
      {/* <Demoprops/> */}
      <Main/>
    </div>
  );
}

export default App;
