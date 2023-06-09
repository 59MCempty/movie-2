import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import reduxConfig from "./redux/app.js";
import {PersistGate} from "redux-persist/integration/react";

const {store, persistor} = reduxConfig();

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</PersistGate>
	</Provider>,
)
