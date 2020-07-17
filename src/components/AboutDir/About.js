import React, { Component } from 'react'

export default class About extends Component {
    
    render() {        
        return (
            <div>
                <section className="page-section" id="about">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <ul className="timeline">
                             {
                                 this.props.aboutLinks.map(({ inverted, img, heading, subheading, body}, index) =>
                                 <li class={ inverted ? "timeline-inverted" : ""}>
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src= { require(`../../assets/image/about/${img}`)} alt="" /></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>{heading}</h4>
                                        <h4 class="subheading">{subheading}</h4>
                                        </div>
                                        <div class="timeline-body"><p class="text-muted">{body}</p></div>
                                    </div>
                                </li>
                                )
                             }                          
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>
                                        Be Part
                                        <br />
                                        Of Our
                                        <br />
                                        Story!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
