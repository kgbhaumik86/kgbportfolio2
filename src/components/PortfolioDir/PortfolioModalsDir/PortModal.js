import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PortModalInfo from './PortModalInfo'

const PortModal = (props) =>{
    const porjId = props.projId
    console.log(porjId)
    const portData = PortModalInfo.filter( item => (item.Id === {porjId})).map( filteredItem =>(        
        <div>
            <Container>
                <Row>
                    <Col sm={2}><b>Project Details:</b></Col>
                    <Col sm={10}>{filteredItem.projectDesc}</Col>                                                        
                </Row>                                                    
                <Row style={{"padding-top": "2em"}}>
                    <Col sm={2}><b>Technology Used:</b></Col>
                    <Col sm={10}>{filteredItem.projectDesc}</Col>                                                        
                </Row>
            </Container>
        </div>
    ))
    return(
        <React.Fragment>            
            {/* <Container>
                <Row>
                    <Col sm={2}><b>Project Details:</b></Col>
                    <Col sm={10}>Desc</Col>                                                        
                </Row>                                                    
                <Row style={{"padding-top": "2em"}}>
                    <Col sm={2}><b>Technology Used:</b></Col>
                    <Col sm={10}>Desc</Col>                                                        
                </Row>
            </Container> */}
            {portData}
        </React.Fragment>
    )
}

export default PortModal