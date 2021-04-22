import React, { Component } from 'react'
import { MenuStudio } from './menuStudio';
import Mobilemenu from './Mobile_menu';

export class HeaderStudio extends Component {
    state = {
        show: false,
      }    
    toggle = () => this.setState((currentState) => ({ show: !currentState.show}));
    render() {        
        return (
                <header id="masthead" className="header ttm-header-style-01">
                {/* ttm-topbar-wrapper */}
                <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                    <div className="container-xl">
                        <div className="row">
                                <div className="col-lg-5">
                                    <ul className="top-contact text-left">
                                        <li><i className="far fa-envelope" />&nbsp;&nbsp;< a to="mailto:wdstudioproductionsfive@gmail.com">wdstudioproductionsfive@gmail.com</ a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-7">
                                    <div className="topbar-right text-right d-flex justify-content-end">
                                        <div className="ttm-social-links-wrapper list-inline">
                                            <ul className="social-icons">
                                                <li>
                                                    <a className=" tooltip-bottom" data-tooltip="Facebook" href="https://www.facebook.com/westdreamstudio" target="_blank">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li><a className=" tooltip-bottom" data-tooltip="Youtube" href="https://www.youtube.com/channel/UC1nM6ihbemRE0GCcsQbqQSQ" target="_blank">
                                                        <i className="fab fa-youtube" />
                                                    </ a>
                                                </li>
                                                <li>
                                                    <a className=" tooltip-bottom" data-tooltip="Instagram" href="https://www.instagram.com/westdreamstudio" target="_blank">
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                {/* ttm-topbar-wrapper end */}
                {/* ttm-header-wrap */}
                <div className="ttm-header-wrap">
                <div id="navbar" className="ttm-stickable-header clearfix">
                    <div className="site-header-menu">
                        <div className="container-xl">
                            {/* site-branding */}
                            <div className="site-branding">
                            <a className="home-link" href={process.env.PUBLIC_URL + '/'} title="WDS Productions 5 " rel="home">
                                <img id="logo-img" className="img-fluid" alt="logo" src="images/wds_logo.jpg" />
                            </a>
                            </div>
                            {/* site-branding end*/}
                            {/*site-navigation */}
                            <div className="site-navigation">
                                <div className="ttm-right-header">
                                    <ul className="ttm-header-icons">
                                        <li className="ttm-header-search-link ttm-bgcolor-skincolor ttm-textcolor-white">
                                        <a onClick={this.toggle}> {this.state.show ? <i className="ti-close" /> : <i className="ti-search" />}</a>
                                        {this.state.show && <div className="ttm-search-overlay">
                                            <form className="ttm-site-searchform">
                                                <div className="w-search-form-h">
                                                    <div className="w-search-form-row">
                                                        <div className="w-search-input">
                                                            <input type="search" className="field searchform-s" name="s" placeholder="Type Word Then Enter..." />
                                                            <button type="submit">
                                                                <i className="ti ti-search" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>}
                                        </li>
                                    </ul>
                                </div>
                                <MenuStudio />
                                <div className="mobilemenu"><Mobilemenu/></div>
                            </div>
                            {/*site-navigation end*/}
                        </div>
                    </div>
                </div>
                </div>
                {/* ttm-header-wrap end*/}
            </header>               
        )
    }
}

export default HeaderStudio;