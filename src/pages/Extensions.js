import React, {Component} from 'react';

import FooterDashboard from '../components/FooterDashboard';
import NavLeftDashboard from '../components/NavLeftDashboard';
import HeaderDashboard from '../components/HeaderDashboard';

class Extensions extends Component {

    render() {
        return (
            <div id="wrapper">
               <NavLeftDashboard />
                  <div className="d-flex flex-column" id="content-wrapper">
                  <div id="content">
               <HeaderDashboard />
               <div className="container-fluid">
                    <h3 className="text-dark mb-4">Extensions</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold" style={{bsprimary: '#00a0c4',bsprimaryrgb: '0,160,196'}}><span style={{fontweight: 'normal !important', color: 'rgba(var(--bs-dark-rgb), var(--bs-text-opacity))'}}>Extensions</span></p>
                        </div>
                        <div className="card-body">
                            <div id="cardEntrada-2" className="p-4 text-center shadow-lg m-5 rounded-5" style={{background: 'linear-gradient(171deg, #00a0c4 0%, var(--bs-indigo) 100%), var(--bs-purple)',width: '280px'}}><img className="pt-2 w-50" src="assets/img/584856ade0bb315b0f7675ab.png" width="116" height="125" alt='email'/>
                                <h3 className="text-white text-center pt-2">Trigger Email</h3>
                                <p className="fw-bold pt-1 text-white p-0 m-0"><span style={{fontweight: 'normal !important'}}>Made by</span> BackAppX</p>
                                <p className="fw-light text-white m-0">Composes and sends an email base on the contents of a document written to a specified cloud Firestore...&nbsp;</p>
                                <hr className="text-white"/>
                                <div className="text-start col-12"><button className="btn btn-primary" type="button">Install</button><button className="btn" type="button" style={{marginleft: '34px',paddingleft: '24px'}} data-bs-target="#modalRecibirCadaber" data-bs-toggle="modal"><span className="text-start text-light">View details</span></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

               <FooterDashboard />

            </div>
            </div>

            )
        }
    }
export default Extensions;