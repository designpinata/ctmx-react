import React, {Component} from 'react';
import ctmxBrand from './assets/images/brand/brand--black.png';

class CTMX extends Component {
    render () {
        return(
            <section className="loader">
                {/* <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <p className="t-body">Lorem Ipsum Dolor</p>
                <p className="t-button">Button / Input</p>
                <p className="t-caption">Button / Small</p>
                <p className="t-footnote">Button / Small</p> */}
                <img src={ctmxBrand} alt="Circuito MX" />
            </section>
        )
    }
}

export default CTMX;