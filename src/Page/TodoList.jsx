import React from "react";
import Item from "../components/Item/Item";
import Sorting from "../components/Sorting/Sorting";  

import { Row, Col, Navbar } from 'react-bootstrap';

const TodoList = () => {
	return (	
			<Row>
			<Col className="overflow-hidden" sm={12}>
			<Navbar   expand="lg" sticky="top">
					<h1 style={{ color: '#17A2B8', fontSize: 20 }}>List of challenges</h1>
					<Sorting/>
					
            </Navbar>
				<Item listType="todoList" />
				</Col>
			</Row>
	);
};
export default TodoList;
