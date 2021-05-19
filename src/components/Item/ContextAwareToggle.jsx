import React, { useContext } from 'react';
import { AccordionContext, useAccordionToggle, Button } from 'react-bootstrap';
import { BsBoxArrowInUp, BsBoxArrowInDown, } from "react-icons/bs";

const ContextAwareToggle = ({ eventKey, callback }) => {
        const currentEventKey = useContext(AccordionContext);
        const decoratedOnClick = useAccordionToggle(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = currentEventKey === eventKey;

        return (
            <Button
                className="mt-1"
                variant="outline"
                size="sm"
                onClick={decoratedOnClick}
            >
                {isCurrentEventKey ? <BsBoxArrowInUp size="1.5em" color="green"/> : <BsBoxArrowInDown size="1.5em" color="green"/>}
            </Button>

        );
}
    
export default ContextAwareToggle