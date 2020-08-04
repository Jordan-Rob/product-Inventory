import React, { Component } from 'react'

class AddProduct extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="skewed"></div>
                <div className='container' style={{  paddingLeft:'300px', marginTop:'160px', marginBottom:'160px' }}>
                    <div className="card shadow " style={{ width:'520px', height:'600px' , borderRadius:'15px' , border:'none'}}>
                    <form action="" method="post" style={{ width:'380px', textAlign:'center', marginLeft:'70px', paddingTop:'90px'}}>
                        <h3 style={{  paddingBottom:'30px' }}>Add product</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id='name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id='name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id='name'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id='name'/>
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