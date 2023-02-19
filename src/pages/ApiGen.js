import React, {Component} from 'react';

import FooterDashboard from '../components/FooterDashboard';
import NavLeftDashboard from '../components/NavLeftDashboard';
import HeaderDashboard from '../components/HeaderDashboard';

class ApiGenerator extends Component {

    render() {
        return (
            <div id="wrapper">
               <NavLeftDashboard />
                  <div className="d-flex flex-column" id="content-wrapper">
                  <div id="content">
               <HeaderDashboard />

               <div className="container-fluid">
                    <h3 className="text-dark mb-4">Api Generator</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold" style={{bsprimary: '#00a0c4',bsprimaryrgb: '0,160,196'}}><span style={{fontweight: 'normal !important', color: 'rgba(var(--bs-dark-rgb), var(--bs-text-opacity))'}}>Api Generator</span></p>
                        </div>
                        <div className="card-body">
                            <section>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{paddingtop: '15px',paddingbottom: '15px',paddingright: '15px',paddingleft: '15px'}}>
                                            <div id="cardEntrada-2" className="p-4 text-center shadow-lg m-5 rounded-5" style={{background: 'linear-gradient(171deg, #00a0c4 0%, var(--bs-indigo) 100%), var(--bs-purple)',width: '280px'}}><img className="pt-2 w-50" src="assets/img/téléchargé-removebg-preview.png" alt="item"/>
                                                <h3 className="text-white text-center pt-2">Crud Api</h3>
                                                <p className="fw-bold pt-1 text-white p-0 m-0">Subtitle :&nbsp;lorem ipsum</p>
                                                <p className="fw-light text-white m-0">Description :&nbsp;lorem ipsum</p>
                                                <hr className="text-white"/>
                                                <div className="text-start col-12"><button className="btn btn-primary text-start" type="button">Generate</button><button className="btn" type="button" data-bs-target="#modalRecibirCadaber" data-bs-toggle="modal"></button><span style={{color: 'rgb(255,255,255)',paddingleft: '22px'}}>View details</span></div>
                                            </div>
                                        </div>
                                        <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{paddingtop: '15px',paddingbottom: '15px',paddingright: '15px',paddingleft: '15px',marginright: '0px',marginbottom: '0px'}}>
                                            <div id="cardEntrada-1" className="p-4 text-center shadow-lg m-5 rounded-5" style={{background: 'linear-gradient(171deg, #00a0c4 0%, var(--bs-indigo) 100%), #00a0c4',width: '280px'}}><img className="pt-2 w-50" src="assets/img/147-1471182_credit-card-icon-circle.png" alt="item"/>
                                                <h3 className="text-white text-center pt-2">Payement Api</h3>
                                                <p className="fw-bold pt-1 text-white p-0 m-0">Subtitle :&nbsp;lorem ipsum</p>
                                                <p className="fw-light text-white m-0">Description :&nbsp;lorem ipsum</p>
                                                <hr className="text-white"/>
                                                <div className="text-start col-12"><button className="btn btn-primary" type="button">Generate</button><button className="btn" type="button" data-bs-target="#modalRecibirCadaber" data-bs-toggle="modal"></button><span style={{color: 'rgb(255,255,255)',paddingleft: '22px'}}>View details</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
               <FooterDashboard />

            </div>
            </div>
            </div>

            )
        }
    }
export default ApiGenerator;