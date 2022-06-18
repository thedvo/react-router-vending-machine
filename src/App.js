import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/">
					<VendingMachine />
				</Route>
				<Route exact path="/chips">
					<Chips />
				</Route>
				<Route exact path="/soda">
					<Soda />
				</Route>
				<Route exact path="/candy">
					<Candy />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
