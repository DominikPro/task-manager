import React, { useState, useContext, Children } from 'react';
import { Badge, Accordion, Card, Row, Col, Form, Button, InputGroup, Checkbox } from 'react-bootstrap/'
import { BsBoxArrowInUp, BsBoxArrowInDown, } from "react-icons/bs";
import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import { MdDone} from "react-icons/md"; 

import showDate from '../actions/shwoDate'
import DatePickerInput from "../shared/DatePickerInput"
import ContextAwareToggle from './ContextAwareToggle'
import { BsFillTrash2Fill, BsFillExclamationTriangleFill } from "react-icons/bs";
import { changePriority, editTaskDescryption, removeTask, editTaskTitle, showTaskInput, modifyEndDate} from "../../duck/actions/index";
import { useDispatch, useSelector } from "react-redux";



const Item = (props) => {
    const dispatch = useDispatch()
    let [focus, setFocus] = useState(false)
    const tasks = useSelector(state => state.taskReducer)

    return (
        <>
            {tasks.map(item => {if(item.done === false)
                return (
                    <Row className="justify-content-center  align-items-center">
                        <Col xs={ 12} lg={10}>

                            <Accordion defaultActiveKey="1" id={item.id} key={item.id} >
                                <Card.Header>
                                    
                                    <Row >
                                        <Col xs={1} sm={1} >
                                        <Button variant="outline-info"><MdDone size={15}/></Button>
                                                                          
                                        </Col>
                                        <Col xs={1} sm={1}>
                                        {item.priority ? <BsFillExclamationTriangleFill color="orange" /> : null}
                                        </Col>
                                        
                                        {item.editTaskTitle ?
                                            <>
                                                <Col xs={6} sm={8}>
                                                
                                                    <Form.Control as="textarea" rows={1} id={item.id} onBlur={(e) => dispatch(editTaskTitle(e))} >
                                                        {item.taskTitle}
                                                    </Form.Control>
                                                </Col>
                                                <Col xs={2} sm={1}>
                                                    <Button onClick={(newTitle) => dispatch(showTaskInput(newTitle))} id={item.id} className="float-right m-1" variant="outline-info" size="sm">
                                                        Save
                                                    </Button>
                                                </Col>
                                            </>
                                            :
                                            <Col xs={7} sm={9}>
                                                <Button onClick={(newTitle) => dispatch(showTaskInput(newTitle))} id={item.id} variant="outline" size="sm">
                                                    {item.taskTitle}
                                                </Button>

                                            </Col>}


                                        <Col xs={1} sm={1}>
                                            <ContextAwareToggle eventKey="0" />
                                        </Col>


                                    </Row>

                                    <Accordion.Collapse key={item.id} eventKey="0">

                                        <Card.Body>

                                            <Form.Group controlId="exampleForm.ControlTextarea1" >
                                                <Row className="d-flex justify-content-between mb-2">
                                                    <Col xs={12} sm={2}>
                                                    {/* <Badge pill variant="info"> {`Created  - ${showDate(item.date)}`}</Badge> */}
                                                    <Badge pill variant="info"> {`Created ${showDate(item.date)}`}</Badge>

                                                    </Col>
                                                    <Col xs={12} sm={2}>
                                                    <Form.Check defaultChecked={item.priority}
                                                            label={`Important task`} id={item.id}
                                                            onClick={(item) => dispatch(changePriority(item))} />
                                                    </Col>
                                                    <Col xs={5}>
                                                        <Badge className="mr-2" pill variant="info">Completion date</Badge>
                                                         {/* <h5>{showDate(item.endDate)}</h5> */}
                                                        <DatePickerInput endDate={item.endDate} setEndDate={(slecetedDate) => dispatch(modifyEndDate(slecetedDate, item.id))}></DatePickerInput>
                                                    </Col>

                                                    
                                                </Row>
                                                <Row className="mb-2">
                                                    <Col sm={12} md={10} >
                                                        <Form.Label>Describe the task</Form.Label>
        
                                                        <Form.Control as="textarea" rows={1} id={item.id} onBlur={(e) => dispatch(editTaskDescryption(e))} >
                                                            {item.taskDescription}
                                                        </Form.Control>

                                                    </Col>

                                                </Row>
                                                <Row className="justify-content-end" >
                                       
                                                    <Button id={item.id} onClick={(e) => dispatch(removeTask(e))} variant="danger" size="sm"><BsFillTrash2Fill size="1.5em" className="mr-2" />Delet</Button>
                                                </Row>
                                            </Form.Group>

                                        </Card.Body>

                                    </Accordion.Collapse>
                                </Card.Header>
                            </Accordion>
                        </Col>
                    </Row>
                )
            })}


        </>
    );
}

export default Item;