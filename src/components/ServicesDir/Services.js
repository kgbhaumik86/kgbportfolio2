import React, { Component } from 'react'
import ServicesInfo from "./ServicesInfo"

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ServicesInfo : ServicesInfo
         };
    }    
    render() {
        const ServInfo = this.state.ServicesInfo.map( (info) => { return (            
            
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className={info.fontAwesomeIcon}></i>
                    </span>
                    <h4 className="my-3">{ info.title }</h4>
                    <p className="text-muted">{ info.desc }</p>
                </div>            
            
        )})
        return (
            <div>
                {/* <!-- Services--> */}
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {ServInfo}
                        </div>
                    </div>
                </section>
            </div>            
        );
    }
}

export default Services;