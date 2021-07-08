import React from "react";
import { Row, Col} from 'react-bootstrap/';
//--------------------------------------------------------------------------------------------------
import { BsCheckAll } from "react-icons/bs";

const infoList = [
    {listType: "todoList", info:"You don't have any tasks to do"},
    {listType: "myDay", info:"You don't have any tasks scheduled for today"},
    {listType: "done", info:"There are no completed tasks"}
]

const EmptyListInfo = (listType) => {
    
    const infoId = infoList.findIndex(item => item.listType === listType.listType)

        return (
            <Col>
                <Row className="justify-content-center  align-items-center">
                    <h5>{infoList[infoId].info}</h5>
                </Row>
                <Row className="justify-content-center  align-items-center">
                    <BsCheckAll size={140} className="mr-2" color="e6f2ff" />
                </Row>
            </Col>
        );
	
};
export default EmptyListInfo;
