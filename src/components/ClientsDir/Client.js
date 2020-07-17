import React, { Component } from 'react'

export default class Client extends Component {
    render() {
        return (
            <div>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img className="img-fluid d-block mx-auto" src= { require(`../../assets/image/logos/envato.jpg`)} alt="" /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img className="img-fluid d-block mx-auto" src={ require(`../../assets/image/logos/designmodo.jpg`)} alt="" /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img className="img-fluid d-block mx-auto" src={ require(`../../assets/image/logos/themeforest.jpg`)} alt="" /></a>
                            </div>
                            <div className="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img className="img-fluid d-block mx-auto" src={ require(`../../assets/image/logos/creative-market.jpg`)} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
