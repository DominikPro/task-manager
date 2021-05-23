import React from "react";
import { ButtonGroup, Button, Row, Col } from "react-bootstrap";
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";
import { BsListTask, BsListCheck, BsCardList } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";

const MainMenu = () => {
    return (
        <>
            <Row className="justify-content-center fixed-bottom bg-white">
            {/* <Row className="justify-content-center "> */}

                
                <Col xs={10} md={10}>
                    <Input />
                </Col>

                <Row className="justify-content-around">

                    <Col xs={12} md={12} className="justify-content-around" >
                        <ButtonGroup className="mt-2, mb-2" size="lg" >
                            <Col xs={3}><Link to="/">
                                <Button className="m-1" variant="info"> <VscHome size={30} /></Button>
                            </Link></Col>
                            <Col xs={3}><Link to="/daySchedule">
                                <Button className="m-1" variant="info"> <BsCardList size={30} /></Button>
                            </Link></Col>
                            <Col xs={3}> <Link to="/todo-list">
                                <Button className="m-1" variant="info"><BsListTask size={30} /></Button>
                            </Link></Col>
                            <Col xs={3}> <Link to="/tasks-done">
                                <Button className="m-1" variant="info"> <BsListCheck size={30} /></Button>
                            </Link></Col>
                        </ButtonGroup>
                    </Col>

                </Row>


            </Row>
  

        </>
    );
};


export default MainMenu;
