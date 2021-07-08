import React, { useState, useContext, Children } from 'react';
import { useDispatch, useSelector } from "react-redux";
//--------------------------------------------------------------------------------------------------
import { changePriority, editTaskDescryption, removeTask, editTaskTitle, showTaskInput, modifyEndDate, taskDone, addToMyDay } from "../../duck/actions/index";
import { BsFillTrash2Fill, BsFillExclamationTriangleFill, BsCardList, BsFillBrightnessHighFill, BsCheckAll } from "react-icons/bs";
import { Badge, Accordion, Card, Row, Col, Form, Button } from 'react-bootstrap/';
import { MdDone } from "react-icons/md";
//--------------------------------------------------------------------------------------------------
import showDate from '../actions/shwoDate';
import DatePickerInput from "../shared/DatePickerInput";
import ContextAwareToggle from './ContextAwareToggle';
import EmptyListInfo from "../EmptyListInfo/EmptyListInfo"

const Item = (props) => {

    const dispatch = useDispatch()
    let [focus, setFocus] = useState(false)
    const [numberOfItems, setNumberOfItems] = useState(0)
    const tasks = useSelector(state => state.taskReducer)
    const quotes = useSelector(state => state.quotesReducer)

    let listType = props.listType

    if (listType === "todoList") {
        if (tasks.some(item => item.done === false) === true) {
            return (
                <>
                    {tasks.map(item => {
                        if (item.done === false) {
                            return (
                                <Row className="justify-content-center  align-items-center ">

                                    <Col xs={12} lg={10} >

                                        <Accordion defaultActiveKey="1" id={item.id} key={item.id} >
                                            <Card.Header>

                                                <Row >

                                                    <Col xs={2} sm={1}>
                                                        <Button onClick={() => dispatch(taskDone(item.id))} className="mr-1" variant="outline-info"><MdDone size={15} /></Button>
                                                    </Col>
                                                    <Col xs={1} sm={1}>
                                                        {item.myDay ? <BsFillBrightnessHighFill className="mr-1" color="#138496" /> : null}
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

                                                    <Card.Body  >
                                                        <Card className="pl-3 pr-4 pt-3 mt-2" border="secondary">
                                                            <Form.Group controlId="exampleForm.ControlTextarea1" >

                                                                <Row className="d-flex justify-content-between mb-2">
                                                                    <Col xs={12} sm={2}>
                                                                        <Badge pill variant="info"> {`Created ${showDate(item.date)}`}</Badge>
                                                                    </Col>
                                                                    <Col xs={12} sm={2}>
                                                                        <Form.Check defaultChecked={item.priority}
                                                                            onClick={(item) => dispatch(changePriority(item))}
                                                                            label={`Important`} id={item.id}
                                                                             />
                                                                    </Col>
                                                                    <Col xs={5}>
                                                                        <Badge className="mr-2" pill variant="info">Completion date</Badge>
                                                                        <DatePickerInput endDate={item.endDate} setEndDate={(slecetedDate) => dispatch(modifyEndDate(slecetedDate, item.id))}></DatePickerInput>
                                                                    </Col>
                                                                </Row>

                                                                <Row className="mb-2">
                                                                    <Col sm={12} md={10} >
                                                                        <Form.Label>Describe the task</Form.Label>

                                                                        <Form.Control onBlur={(e) => dispatch(editTaskDescryption(e))} as="textarea" rows={1} id={item.id}  >
                                                                            {item.taskDescription}
                                                                        </Form.Control>

                                                                    </Col>

                                                                </Row>
                                                                <Row  >
                                                                    <Col xs={5} >
                                                                        <Button onClick={(e) => dispatch(removeTask(e))} className="ml-2 " id={item.id} variant="danger" size="sm"><BsFillTrash2Fill size={20} className="mr-2" />Delet</Button>
                                                                    </Col>
                                                                    <Col xs={7} className="d-flex justify-content-end" >
                                                                        {item.myDay ?
                                                                            <Button onClick={(e) => dispatch(addToMyDay(item.id))} className="ml-2 justify-content-end" id={item.id} variant="info" size="sm">
                                                                                <BsFillBrightnessHighFill size={20} className="mr-2" />My day</Button>
                                                                            :
                                                                            <Button onClick={(e) => dispatch(addToMyDay(item.id))} className="ml-2 justify-content-end" id={item.id} variant="outline-info" size="sm">
                                                                                <BsCardList size={20} className="mr-2" />To day</Button>
                                                                        }
                                                                    </Col>

                                                                </Row>
                                                            </Form.Group>
                                                        </Card>
                                                    </Card.Body>

                                                </Accordion.Collapse>
                                            </Card.Header>
                                        </Accordion>
                                    </Col>
                                </Row>
                            )
                        }
                         
                    })}


                </>
            )
        } else return (
            <EmptyListInfo listType="todoList"/>
        )
    }
//--------------------------------------------------------------------------------------------------
    if (listType === "myDay") {
        if (tasks.some(item => item.myDay === true) === true) {
            return (
                <>
                    {tasks.map(item => {
                        if (item.myDay === true) {
                            return (

                                <Row className="justify-content-center  align-items-center">
                                
                                    <Col xs={12} lg={10}>

                                        <Accordion defaultActiveKey="1" id={item.id} key={item.id} >
                                            <Card.Header>

                                                <Row >

                                                    <Col xs={2} sm={1}>
                                                        <Button onClick={() => { dispatch(taskDone(item.id)); dispatch(addToMyDay(item.id)) }} className="mr-1" variant="outline-info"><MdDone size={15} /></Button>
                                                    </Col>
                                                    <Col xs={1} sm={1}>
                                                        {item.myDay ? <BsFillBrightnessHighFill className="mr-1" color="#138496" /> : null}
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

                                                    <Card.Body  >
                                                        <Card className="pl-3 pr-4 pt-3 mt-2" border="secondary">
                                                            <Form.Group controlId="exampleForm.ControlTextarea1" >
                                                                <Row className="d-flex justify-content-between mb-2">
                                                                    <Col xs={12} sm={2}>
                                                                
                                                                        <Badge pill variant="info"> {`Created ${showDate(item.date)}`}</Badge>

                                                                    </Col>
                                                                    <Col xs={12} sm={2}>
                                                                        <Form.Check defaultChecked={item.priority}
                                                                            label={`Important`} id={item.id}
                                                                            onClick={(item) => dispatch(changePriority(item))} />
                                                                    </Col>
                                                                    <Col xs={5}>
                                                                        <Badge className="mr-2" pill variant="info">Completion date</Badge>
                                                                        
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
                                                                <Row  >
                                                                    <Col xs={5} >
                                                                        <Button onClick={(e) => dispatch(removeTask(e))} className="ml-2 " id={item.id} variant="danger" size="sm"><BsFillTrash2Fill size={20} className="mr-2" />Delet</Button>
                                                                    </Col>
                                                                    <Col xs={7} className="d-flex justify-content-end" >
                                                                        {item.myDay ?
                                                                            <Button onClick={(e) => dispatch(addToMyDay(item.id))} className="ml-2 justify-content-end" id={item.id} variant="info" size="sm">
                                                                                <BsFillBrightnessHighFill size={20} className="mr-2" />My day</Button>
                                                                            :
                                                                            <Button onClick={(e) => dispatch(addToMyDay(item.id))} className="ml-2 justify-content-end" id={item.id} variant="outline-info" size="sm">
                                                                                <BsCardList size={20} className="mr-2" />To day</Button>
                                                                        }
                                                                    </Col>

                                                                </Row>
                                                            </Form.Group>
                                                        </Card>
                                                    </Card.Body>

                                                </Accordion.Collapse>
                                            </Card.Header>
                                        </Accordion>
                                    </Col>
                                </Row>
                            )
                        }
                    })}
                </>
            )
        }else return (
            <EmptyListInfo listType="myDay"/>
        )
    }
//--------------------------------------------------------------------------------------------------     
    if (listType === "done") {
        if (tasks.some(item => item.done === true) === true) {
            return (
                <>
                    {tasks.map(item => {
                        if (item.done === true) {

                            return (

                                <Row className="justify-content-center  align-items-center">

                                    <Col xs={12} lg={10}>

                                        <Accordion defaultActiveKey="1" id={item.id} key={item.id} >
                                            <Card.Header>

                                                <Row >

                                                    <Col xs={2} sm={1}>
                                                        <Button onClick={() => dispatch(taskDone(item.id))} className="mr-1" variant="info"><MdDone size={15} /></Button>
                                                    </Col>
                                                    <Col xs={1} sm={1}>
                                                        {item.myDay ? <BsFillBrightnessHighFill className="mr-1" color="#138496" /> : null}
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

                                                    <Card.Body  >
                                                        <Card className="pl-3 pr-4 pt-3 mt-2" border="secondary">
                                                            <Form.Group controlId="exampleForm.ControlTextarea1" >
                                                                <Row className="d-flex justify-content-between mb-2">
                                                                    <Col xs={12} sm={2}>
                                                                        {/* <Badge pill variant="info"> {`Created  - ${showDate(item.date)}`}</Badge> */}
                                                                        <Badge pill variant="info"> {`Created ${showDate(item.date)}`}</Badge>

                                                                    </Col>
                                                                    <Col xs={12} sm={2}>
                                                                        <Form.Check defaultChecked={item.priority}
                                                                            label={`Important`} id={item.id}
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
                                                                <Row  >
                                                                    <Col xs={5} >
                                                                        <Button onClick={(e) => dispatch(removeTask(e))} className="ml-2 " id={item.id} variant="danger" size="sm"><BsFillTrash2Fill size={20} className="mr-2" />Delet</Button>
                                                                    </Col>
                                                                    <Col xs={7} className="d-flex justify-content-end" >
                                                                        {item.myDay ?
                                                                            <Button onClick={(e) => dispatch(addToMyDay(item.id))} className="ml-2 justify-content-end" id={item.id} variant="info" size="sm">
                                                                                <BsFillBrightnessHighFill size={20} className="mr-2" />My day</Button>
                                                                            :
                                                                            <Button onClick={(e) => dispatch(addToMyDay(item.id))} className="ml-2 justify-content-end" id={item.id} variant="outline-info" size="sm">
                                                                                <BsCardList size={20} className="mr-2" />To day</Button>
                                                                        }
                                                                    </Col>

                                                                </Row>
                                                            </Form.Group>
                                                        </Card>
                                                    </Card.Body>

                                                </Accordion.Collapse>
                                            </Card.Header>
                                        </Accordion>
                                    </Col>
                                </Row>
                            )
                        }

                    })}


                </>
            )
        }else return (
            <EmptyListInfo listType="done"/>
        )
    }
}

export default Item;