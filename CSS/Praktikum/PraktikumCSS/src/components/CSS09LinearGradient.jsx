/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/gradient.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/09LinearGradient.png';
import gambar2 from './img/09LinearGradient2.png';
import {NavLink} from "react-router-dom";

class CSS09LinearGradient extends Component {
    render() {
        return (
            <div className="css09">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Linear Gradient</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Linear-Gradient?</h3>
                            </div>
                            <div className="card-body">
                                Merupakan property untuk memberi background dengan warna gradient atau bergradasi.
                                Dalam hal ini, terdapat 2 jenis gradient yaitu : linear dan radial.
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar} alt="LinearGradient" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar2} alt="LinearGradient" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <div className="tombol">
                                    <button className="btn btn-lg btn-primary">Ini adalah button 1</button>
                                    <button className="button ">Ini adalah button 2</button>
                                </div>
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

export default CSS09LinearGradient;
