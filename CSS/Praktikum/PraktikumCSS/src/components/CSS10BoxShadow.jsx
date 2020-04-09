/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/shadow-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/10BoxShadow.png';
import gambar2 from './img/10BoxShadow2.png';
import {NavLink} from "react-router-dom";

class CSS10BoxShadow extends Component {
    render() {
        return (
            <div className="css10">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Box Shadow</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Box-Shadow?</h3>
                            </div>
                            <div className="card-body">
                                Box shadow merupakan property yang memungkinkan untuk membuat sebuah
                                efek bayangan pada sebuah element. Untuk membuatnya harus men-set 4 value.
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar} alt="BoxShadow" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <img className="img-thumbnail" src={gambar2} alt="BoxShadow" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <div className="kartu">
                                    <div className="kartu-content">
                                        <h2 className="kartu-title text-center">Card Title</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus consequatur
                                            cupiditate dicta eaque, illum in labore libero magni modi mollitia nobis,
                                            placeat quae quas quia quod repellendus reprehenderit rerum saepe sint sit,
                                            tempora voluptatibus. Alias atque deserunt dolores harum laborum magnam
                                            perspiciatis quos sequi veritatis vitae. Doloribus, exercitationem repellat?</p>
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

export default CSS10BoxShadow;
