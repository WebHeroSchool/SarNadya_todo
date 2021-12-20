import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<Link to='/'> Обо мне </Link>
						<Link to='/todo'> Задачи </Link>
						<Link to='/contacts'> Контакты </Link>
					</nav>

					<Routes className={styles.content}>
						<Route exact path='/' component={About}/>
						<Route path='/todo' component={Todo}/>
						<Route path='/contacts' component={Contacts}/>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
