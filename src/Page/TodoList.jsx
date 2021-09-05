import React from "react";
import Item from "../components/Item/Item";
import Sorting from "../components/Sorting/Sorting";  

import { Row, Col, Navbar } from 'react-bootstrap';

const TodoList = () => {
	return (	
			<Row >
			{/* <Col className="overflow-hidden" sm={12}> */}
			<Col style={{ marginBottom: "120px" }}   sm={12}>
			<Navbar style={{backgroundColor: "#3868A6", borderRadius: "0px 0px 20px 20px"}}  expand="lg" sticky="top" >
					<h1 style={{ color: '#f7f7f7', fontSize: 18 }}>List of challenges</h1>
					<Sorting/>	
            </Navbar>
				<Item listType="todoList" />
				</Col>
			</Row>
	);
};
export default TodoList;
