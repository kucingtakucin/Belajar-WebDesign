/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/card-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/13Card.png';
import gambar2 from './img/13Card2.png';
import gambar3 from './img/13Card3.png';
import gambar4 from './img/13Card4.png';
import laravel from './img/laravel-image.png';
import {NavLink} from "react-router-dom";

class CSS13Card extends Component {
    render() {
        return (
            <div className="css13">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Card</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Card?</h3>
                            </div>
                            <div className="card-body">
                                Card adalah tempat untuk menampung suatu informasi, atau link untuk menuju ke halaman lainnya
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body">
                                <img className="img-thumbnail" src={gambar} alt="Card" />
                                <img className="img-thumbnail" src={gambar2} alt="Card" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body">
                                <img className="img-thumbnail" src={gambar3} alt="Card" />
                                <img className="img-thumbnail" src={gambar4} alt="Card" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <div className="kartu">
                                    <div className="kartu-image">
                                        <img className="img-thumbnail" src={laravel} alt="Laravel" />
                                    </div>
                                    <div className="kartu-content">
                                        <h1 className="kartu-title text-center">Membuat Card</h1>
                                        <h3 className="card-subtitle text-center">Membuat Card</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, aut
                                            beatae dolorem dolores dolorum error fugiat itaque, nemo nesciunt nihil
                                            obcaecati optio pariatur quibusdam quisquam repellat sint, veniam! Delectus ea
                                            maiores repellat velit. At aut consequatur dignissimos, doloremque dolores, eos,
                                            excepturi illo iure nihil obcaecati perspiciatis soluta temporibus vero.
                                        </p>
                                    </div>
                                    <div className="kartu-action">
                                        <NavLink to="#" className="btn btn-lg btn-success float-left clearfix">BUKA</NavLink>
                                        <NavLink to="#" className="btn btn-lg btn-danger float-right clearfix">HAPUS</NavLink>
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

export default CSS13Card;
