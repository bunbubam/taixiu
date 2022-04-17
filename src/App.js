import logo from './logo.svg';
import './App.css';
import Demoprops from './buoi3/demoProps';
import Main from './projectGame/main';
import SignIn from './Login/login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainTaiXiu from './taixiu/main';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/home" element={<Main/>}/>
    //     <Route path="/" caseSensitive={true} element={<SignIn/>}/>
    //   </Routes>
    // </Router>
    <div className='container'>
      <MainTaiXiu/>
    </div>
  );
}

export default App;
