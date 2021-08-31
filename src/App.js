import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
function App() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/add" component={HomePage} />
		</Switch>
	);
}

export default App;
