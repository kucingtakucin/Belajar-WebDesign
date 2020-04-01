/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from "react";
import './App.css'
import './dist/css/bootstrap.min.css';

class AppNav extends Component {
    render() {
        return (
            <div className="App-nav navbar navbar-dark bg-secondary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand font-weight-bold">
                        Adam Arthur Faizal
                    </a>
                    <a className="navbar-brand font-weight-bold">
                        React version : {React.version}
                    </a>
                </div>
            </div>
        );
    }
}

export default AppNav;