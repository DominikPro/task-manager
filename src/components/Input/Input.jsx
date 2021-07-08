import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import {FormControl, InputGroup, Badge, Button, Form, Card, Row, Col} from "react-bootstrap";
import DatePickerInput from "../shared/DatePickerInput";
//--------------------------------------------------------------------------------------------------
import { addTask } from "../../duck/actions/index";
import { emptyTaskTemplate } from "../../duck/reducers/state";

export const Input = () => {
	let emptyTask = emptyTaskTemplate
	const today = Date.parse(new Date());
	const [newTask, setNewTask] = useState(
		{
		"id": "",
		"done": false,
		"taskTitle": "",
		"editTaskTitle": false,
		"taskDescription": "",
		"priority": false,
		"date": "",
		"endDate": ""}
		
	);
	const dispatch = useDispatch();
	const refTaskTitle = useRef();
	const refTaskDescription = useRef();

	const [open, setOpen] = useState();
	let handleKeyDown = (e) => {
		if (e.keyCode === 27) {
			setOpen(false);
			
		}
		if (e.keyCode === 13) {

		}
		if (e.ctrlKey && e.keyCode === 77) {

		}
	};
//--------------------------------------------------------------------------------------------------
	return (
		<Row
			className="justify-content-center cbg-light"
			onKeyDown={(e) => handleKeyDown(e)}
			onFocus={() => { setOpen(true); setNewTask((prevState) => ({ ...prevState, ["id"]: uuidv4(), ["date"]: today })) }}
		>
			<Col  xs={12} md={10} lg={8} >

				<InputGroup className="mb-1 mt-1" >
					<FormControl
						onChange={() => setNewTask((prevState) => ({ ...prevState, ["taskTitle"]: refTaskTitle.current.value }))}
						value={newTask.taskTitle}
						ref={refTaskTitle}
						onKeyDown={(e) => handleKeyDown(e)}
						placeholder="Describe the challenge"
						aria-label="Describe the challenge"
						aria-describedby="Describe the challenge"
					/>
					<Button variant="outline-info" className="ml-1" onClick={() => { if (newTask.taskTitle.length > 0) { dispatch(addTask(newTask)); setOpen(false); setNewTask(emptyTask) } else alert("Hi! You forgot to enter the task;)") }}>Go!</Button>
				</InputGroup>
				{open ? (
					<Card.Body>
						<Row className="mb-2">
							<Col xs={12} sm={ 6} >
								<Form.Check
									onClick={() => setNewTask((prevState) => ({ ...prevState, ["priority"]: !prevState.priority }))}
									checked={newTask.priority}
									label={`Important task`}
								/>
							</Col >

							<Col xs={12} sm={6 }>
								<Badge className="mb-1"  pill variant="info">Execution time</Badge>
								<DatePickerInput setEndDate={(slecetedDate) => setNewTask((prevState) => ({ ...prevState, ["endDate"]: slecetedDate }))} resetDate={newTask.date} />

							</Col>
						</Row>

						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Row>
								<Col xs={12}>
									<Form.Control
										onChange={() => setNewTask((prevState) => ({ ...prevState, ["taskDescription"]: refTaskDescription.current.value }))}
										value={newTask.taskDescription}
										ref={refTaskDescription}
										as="textarea"
										rows={3}
										id={""}
										placeholder="Describe the task"
									></Form.Control>
								</Col>
							</Row>
						</Form.Group>

						<Row>
							<Col className="d-flex justify-content-end" xs={12}>
								<Button className="mr-2" variant="outline-info" size="sm" onClick={() => setNewTask(emptyTask)}>
									Clean
								</Button>
								<Button
									onClick={() => { setNewTask(emptyTask); setOpen(false); }}
									variant="outline-info"
									size="sm"
								>
									Cacncel
								</Button>
								
							</Col>
						</Row>
					</Card.Body>
				) : (
					""
				)}
			</Col>
		</Row>
	);
};
