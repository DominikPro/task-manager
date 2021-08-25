import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
//--------------------------------------------------------------------------------------------------
import { Card, Row, Col, Button, } from "react-bootstrap/"
import "./quote.css"

const Quote = () => {
    const quotes = useSelector(state => state.quotesReducer)
    const [rundomQuoteNumber, setRundomQuoteNumber] = useState(0)
    
    const drawAQuote = () => {
        setRundomQuoteNumber(Math.floor((Math.random() * 10)))
    }

    useEffect(() => {
        drawAQuote()
    },[])

    return (
    <>
            <div className="h50 mb-4">
                <Row className="justify-content-center align-items-center">

                    <Col xs={12}  >
                        <h3 className="text-center" >Hello!</h3>
                    </Col>

                    <Col xs={12} md={8} className="mb-2  ">
                        <Card >

                            <Card.Header>Quote for you</Card.Header>

                            <Card.Body className="text-center ">
                                
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {quotes[rundomQuoteNumber].quotation}
                                    </p>
                                    <footer className="blockquote-footer">
                                        Author <cite title="Source Title">{quotes[rundomQuoteNumber].author}</cite>
                                    </footer>
                                </blockquote>
                                
                                <Button onClick={() => drawAQuote()} className="mt-2" variant="outline-info" > Next</Button>
                                    
                                </Card.Body>
                                
                        </Card>
                    </Col>
                </Row>
            </div>

     

    </>
)
}
export default Quote;
