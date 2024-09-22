import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//Here, the actual list item is converted into a <li></li> HTML element
export function ListItem( props ) {

    const { id, text, completed, toggleTask, handleClearByID } = props;

    const updateCheck = ()=>{
      toggleTask(id);
    };

    const clearCurrentItem = (e) =>{
      //e.stopPropagation();
      handleClearByID(id);
    };

    return (
      <Card className="list-item">
        <Row className="align-items-center justify-content-between">
          <Col xs={2} className="text-start">
            <i className="bi bi-check" onClick={updateCheck} style={{ fontSize: '2rem', color: completed ? 'lightgray' : 'green' } }></i>
          </Col>
          <Col xs={8} className="text-center">
            <li className={completed ? 'completed' : ''} >
              {text}
            </li>
          </Col>
          <Col xs={2} className="text-end" >
          <i className="bi-x" style={{color: 'red'}} onClick={clearCurrentItem}></i>
          </Col>
          
        </Row>

      </Card>
    );
  }