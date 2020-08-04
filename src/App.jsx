import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
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
                    <Route path='/' exact component={Home} />
                    <Route path='/products' exact component={Products} />
                    <Route path='/add-product' exact component={CreateProduct} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;