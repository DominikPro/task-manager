import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import Item from "../components/Item/Item";

const DaySchedule = () => {
  return (
    <Row>
      <Col className="overflow-hidden" sm={12}>
        <Navbar expand="lg" sticky="top">
          <h1 style={{ color: '#007BFF', fontSize: 20 }}>Challenges for today</h1>
        </Navbar>
        <Item listType="myDay" />
      </Col>
    </Row>
  );
};
export default DaySchedule;
