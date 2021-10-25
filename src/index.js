import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// For making styles look better:
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import store from './redux/store'


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
