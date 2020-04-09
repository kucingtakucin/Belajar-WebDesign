/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/format-text.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/05FormatTextdanFont.png';
import gambar2 from './img/05FormatTextdanFont2.png';
import {NavLink} from "react-router-dom";

class CSS05FormatTextdanFont extends Component {
    render() {
        return (
            <div className="css05">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Format Text & Font</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Text & Font?</h3>
                            </div>
                            <div className="card-body">
                                Property ini digunakan untuk melakukan format pada text dan font
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar} alt="FormatText & Font"/>
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar2} alt="FormatText & Font"/>
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <div className="text-styling">
                                    <h2>Sebuah Judul</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, molestiae sequi? Dicta
                                        dolore incidunt laborum maiores provident. Adipisci, consequuntur cum doloribus ex fuga
                                        illum incidunt laborum nesciunt quis sint. Animi, cum dignissimos ea minus natus,
                                        necessitatibus nemo nisi, placeat praesentium quidem reprehenderit tempora ut veritatis
                                        voluptate voluptatibus. Accusamus accusantium alias aliquam amet corporis culpa cumque
                                        delectus earum eius et exercitationem hic illum inventore, iste laborum mollitia nulla
                                        numquam quasi quidem repellendus, sit suscipit tempore ut, veniam vitae voluptas
                                        voluptatem. Ad aliquid aspernatur, commodi, cum cumque eveniet facere facilis maiores
                                        neque optio placeat porro quisquam quo tempore vel. Ad, aspernatur id?</p>
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

export default CSS05FormatTextdanFont;
