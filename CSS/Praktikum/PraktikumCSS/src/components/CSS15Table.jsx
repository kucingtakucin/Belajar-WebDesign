/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import '../App.css';
import './css/table-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import gambar from './img/15Table.png';
import gambar2 from './img/15Table2.png';
import gambar3 from './img/15Table3.png';
import {NavLink} from "react-router-dom";

class CSS15Table extends Component {
    render() {
        return (
            <div className="css15">
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Table</h1>
                    </div>
                </header>
                <div className="container">
                    <main>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Pendahuluan</h1>
                                <h3 className="card-subtitle text-center">Apa itu Table?</h3>
                            </div>
                            <div className="card-body">
                                Ini hanya sintaks css untuk menghias suatu tabel
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code HTML</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code HTML nya</h3>
                            </div>
                            <div className="card-body">
                                <img src={gambar} className="img-thumbnail" alt="Table" />
                                <img src={gambar2} className="img-thumbnail" alt="Table" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Source Code CSS</h1>
                                <h3 className="card-subtitle text-center">Ini adalah code CSS nya</h3>
                            </div>
                            <div className="card-body">
                                <img src={gambar3} className="img-thumbnail" alt="Table" />
                            </div>
                        </div>
                        <div className="card mb-3 border-secondary">
                            <div className="card-header text-secondary border-secondary">
                                <h1 className="card-title text-center font-weight-bold">Hasil</h1>
                                <h3 className="card-subtitle text-center">Ini adalah hasilnya</h3>
                            </div>
                            <div className="card-body d-xl-flex justify-content-center">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>A091amassmen</td>
                                        <td>Piper Boni</td>
                                        <td>scopic@matralia.org</td>
                                    </tr>
                                    <tr>
                                        <td>A091ritical</td>
                                        <td>Naticha Nail</td>
                                        <td>bagganet@naifly.com</td>
                                    </tr>
                                    </tbody>
                                </table>
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

export default CSS15Table;
