import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { store } from './store'
import {Provider} from 'react-redux'

store.subscribe((data)=>{
  console.log("STORE DATE ==== "+ data)
})

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
