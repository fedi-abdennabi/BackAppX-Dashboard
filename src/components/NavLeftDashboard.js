import React, {Component} from 'react';

class NavLeftDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
          activeLink: 'dashboard'
        };
        this.handleLinkClick = this.handleLinkClick.bind(this);
      }
    
      handleLinkClick(link) {
        this.setState({ activeLink: link });
      }
    render() {
      return (
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{background: 'linear-gradient(#00a0c4 0%, #005bc6), #ef99a3'}}>
            <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/"><img src="assets/img/logo/logo_light_mode-01.png" alt="logo" width="137" height="36" style={{marginleft: '16px'}}/>
                    <div className="sidebar-brand-icon rotate-n-15"></div>
                    <div className="sidebar-brand-text mx-3"></div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'dashboard' ? 'active' : ''}`} href="/" onClick={() => this.handleLinkClick('dashboard')}><i className="material-icons">dashboard</i><span style={{paddingleft: '0px', marginleft: '0px'}}>Dashboard</span></a></li>
                    <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'authentification' ? 'active' : ''}`} href="authentification" onClick={() => this.handleLinkClick('authentification')}><i className="icon ion-log-in"></i><span>Authentification</span></a></li>
                    <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'storage' ? 'active' : ''}`} href="storage" onClick={() => this.handleLinkClick('storage')}><i className="typcn typcn-cloud-storage-outline" ></i><span>Storage</span></a></li>
                    <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'apigene' ? 'active' : ''}`} href="apigene" onClick={() => this.handleLinkClick('apigene')}><i className="far fa-sun"></i><span>Api Generator</span></a></li>
                    <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'extensions' ? 'active' : ''}`} href="extensions" onClick={() => this.handleLinkClick('extensions')}><i className="typcn typcn-puzzle" style={{paddingbottom: '0px',paddingright: '0px'}}></i><span>Extensions</span></a></li>
                    <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'products' ? 'active' : ''}`} href="products" onClick={() => this.handleLinkClick('products')}><i className="material-icons" style={{margintop: '-2px',opacity: '1'}}>menu</i><span style={{paddingright: '0px',paddingtop: '0px',paddingbottom: '0px',paddingleft: '0px'}}><span style={{fontweight: 'normal !important'}}>All Poducts</span><br></br></span></a></li>
                </ul>
                <div className="text-center d-none d-md-inline"></div>
            </div>
        </nav>
        )
    }
}

export default NavLeftDashboard;