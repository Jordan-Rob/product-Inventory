import React, { Component } from 'react'
import axios from 'axios'

class AddProduct extends Component {
    constructor(){
        super()
        this.state = {
            //products:[],
            name:'',
            sku:'',
            price:'',
            available:''
        }
        this.changedProductname = this.changedProductname.bind(this)
        this.changedProductsku = this.changedProductsku.bind(this)
        this.changedProductprice = this.changedProductprice.bind(this)
        this.changedProductavail = this.changedProductavail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    /*
    componentDidMount(){
        axios.get('http://localhost:7000/products')
            .then(response =>{
                if (response.data.length > 0) {
                    this.setState({
                        products:response.data.map(product => product.name),
                        name: response.data[0].name
                    })
                }
            })
    }
    */

    changedProductname(event){
        this.setState({
            name:event.target.value
        })
    }

    changedProductsku(event){
        this.setState({
            sku:event.target.value
        })
    }
    
    changedProductprice(event){
        this.setState({
            price:event.target.value
        })
    }

    changedProductavail(event){
        this.setState({
            available:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const product = {
            name: this.state.name,
            sku: this.state.sku,
            price: this.state.price,
            available: this.state.available
        }
        console.log(product) 
        axios.post('http://localhost:7000/products/add-product', product)
            .then(response => console.log(response.data))
        window.location = '/'
        alert("product added successfully")
    }
    

    render() { 
        return ( 
            <div>
                <div className="skewed"></div>
                <div className='container' style={{  paddingLeft:'300px', marginTop:'160px', marginBottom:'160px' }}>
                    <div className="card shadow " style={{ width:'520px', height:'600px' , borderRadius:'15px' , border:'none'}}>
                    <form onSubmit={this.onSubmit} method="post" style={{ width:'380px', textAlign:'', marginLeft:'70px', paddingTop:'90px'}}>
                        <h3 style={{  paddingBottom:'30px' }}>Add product</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input onChange={ this.changedProductname } value={ this.state.name } type="text" className="form-control" id='name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sku">Sku</label>
                            <input name='photo' onChange={ this.changedProductsku } value={ this.state.sku } type="text" class="form-control" id='sku'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input onChange={ this.changedProductprice } value={ this.state.price } type="text" className="form-control" id='price'/>
                        </div>
                        <div className="form-group form-check">
                            <input onChange={ this.changedProductavail } value={ this.state.available } type="checkbox" class="form-check-input" id="avail"/>
                            <label class="form-check-label" htmlFor="avail">Available</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AddProduct;