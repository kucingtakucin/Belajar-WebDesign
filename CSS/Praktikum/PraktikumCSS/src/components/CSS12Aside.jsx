/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/side-nav-style.css';
import './dist/css/bootstrap.min.css';
import gambar from './img/12Aside.png';
import gambar2 from './img/12Aside2.png';
import gambar3 from './img/12Aside3.png';
import {NavLink} from "react-router-dom";

class CSS12Aside extends Component {
    render() {
        return (
            <div className="css12">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Aside</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <aside className="side-nav">
                            <div className="title">
                                <a href="#">OneNav</a>
                            </div>
                            <ul>
                                <li><a href="#" className="active">Home</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </aside>
                        <img className="img-thumbnail" src={gambar} alt="Aside" />
                        <img className="img-thumbnail" src={gambar2} alt="Aside" />
                        <img className="img-thumbnail" src={gambar3} alt="Aside" />
                    </main>
                    <footer>
                        <NavLink to="/" className="btn btn-lg btn-secondary">Kembali</NavLink>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CSS12Aside;