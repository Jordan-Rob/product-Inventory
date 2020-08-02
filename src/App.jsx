import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom'
import Products from './Products'
import Product from './Product'
import CreateProduct from './CreateProduct'
import Home from './Home'
import Nav from './Nav'


class App extends Component {
    render() { 
        return ( 
            <BrowserRouter>
                <Nav />
                <div className='container'>
                    <Route path='/product' component={Product} />
                    <Route path='/products' component ={Products} />
                    <Route path='/create-product' component={CreateProduct} />
                    <Route path='/' exact component={Home} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;