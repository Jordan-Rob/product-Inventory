import React, { Component } from 'react';
class Product extends Component {
    render() { 
        return ( 
            <div>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <td>{this.props.product.name}</td>
                            <td>{this.props.product.sku}</td>
                            <td>{this.props.product.price}</td>
                            <td>{this.props.product.available}</td>
                        </tr>
                    </thead>
                </table>
                <td>
                        <a href="#"  className='btn btn-info' onClick={() => {
                        this.props.deleteProduct(this.props.product._id)
                    } }>Delete</a> 
                </td>
            </div>
         );
    }
}
export default Product;