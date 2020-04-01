/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

import React, {Component} from "react";
import './App.css';
import './dist/css/bootstrap.min.css';

class AppMain extends Component {
    render() {
        return (
            <div className="App-main">
                <div className="d-xl-flex justify-content-around">
                    <section className="alert alert-secondary">
                        <ul>
                            <li><a href="DaftarIsi/01WidthHeight.html" target="_blank">1. Width & Height</a></li>
                            <li><a href="DaftarIsi/02Margin.html" target="_blank">2. Margin</a></li>
                            <li><a href="DaftarIsi/03Padding.html" target="_blank">3. Padding</a></li>
                            <li><a href="DaftarIsi/04Border.html" target="_blank">4. Border</a></li>
                            <li><a href="DaftarIsi/05FormatTextdanFont.html" target="_blank">5. Format Text & Font</a></li>
                        </ul>
                    </section>
                    <section className="alert alert-secondary">
                        <ul>
                            <li><a href="DaftarIsi/06Background.html" target="_blank">6. Background</a></li>
                            <li><a href="DaftarIsi/07PseudoClass.html" target="_blank">7. Pseudo-Class</a></li>
                            <li><a href="DaftarIsi/08BorderRadius.html" target="_blank">8. Border-Radius</a></li>
                            <li><a href="DaftarIsi/09LinearGradient.html" target="_blank">9. Linear-Gradient</a></li>
                            <li><a href="DaftarIsi/10BoxShadow.html" target="_blank">10. Box Shadow</a></li>
                        </ul>
                    </section>
                    <section className="alert alert-secondary">
                        <ul>
                            <li><a href="DaftarIsi/11Nav.html" target="_blank">11. Nav</a></li>
                            <li><a href="DaftarIsi/12Aside.html" target="_blank">12. Aside</a></li>
                            <li><a href="DaftarIsi/13Card.html" target="_blank">13. Card</a></li>
                            <li><a href="DaftarIsi/14Button.html" target="_blank">14. Button</a></li>
                            <li><a href="DaftarIsi/15Table.html" target="_blank">15. Table</a></li>
                        </ul>
                    </section>
                </div>
                <section>
                    <h5 id="react-version" className="text-center text-light">React version : {React.version}</h5>
                </section>
            </div>
        );
    }
}

export default AppMain;