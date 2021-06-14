import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import Item from "../components/Item/Item";

const TasksDone = () => {
    return (
        <Row>
            <Col className="overflow-hidden" sm={12}>
                <Navbar expand="lg" sticky="top">
                    <h1 style={{ color: '#28A745', fontSize: 20 }}>Challenges completed</h1>
                </Navbar>
                <Item listType="done" />
            </Col>
        </Row>
    );
};

export default TasksDone;
