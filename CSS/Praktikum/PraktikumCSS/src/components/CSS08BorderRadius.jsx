/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/memo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/08BorderRadius.png';
import gambar2 from './img/08BorderRadius2.png';
import {NavLink} from "react-router-dom";

class CSS08BorderRadius extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kiri: 'Kiri',
            kanan: 'Kanan',
        }
    }

    render() {
        return (
            <div className="css08">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Border Radius</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Border-Radius?</h3>
                            </div>
                            <div className="card-body">
                                Property ini digunakan untuk membuat sudut-sudut dari elemen menjadi melengkung, format
                                penulisan property ini sama seperti margin maupun padding.
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar} alt="Border Radius" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar2} alt="Border Radius" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <div className="container clearfix">
                                    <div className="circle">
                                        <p>
                                            {this.state.kiri}
                                        </p>
                                    </div>
                                    <div className="circle"><p>1</p></div>
                                    <div className="circle"><p>2</p></div>
                                    <div className="circle"><p>3</p></div>
                                    <div className="circle"><p>4</p></div>
                                    <div className="circle"><p>5</p></div>
                                    <div className="circle">
                                        <p>
                                            {this.state.kanan}
                                        </p>
                                    </div>
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

export default CSS08BorderRadius;
