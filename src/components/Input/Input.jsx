import React, { useEffect, useRef, useState } from "react";
import DatePickerInput from "../shared/DatePickerInput"
import {FormControl, InputGroup, Badge, Button, Form, Card, Row, Col} from "react-bootstrap"
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../../duck/actions/index"
import { useDispatch, useSelector } from 'react-redux'
import { emptyTaskTemplate } from "../../duck/reducers/state"

export const Input = () => {
	let emptyTask = emptyTaskTemplate
	const today = Date.parse(new Date());
	const [newTask, setNewTask] = useState(
		{ "id": "", "taskTitle": "", "taskDescription": "", "priority": false, "date": "", "endDate": "" },
	);
	const dispatch = useDispatch();
	const refTaskTitle = useRef();
	const refTaskDescription = useRef();

	const [open, setOpen] = useState();
	let handleKeyDown = (e) => {
		if (e.keyCode === 27) {
			setOpen(false);
			console.log(e);
		}
		if (e.keyCode === 13) {
			console.log("siema ztej strony enter ");
			console.log(e);
		}
		if (e.ctrlKey && e.keyCode === 77) {
			console.log("siema siem to ja skrót");
		}
	};

	useEffect(() => {
		console.log(newTask)
	}, [newTask])

	return (
		<Row
			className="justify-content-center"
			onKeyDown={(e) => handleKeyDown(e)}
			onFocus={() => { setOpen(true); setNewTask((prevState) => ({ ...prevState, ["id"]: uuidv4(), ["date"]: today })) }}
		>
			{/* <Col xs={10} sm={10} md={8} lg={8} xl={6}> */}
			<Col  >

				<InputGroup className="mb-3 mt-3" >
					<FormControl
						onChange={() => setNewTask((prevState) => ({ ...prevState, ["taskTitle"]: refTaskTitle.current.value }))}
						value={newTask.taskTitle}
						ref={refTaskTitle}
						onKeyDown={(e) => handleKeyDown(e)}
						placeholder="Describe the challenge"
						aria-label="Describe the challenge"
						aria-describedby="Describe the challenge"
					/>
					<Button onClick={() => { if (newTask.taskTitle.length > 0) { dispatch(addTask(newTask)); setOpen(false); setNewTask(emptyTask) } else alert("Hi! You forgot to enter the task;)") }}>Go!</Button>
				</InputGroup>
				{open ? (
					<Card.Body>
						<Row className="mb-3 ">
							<Col xs={12} sm={ 6} >
								<Form.Check
									checked={newTask.priority}
									onClick={() => setNewTask((prevState) => ({ ...prevState, ["priority"]: !prevState.priority }))}
									label={`Important task`}

								/>
							</Col >

							<Col xs={12} sm={6 }>
								{/* <DatePickerInput setEndDate={(slecetedDate) => { setNewDate(slecetedDate)} }/> */}
								<Badge className="mr-1"  pill variant="info">Execution time</Badge>
								<DatePickerInput setEndDate={(slecetedDate) => setNewTask((prevState) => ({ ...prevState, ["endDate"]: slecetedDate }))} resetDate={newTask.date} />

							</Col>
						</Row>


						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Row>
								<Col xs={12}>
									<Form.Label>
										Describe the task
									</Form.Label>
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
								<Button className="mr-2" variant="outline-warning" size="sm" onClick={() => setNewTask(emptyTask)}>
									Clean
								</Button>
								<Button
									variant="outline-warning"

									size="sm"
									onClick={() => { setNewTask(emptyTask); setOpen(false); }}
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
