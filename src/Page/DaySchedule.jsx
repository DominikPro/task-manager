import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import Item from "../components/Item/Item";
import Sorting from "../components/Sorting/Sorting";

const DaySchedule = () => {
  return (
    <Row>
  
      <Col style={{ marginBottom: "120px" }} sm={12}>
        <Row>
          <Col xs={12} >
            <Navbar style={{ backgroundColor: "#0F88F2", borderRadius: " 0px 0px 20px 20px" }} expand="lg" sticky="top" >
            
                  <h1 style={{ color: '#f7f7f7', fontSize: 18 }}>Challenges for today</h1>
 
                  <Sorting />

            </Navbar>
          </Col>
        </Row>
        <Item listType="myDay" />
      </Col>
    </Row>
  );
};
export default DaySchedule;
