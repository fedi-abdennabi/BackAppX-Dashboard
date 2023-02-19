import React, {Component} from 'react';

import FooterDashboard from '../components/FooterDashboard';
import NavLeftDashboard from '../components/NavLeftDashboard';
import HeaderDashboard from '../components/HeaderDashboard';

class Products extends Component {

    render() {
        return (
            <div id="wrapper">
               <NavLeftDashboard />
                  <div className="d-flex flex-column" id="content-wrapper">
                  <div id="content">
               <HeaderDashboard />
               <div className="container-fluid">
                    <h3 className="text-dark mb-4">Products and features</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 fw-bold" style={{bsprimary: '#00a0c4',bsprimaryrgb: '0,160,196'}}></p>
                        </div>
                        <div className="card-body">
                            <section>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{paddingtop: '15px',paddingbottom: '15px',paddingright: '15px',paddingleft: '15px'}}>
                                            <div className="bg-light border rounded shadow card" data-bss-hover-animate="pulse" style={{boxshadow: '0px 0px'}}><img className="card-img-top" src="assets/img/Data_security_28.jpg" alt='product' width="323" height="232"/>
                                                <div className="card-body">
                                                    <h3 className="card-title" style={{fontfamily: 'Antic, sans-serif',color: 'rgb(81,87,94)'}}>Authentification</h3>
                                                    <p className="card-text" style={{fontfamily: 'Antic, sans-serif',color: 'rgb(81,87,94)'}}></p><p id="lorem">End-to-end user identification solution in less than 10 lines of code</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{paddingtop: '15px',paddingbottom: '15px',paddingright: '15px',paddingleft: '15px',marginright: '0px',marginbottom: '0px'}}>
                                            <div className="bg-light border rounded shadow card" data-bss-hover-animate="pulse"><img className="card-img-top" src="assets/img/na_feb_10.jpg" width="323" height="232" alt='product' />
                                                <div className="card-body">
                                                    <h3 className="card-title" style={{fontfamily: 'Antic, sans-serif',color: 'rgb(81,87,94)'}}>Storage</h3>
                                                    <p className="card-text" style={{fontfamily: 'Antic, sans-serif',color: 'rgb(81,87,94)'}}></p><p id="lorem">Store and retrieve user-generated content such as images and video</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{paddingtop: '15px',paddingbottom: '15px',paddingright: '15px',paddingleft: '15px'}}>
                                            <div className="bg-light border rounded shadow card" data-bss-hover-animate="pulse"><img className="card-img-top" src="assets/img/7015995.jpg" width="323" height="232" alt='product'/>
                                                <div className="card-body">
                                                    <h3 className="card-title" style={{fontfamily: 'Antic, sans-serif',color: 'rgb(81,87,94)'}}>Api Generator</h3>
                                                    <p className="card-text" style={{fontfamily: 'Antic, sans-serif',color: 'rgb(81,87,94)'}}></p><p id="lorem">API operations such as Crud , request handling, and response formatting</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto col-sm-12 col-md-12 col-lg-4 col-xl-4" style={{paddingtop: '15px',paddingbottom: '15px',paddingright: '15px',paddingleft: '15px'}}>
                                            <div className="bg-light border rounded shadow card" data-bss-hover-animate="pulse"><img className="card-img-top" src="assets/img/Puzzles-780x470.jpg" width="323" height="232" alt='product'/>
                                                <div className="card-body">
                                                    <h3 className="card-title" style={{fontfamily: 'Antic, sans-serif',color: 'rgb(81,87,94)'}}>Extensions</h3>
                                                    <p className="card-text" style={{fontfamily: 'Antic, sans-serif',color: 'rgb(81,87,94)'}}></p><p id="lorem">Pre-installed solutions that save you time </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
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
export default Products;