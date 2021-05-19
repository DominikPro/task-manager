import React from "react";
import { ButtonGroup, Button, Row, Col } from "react-bootstrap";
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";

const MainMenu = () => {
    return (
        <>
            <Row className="justify-content-center"> 
                <Col xs={12} md={ 12}>
                <ButtonGroup className="mt-3" size="lg" >
                    
                        <Link to="/">
                            <Button className="m-1" variant="info"> Home</Button>
                        </Link>
                        <Link to="/daySchedule">
                            <Button className="m-1" variant="info"> My day</Button>
                        </Link>
                        <Link to="/todo-list">
                            <Button className="m-1" variant="info"> Task list</Button>
                        </Link>
                        <Link to="/tasks-done">
                            <Button className="m-1" variant="info"> Tasks done</Button>
                        </Link>
    
                </ButtonGroup>
                </Col>
                <Col xs ={10} md={10}>
                        <Input />
                </Col>

            </Row>
            <Row>
                
            </Row>
            
        </>
    );
};


export default MainMenu;
