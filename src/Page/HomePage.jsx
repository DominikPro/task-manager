import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import Quote from "../components/Quote/Quote";
import Weather from "../components/Weather/Weather";

const HomePage = () => {
	return (
		<>

            <Row>
            
				<Col xs={12}>
					<Quote />
                </Col>



                <Col xs ={12}>
					<Weather />
				</Col>
			</Row>
		</>
	);
};

export default HomePage;
