/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/nav-style.css';
import './css/side-nav-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Aside?</h3>
                            </div>
                            <div className="card-body">
                                Sidebar biasanya digunakan sebagai tempat untuk meletakkan fitur-fitur tertentu
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar} alt="Aside" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body">
                                <img className="img-thumbnail" src={gambar2} alt="Aside" />
                                <img className="img-thumbnail" src={gambar3} alt="Aside" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <aside className="side-nav">
                                    <div className="title">
                                        <NavLink to="#">OneNav</NavLink>
                                    </div>
                                    <ul>
                                        <li><NavLink to="#" className="active">Home</NavLink></li>
                                        <li><NavLink to="#">Portfolio</NavLink></li>
                                        <li><NavLink to="#">About</NavLink></li>
                                        <li><NavLink to="#">Contact</NavLink></li>
                                    </ul>
                                </aside>
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

export default CSS12Aside;
