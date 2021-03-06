import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {injectGlobal} from 'emotion';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
    
        
        <BrowserRouter>
        <Provider store={store}>
            <App /> 
            </Provider>
        </BrowserRouter>
        

    ,

document.getElementById('root'));


injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
@import url('https://fonts.googleapis.com/css?family=BioRhyme+Expanded|Roboto:700');
body {
    padding: 0;
    margin: 0;
    font-family: 'BioRhyme Expanded', serif;
    

}
a {
    text-decoration: none;
    color: #365DD6
}

`