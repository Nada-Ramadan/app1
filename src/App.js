// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';

export default class App extends Component{
  state ={

  }

  render(){
    return (
      <div>
        <Navbar />
        <Home />
        <About />
      </div>
    )
    }
  }