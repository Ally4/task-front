import './App.css'
import Task from './commponents/Task'
import Form from './commponents/Form'
import Signup from './commponents/signup'
import Login from './commponents/Login'
import store from './store';
import { Provider } from "react-redux";
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Provider store={store}>
       <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Form />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </ Provider>
  )
}

export default App
