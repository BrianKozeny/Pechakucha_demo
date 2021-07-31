import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import Fact from './components/factButton';
import Navbar from './components/navbar';
import Categories from './components/categories';
import arrayList from './components/categoryList';

ReactDOM.render(
    <Navbar />,
    document.getElementById('navbar')
);

ReactDOM.render(
    <Fact />,
    document.getElementById('fact')
);

ReactDOM.render(
    <Categories />,
    document.getElementById('categories')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
