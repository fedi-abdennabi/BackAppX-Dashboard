import React, {Component} from 'react';

import FooterDashboard from '../components/FooterDashboard';
import NavLeftDashboard from '../components/NavLeftDashboard';
import HeaderDashboard from '../components/HeaderDashboard';

class Dashboard extends Component {

    render() {
        return (
            <div id="wrapper">
                <NavLeftDashboard />
            <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <HeaderDashboard />
        
                <div className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 className="text-dark mb-0">Dashboard</h3><a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="index.html"><i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card shadow border-start-primary py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col me-2">
                                            <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>Earnings (monthly)</span></div>
                                            <div className="text-dark fw-bold h5 mb-0"><span>$40,000</span></div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-calendar fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card shadow border-start-success py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col me-2">
                                            <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>Earnings (annual)</span></div>
                                            <div className="text-dark fw-bold h5 mb-0"><span>$215,000</span></div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card shadow border-start-info py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col me-2">
                                            <div className="text-uppercase text-info fw-bold text-xs mb-1"><span>Tasks</span></div>
                                            <div className="row g-0 align-items-center">
                                                <div className="col-auto">
                                                    <div className="text-dark fw-bold h5 mb-0 me-3"><span>50%</span></div>
                                                </div>
                                                <div className="col">
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}><span className="visually-hidden">50%</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card shadow border-start-warning py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col me-2">
                                            <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>Pending Requests</span></div>
                                            <div className="text-dark fw-bold h5 mb-0"><span>18</span></div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-comments fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-7 col-xl-8">
                            <div className="card shadow mb-4">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h6 className="text-primary fw-bold m-0">Earnings Overview</h6>
                                    <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i className="fas fa-ellipsis-v text-gray-400"></i></button>
                                        <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                                            <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" href="index.html">&nbsp;Action</a><a className="dropdown-item" href="index.html">&nbsp;Another action</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item" href="index.html">&nbsp;Something else here</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <div className="card shadow mb-4">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h6 className="text-primary fw-bold m-0">Revenue Sources</h6>
                                    <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i className="fas fa-ellipsis-v text-gray-400"></i></button>
                                        <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                                            <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" href="index.html">&nbsp;Action</a><a className="dropdown-item" href="index.html">&nbsp;Another action</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item" href="index.html">&nbsp;Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area"><canvas data-bss-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}}}"></canvas></div>
                                    <div className="text-center small mt-4"><span className="me-2"><i className="fas fa-circle text-primary"></i>&nbsp;Direct</span><span className="me-2"><i className="fas fa-circle text-success"></i>&nbsp;Social</span><span className="me-2"><i className="fas fa-circle text-info"></i>&nbsp;Refferal</span></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="text-primary fw-bold m-0">Projects</h6>
                                </div>
                                <div className="card-body">
                                    <h4 className="small fw-bold">Server migration<span className="float-end">20%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}><span className="visually-hidden">20%</span></div>
                                    </div>
                                    <h4 className="small fw-bold">Sales tracking<span className="float-end">40%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}><span className="visually-hidden">40%</span></div>
                                    </div>
                                    <h4 className="small fw-bold">Customer Database<span className="float-end">60%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}><span className="visually-hidden">60%</span></div>
                                    </div>
                                    <h4 className="small fw-bold">Payout Details<span className="float-end">80%</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}><span className="visually-hidden">80%</span></div>
                                    </div>
                                    <h4 className="small fw-bold">Account setup<span className="float-end">Complete!</span></h4>
                                    <div className="progress mb-4">
                                        <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100'}}><span className="visually-hidden">100%</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="text-primary fw-bold m-0">Todo List</h6>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col me-2">
                                                <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">10:30 AM</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1"/><label className="form-check-label" htmlFor="formCheck-1"></label></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col me-2">
                                                <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">11:30 AM</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-2"/><label className="form-check-label" htmlFor="formCheck-2"></label></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col me-2">
                                                <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">12:30 AM</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-3"/><label className="form-check-label" htmlFor="formCheck-3"></label></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card text-white bg-primary shadow">
                                        <div className="card-body">
                                            <p className="m-0">Primary</p>
                                            <p className="text-white-50 small m-0">#4e73df</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card text-white bg-success shadow">
                                        <div className="card-body">
                                            <p className="m-0">Success</p>
                                            <p className="text-white-50 small m-0">#1cc88a</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card text-white bg-info shadow">
                                        <div className="card-body">
                                            <p className="m-0">Info</p>
                                            <p className="text-white-50 small m-0">#36b9cc</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card text-white bg-warning shadow">
                                        <div className="card-body">
                                            <p className="m-0">Warning</p>
                                            <p className="text-white-50 small m-0">#f6c23e</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card text-white bg-danger shadow">
                                        <div className="card-body">
                                            <p className="m-0">Danger</p>
                                            <p className="text-white-50 small m-0">#e74a3b</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card text-white bg-secondary shadow">
                                        <div className="card-body">
                                            <p className="m-0">Secondary</p>
                                            <p className="text-white-50 small m-0">#858796</p>
                                        </div>
                                    </div>
                                </div>
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
export default Dashboard;