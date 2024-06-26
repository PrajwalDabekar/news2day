import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Track from './components/Track/Track';
import Add from './components/Add/Add';
import Profile from './components/Profile/Profile';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Preview from './components/Preview/Preview';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Routing 
  <Provider store={store}>
   <Router>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path='manage' element={<Track/>}/>
            <Route path='add' element={<Add/>}/>
            <Route path='preview'element={<Preview/>}/>            
            <Route path='profile' element={<Profile/>}/>
          </Route>
        </Routes>
      </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
