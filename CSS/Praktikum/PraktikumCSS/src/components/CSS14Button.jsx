/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/button-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/14Button.png';
import gambar2 from './img/14Button2.png';
import {NavLink} from "react-router-dom";
import gambar3 from "./img/13Card3.png";
import gambar4 from "./img/13Card4.png";
import laravel from "./img/laravel-image.png";

class CSS14Button extends Component {
    render() {
        return (
            <div className="css14">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Button</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Button?</h3>
                            </div>
                            <div className="card-body">
                                Biasanya suatu link akan dihias menjadi button agar user interface nya menarik
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body">
                                <img className="img-thumbnail" src={gambar} alt="Button" />
                                <img className="img-thumbnail" src={gambar2} alt="Button" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body">
                                <img className="img-thumbnail" src={gambar3} alt="Button" />
                                <img className="img-thumbnail" src={gambar4} alt="Button" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <div className="tombol">
                                    <button className="button rounded-button">Rounded Button</button>
                                    <button className="button flat-button">Flat Button</button>
                                    <button className="btn btn-lg btn-primary">Bootstrap Button</button>
                                    <button className="btn btn-lg btn-secondary">Bootstrap Button</button>
                                    <button className="btn btn-lg btn-success">Bootstrap Button</button>
                                    <button className="btn btn-lg btn-warning">Bootstrap Button</button>
                                    <button className="btn btn-lg btn-info">Bootstrap Button</button>
                                    <button className="btn btn-lg btn-danger">Bootstrap Button</button>
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

export default CSS14Button;
