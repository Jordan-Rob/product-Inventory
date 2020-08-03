import React, { Component } from 'react';


class Home extends Component {
    render(){
        return(
            <div >
                <div className="skewed"></div>
                <div className="container " style={{ paddingTop:'20px', color:'#D3D3D3' }}>
                    <div className="row">
                        <div className="col">
                            <img style={{ height:'420px' }} src="https://res.cloudinary.com/dbureb5gj/image/upload/v1596497063/xstore/undraw_web_shopping_dd4l_1_d70lno.svg" alt="" srcset=""/>
                        </div>
                        <div className="col col-5" style={{ paddingTop:'110px' }}>
                            <h2>Welcome to Xstore</h2>
                            <p style={{ fontSize:'21px' }}> 
                                Add convinience to the way you manage and 
                                keep track of your items/products by using our
                                easy to use and straight forward digital inventory  
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container text-secondary" style={{ marginTop: "165px"}}>
                    <div className="row">
                        <div className="col">
                            <div className="shadow card " style={{ width:'300px',  height:"350px" ,  border:"none", borderRadius:"15px"}}>
                                <img style={{ height:"90px", width:"90px", marginTop:"30px", marginLeft:"100px",}} src="https://res.cloudinary.com/dbureb5gj/image/upload/v1596464912/xstore/add_fx0em4.png" alt="" className="card-img-top"/>
                                <div class="card-body">
                                    <p style={{ textAlign:'center', width:'220px', paddingLeft:'30px'}} class="card-text"> upload your product details into our platform via our add product form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow card " style={{ width:'300px',  height:"350px" , border:"none", borderRadius:"15px"}}>
                                <img style={{ height:"90px", width:"90px", marginTop:"30px", marginLeft:"100px",}} src="https://res.cloudinary.com/dbureb5gj/image/upload/v1596464904/xstore/office_yubpfi.png" alt="" className="card-img-top"/>
                                <div class="card-body">
                                    <p style={{ textAlign:'center', width:'220px', paddingLeft:'30px'}} class="card-text"> Easily manage and maintain your product inventory with our inbuilt tools accessible through your dashboard.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="shadow card " style={{ width:'300px',  height:"350px" ,  border:"none", borderRadius:"15px"}}>
                                <img style={{ height:"90px", width:"90px", marginTop:"30px", marginLeft:"100px",}} src="https://res.cloudinary.com/dbureb5gj/image/upload/v1596465260/xstore/database_bx2qhp.png" alt="" className="card-img-top"/>
                                <div class="card-body">
                                    <p style={{ textAlign:'center', width:'220px', paddingLeft:'30px'}} class="card-text">Enjoy all round reliablity and availability of our services made possible by our servers 24/7 uptime.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="container-fluid" style={{ textAlign:'center', marginTop:'100px',}}>
                    <p> &#169; Xstore 2020</p>
                </div>
            </div>
        )
    }
}

export default Home;