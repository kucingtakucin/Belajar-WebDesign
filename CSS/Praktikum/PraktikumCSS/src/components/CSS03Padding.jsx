/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/padding.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/03Padding.png';
import {NavLink} from "react-router-dom";

class CSS03Padding extends Component {
    render() {
        return (
            <div className="css03">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Padding</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Padding?</h3>
                            </div>
                            <div className="card-body">
                                Property padding digunakan untuk memberi jarak antara garis pinggir dari elemen atau tag HTML
                                dengan konten/elemen didalam tersebut. Berbeda dengan margin, padding harus
                                menggunakan value positif.
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar} alt="Padding" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <div id="box">Ini adalah Box</div>
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

export default CSS03Padding;
