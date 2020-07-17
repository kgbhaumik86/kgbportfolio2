import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap';
// import PortModal from './PortfolioModalsDir/PortModal'
import PortModalInfo from './PortfolioModalsDir/PortModalInfo'

export default class Portfolio extends Component {
    constructor(props){
        super(props)
        this.state = {            
            isModalVisible : false,
            filteredModal : {}
        }                    
    }       
    ShowModal(index) 
    {        
        console.log(index.projId)
        const portInfo = PortModalInfo.filter( i => i.Id === index.projId )  
        console.log(portInfo[0])    
        this.setState({
            filteredModal: portInfo[0],
            isModalVisible: true           
        });               
      
    };
    handleShow(){
        this.setState({
            isModalVisible: false
        })
    }
    render() {  
        console.log(this.state.filteredModal)      
        return (            
            <div>
                {/* <!-- Portfolio Grid--> */}
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            { 
                                this.props.portfolioLinks.map((index) =>  
                                    <>                                   
                                        <div className="col-lg-4 col-sm-6 mb-4">
                                            <div className="portfolio-item">                                                
                                                <a className="portfolio-link" data-toggle="modal" onClick={this.ShowModal.bind(this,index)}>
                                                    <div className="portfolio-hover">
                                                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                                    </div>
                                                    <img className="img-fluid" src={ require(`../../assets/image/portfolio/${index.imgUrl}.jpg`) }/>                                                
                                                </a>
                                                <div className="portfolio-caption">
                                                    <div className="portfolio-caption-heading" >{ index.title }</div>
                                                    <div className="portfolio-caption-subheading text-muted" >{ index.caption }</div>
                                                </div>
                                            </div>
                                        </div>                                        
                                                                                
                                    </>
                                )
                            }
                            
                        </div>
                    </div>
                </section>
                <Modal 
                    show={this.state.isModalVisible} 
                    onHide={this.toggleModal} 
                    backdrop= {true} size="xl">
                    <Modal.Header closeButton onClick={() => this.handleShow()}>
                        <div>
                            <Modal.Title>{this.state.filteredModal.projectName}</Modal.Title>
                            <p className="item-intro text-muted">{this.state.filteredModal.projectHead}</p>
                        </div>
                    </Modal.Header>
                    <Modal.Body>                                                
                        <Container>
                            <Row>
                                <Col sm={2}><b>Project Details:</b></Col>
                                <Col sm={10}>{this.state.filteredModal.projectName}</Col>                                                        
                            </Row>                                                    
                            <Row style={{"padding-top": "2em"}}>
                                <Col sm={2}><b>Technology Used:</b></Col>
                                <Col sm={10}>{this.state.filteredModal.projectDesc}</Col>                                                        
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleShow.bind(this)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleShow.bind(this)}>
                        Save Changes
                    </Button>
                    </Modal.Footer>                  
                </Modal>
            </div>
        )
    }
}
