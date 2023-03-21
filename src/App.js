import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menubar from './components/Menubar';
import Home from './components/Home';
import About from './components/About';
import StudentList from './components/StudentList';
import StudentCreate from './components/StudentCreate';

export default class App extends Component {
  render () {
    return (
      <>
      <Menubar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/create-student' element={<StudentCreate/>}/>
          <Route path='/student-list' element={<StudentList/>}/>
        </Routes>
      </div>
      </>
    );
  }
}

