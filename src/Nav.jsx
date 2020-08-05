import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Nav extends Component {
    render(){
        return (
            <div>
                <nav  className="navbar navbar-expand-lg navbar-light p-3 mb-5 bg-#2c3e50 rounded" >
                    <div className="container" >
                        <Link to='/' className="navbar-brand" href="#" style={{ color:"#00B0FF", fontWeight:'bold' }}>Xstore</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft:"750px" }} >
                            <ul className="navbar-nav" style={{  }}>
                                <li className="nav-item active" >
                                    <Link to='/' className="nav-link" href="#" style={{ color:"#D3D3D3" }}>Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/add-product' className="nav-link" href="#" style={{ color:"#D3D3D3" }}>Add-product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/products' className="nav-link" href="#" style={{ color:"#D3D3D3" }}>Your-Products</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav