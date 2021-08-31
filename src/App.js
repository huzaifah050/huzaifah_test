import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddPage from './components/AddPage';
function App() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/add" component={AddPage} />
		</Switch>
	);
}

export default App;
