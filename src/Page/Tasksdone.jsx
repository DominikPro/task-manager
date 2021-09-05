import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import Item from "../components/Item/Item";
import Sorting from "../components/Sorting/Sorting";  

const TasksDone = () => {
    return (
        <Row>
            {/* <Col className="overflow-hidden" sm={12}> */}
            <Col style={{ marginBottom: "120px"}}   sm={12}>
                <Navbar style={{backgroundColor: "#7C87A6" , borderRadius: '0px 0px 20px 20px'}}  expand="lg" sticky="top" >
                    <h1 style={{ color: '#f7f7f7', fontSize: 18 }}>Challenges completed</h1>
                    <Sorting/>	
                </Navbar>
                <Item listType="done" />
            </Col>
        </Row>
    );
};

export default TasksDone;
