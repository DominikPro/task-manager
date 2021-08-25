import "./App.css";
import React from "react";
import TodoList from "./Page/TodoList.jsx";
import DaySchedule from "./Page/DaySchedule";
import HomePage from "./Page/HomePage";
import MainMenu from "./components/menu/MainMenu";
import TasksDone from "./Page/Tasksdone";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
	return (
		<Router>
			<Container fluid style={{ marginBottom: "120px" }} >
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/daySchedule">
						<DaySchedule />
					</Route>
					<Route path="/todo-list">
						<TodoList />
					</Route>
					<Route path="/tasks-done">
						<TasksDone />
					</Route>
				</Switch>
				<MainMenu />
			</Container>
		</Router >
	);
}

export default App;
