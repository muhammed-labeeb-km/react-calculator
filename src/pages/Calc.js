import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Row,Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Calc() {
    const [val, setVal] = useState("");

    function handleButtonClick(e) {
        setVal(val+`${e}`);
    }
    function handleAc(){
        setVal("")
    }
    function handleBackSpace(){
        setVal(val.slice(0,val.length-1))
    }

    function handleEqual() {
        setVal(eval(val))
      }

  return (
    <div>
      <Container className='bg-black mt-5 p-5' style={{borderRadius:'35px'}}>
      <Row >
      <Col> 
      <Form.Control type="text" id='formInput' value={val} className='bg-black text-white fs-1' style={{fontWeight:'800'}} />
    </Col>
      </Row>

      <Row className=' pt-5'>
      <Col xs={3}>
      <Button className='btn btn-secondary' style={{borderRadius:'50%',width:'70px', height:'70px'}} onClick={() => handleAc("")}><b>AC</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-secondary' style={{borderRadius:'50%',width:'70px' , height:'70px',}} onClick={() => handleBackSpace("")}><b>{`<-`}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-secondary' style={{borderRadius:'50%',width:'70px' , height:'70px'}}><b>%</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-warning fs-2' style={{borderRadius:'50%',width:'70px', height:'70px'}} onClick={() => handleButtonClick("/")}><b>/</b></Button>
      </Col>
      </Row>
      <Row className=' pt-5'>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(7)}><b>{7}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(8)}><b>{8}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(9)}><b>{9}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-warning fs-1' style={{borderRadius:'50%',width:'70px', height:'70px'}} onClick={() => handleButtonClick("*")}><b>*</b></Button>
      </Col>
      </Row>

      <Row className=' pt-5'>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(4)}><b>{4}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(5)}><b>{5}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(6)}><b>{6}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-warning fs-2' style={{borderRadius:'50%',width:'70px', height:'70px'}}onClick={() => handleButtonClick("-")}><b>-</b></Button>
      </Col>
      </Row>

      <Row className=' pt-5'>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(1)}><b>{1}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(2)}><b>{2}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(3)}><b>{3}</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-warning fs-2' style={{borderRadius:'50%',width:'70px', height:'70px'}}onClick={() => handleButtonClick("+")}><b>+</b></Button>
      </Col>
      </Row>
      <Row className=' pt-5'>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick("0")}><b>0</b></Button>
      </Col>
      <Col xs={3}>
      <Button className='btn btn-dark' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick("00")}><b>00</b></Button>
      </Col>
      <Col xs={3}>
        <Button className='btn btn-dark fs-3' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={() => handleButtonClick(".")}><b>.</b></Button>
      </Col>
      <Col xs={3}>
        <Button className='btn btn-warning fs-2' style={{ borderRadius: '50%', width: '70px', height: '70px' }} onClick={handleEqual}><b>=</b></Button>
      </Col>
    </Row>
  </Container>
</div>
);
}

export default Calc
