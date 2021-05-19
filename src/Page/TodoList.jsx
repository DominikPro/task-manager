import React, { useState, useEffect } from "react";
import Item from "../components/Item/Item";
import { Input } from "../components/Input/Input";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TodoList = () => {
	return (
		
			<Row>
				<Col sm={12}>
					{/* <Input /> */}
					<Item />
				</Col>
			</Row>
		
	);
};

export default TodoList;
