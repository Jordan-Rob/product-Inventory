import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'


class Products extends Component {
    constructor(){
        super()
        this.state = {
            products:[]
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:7000/products/')
            .then(response =>{
                this.setState({
                    products:response.data
                })
            })
    }
    deleteProduct(id){
        axios.delete('http://localhost:7000/products/'+ id)
            .then(response => console.log(response.data))
        this.setState({
            products:this.state.products.filter(pdtodel => pdtodel._id !== id)
        })
    }
    productStack(){
        return this.state.products.map(singledOutProduct =>{
            return <Product  product={singledOutProduct} deleteProduct={this.deleteProduct} key={singledOutProduct._id} />
        })
    }

    render(){
        return(
        
            <div>
                <div className="notskewed"></div>
                <div>
                    <table className='table'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>Product name</th>
                                <th>Product image</th>
                                <th>Product price</th>
                                <th>Product availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.productStack()}
                        </tbody>
                    </table>
                    </div>
                        
            </div>
        )
    }
}

export default Products