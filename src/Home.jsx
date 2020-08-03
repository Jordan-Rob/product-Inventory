import React, { Component } from 'react';

/*
class Home extends Component {
    render(){
        return(
            <div>
                <div className="continer">
                    <div className="row">
                        <div className="col">
                            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="..." class="d-block w-100" alt="...">
                                    </div>
                                    <div className="carousel-item">
                                        <img src="..." class="d-block w-100" alt="...">
                                    </div>
                                    <div className="carousel-item">
                                        <img src="..." class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
*/

class Home extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div id="carouselExampleFade"  className="carousel slide carousel-fade" data-ride="carousel" >
                                <div className="carousel-inner">
                                    <div className="carousel-item">
                                        <img src="https://res.cloudinary.com/dbureb5gj/image/upload/v1596452345/xstore/dose-media-r6WkZ0gcDa0-unsplash-removebg-preview_jyh5en.png" className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://res.cloudinary.com/dbureb5gj/image/upload/v1596452371/xstore/aram-sabah-jAPFrA9YJsQ-unsplash-removebg-preview_u5jag6.png" className="d-block w-100" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://res.cloudinary.com/dbureb5gj/image/upload/v1596452356/xstore/norbert-levajsics-dUx0gwLbhzs-unsplash-removebg-preview_z7ugmx.png" className="d-block w-100" alt="" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h3>Welcome Xstore</h3>
                            <p> 
                                Add convinience to the way you manage and 
                                keep trcak of your items/products by using our
                                easy to use and straight forward digital inventory  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}    

export default Home