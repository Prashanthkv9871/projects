import React, { Component } from 'react'

class Product extends Component {
    state={
        product_Name:"Laptop",
        Image:"https://rukminim1.flixcart.com/image/416/416/kbqu4cw0/computer/q/x/r/hp-original-imaftyzachgrav8f.jpeg?q=70",
        Qty:1,
        price:25000 
    };
    incrHandler =()=>{
        this.setState({Qty : this.state.Qty + 1});
    };

    decrHandler =()=>{
        this.setState({Qty : this.state.Qty - 1});
    };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td><img src={this.state.Image} alt="" height="50px"/></td>
                                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.Qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                    <td>{this.state.price}</td>
                                    <td>{this.state.price * this.state.Qty}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
