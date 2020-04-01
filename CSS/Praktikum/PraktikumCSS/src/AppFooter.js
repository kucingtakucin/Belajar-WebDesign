/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from 'react';
import './App.css';
import './dist/css/bootstrap.min.css';

class AppFooter extends Component {
    render() {
        return (
            <div className="App-footer bg-dark fixed-bottom">
                <h5 className="font-weight-bold text-center">Copyright &copy; 2020 Adam Arthur Faizal. All Rights Reserved</h5>
            </div>
        );
    }
}

export default AppFooter;