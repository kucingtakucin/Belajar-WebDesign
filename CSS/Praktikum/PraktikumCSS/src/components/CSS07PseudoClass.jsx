/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/pseudoclass.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/07PseudoClass.png';
import gambar2 from './img/07PseudoClass2.png';
import {NavLink} from "react-router-dom";

class CSS07PseudoClass extends Component {
    render() {
        return (
            <div className="css07">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Pseudo Class</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu PseudoClass?</h3>
                            </div>
                            <div className="card-body">
                                Property ini digunakan untuk mendefinisikan status khusus pada elemen anchor/link.
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar} alt="PseudoClass" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar2} alt="PseudoClass" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <div className="links">
                                    <ul>
                                        <li><NavLink to="#">a:link</NavLink></li>
                                        <li><NavLink to="#">a:hover</NavLink></li>
                                        <li><NavLink to="#">a:active</NavLink></li>
                                        <li><NavLink to="#">a:visited</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-footer border-secondary">
                                <NavLink className="btn btn-lg btn-secondary" to="/">Kembali</NavLink>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default CSS07PseudoClass;
