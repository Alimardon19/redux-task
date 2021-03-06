import React from "react";
import ReactDom from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import store from "./store";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))














