import React, { Component } from "react";

class Nav extends Component {
    render(){
        return (
            <div>
                <nav  className="navbar navbar-expand-lg navbar-light p-3 mb-5 bg-#2c3e50 rounded" >
                    <div className="container" >
                        <a className="navbar-brand" href="#" style={{ color:"#00B0FF", fontWeight:'bold' }}>Xstore</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft:"800px" }} >
                            <ul className="navbar-nav" style={{  }}>
                                <li class="nav-item active" >
                                    <a class="nav-link" href="#" style={{ color:"#D3D3D3" }}>Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={{ color:"#D3D3D3" }}>Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={{ color:"#D3D3D3" }}>Pricing</a>
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