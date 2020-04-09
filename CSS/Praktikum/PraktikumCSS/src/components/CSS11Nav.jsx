/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/nav-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/11Nav.png';
import gambar2 from './img/11Nav2.png';
import gambar3 from './img/11Nav3.png';
import {NavLink} from "react-router-dom";

class CSS11Nav extends Component {
    render(){
        return (
            <div className="css11">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Nav</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Nav?</h3>
                            </div>
                            <div className="card-body">
                                Nav biasa digunakan sebagai navigasi untuk link-link HTML, biasanya terletak dibagian atas
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar} alt="Nav" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body row">
                                <img className="img-thumbnail" src={gambar2} alt="Nav" />
                                <img className="img-thumbnail" src={gambar3} alt="Nav" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <nav className="navigasi">
                                    <div className="title">
                                        <NavLink to="#">OneNav</NavLink>
                                    </div>
                                    <ul>
                                        <li><NavLink to="#" className="active">Home</NavLink></li>
                                        <li><NavLink to="#">Portfolio</NavLink></li>
                                        <li><NavLink to="#">About</NavLink></li>
                                        <li><NavLink to="#">Contact</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="card-footer border-secondary">
                                <NavLink className="btn btn-lg btn-secondary" to="/">Kembali</NavLink>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default CSS11Nav;
