import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class MenuStudio extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className="menu"><a href={process.env.PUBLIC_URL + '/'}>Μουσικός Σύλλογος</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/studio'}>Studio</a></li>
                    {/* <li className="menu-hasdropdown"><a>Studio</a>
                        <ul className="menu-dropdown">
                            <li><a href={process.env.PUBLIC_URL + '/studio'}>Το Studio Μας</a></li>
                            <li><a href={process.env.PUBLIC_URL + '/equipment'}>Εξοπλισμός</a></li>
                        </ul>
                    </li> */}
                    <li className="menu"><a href={process.env.PUBLIC_URL + '/productions'}>Παραγωγές</a></li>
                    <li className="menu"><a href={process.env.PUBLIC_URL + '/galleryStudio'}>Gallery</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/project_style1'}>Projects</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/cooperation'}>Συνεργασίες</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/Contact_02'}>Επικοινωνία</a></li>
                </ul>
            </nav>
    
            )
    }
}