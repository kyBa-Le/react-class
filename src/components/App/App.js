import './App.css';
import { Camera } from '../../modules/Bai1';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Camera2 } from '../Camera2/Camera2';

function One() {
  return <div>Chao ban</div>;
}

//create component too in another file

function App() {
  return (
    <Router>
      <NavBar>
      </NavBar>
      <div style={{padding: '20px'}}>
        <Routes>
          <Route path="/" element={<div>Homepage</div>}/>
          <Route path="/camera" element={<Camera number={10}/>} />
          <Route path="/camera-2" element={<Camera2/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
