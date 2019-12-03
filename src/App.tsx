import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Context from './contexts/Context';
import Counter from './components/Counter';
import reducers from './reducers';
import Button from './components/Button';

const App = () => {
	const store = useReducer(reducers, {
		counter: 0,
		display: true,
	});
	return (
		<Context.Provider value={store}>
			<div className="App">
				<Counter />
				<Button onClick={() => console.log('null')} />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</div>
		</Context.Provider>
	);
};

export default App;
