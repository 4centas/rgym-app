import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SidenavMobile from './sidenav-mobile';

export class HeaderMobile extends Component {
    state = {
        active: false
    }

    openSidenav = () => {
        this.setState({
            active: !this.state.active
        })
    }

    getClass() {
        return this.state.active
            ? "open"
            : "closed";
    }

    render() {
        return ([
            <div id="header-mobile">
                <Link to={'/programs'} id="header-mobile-logo">RGYM</Link>
                <div id="nav-icon3" className={this.getClass()} onClick={this.openSidenav}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>,
            <SidenavMobile active={this.state.active}/>
        ])
    }
}

export default HeaderMobile;