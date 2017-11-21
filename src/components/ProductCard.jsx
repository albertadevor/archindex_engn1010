import React, { Component } from 'react';
/*
 This component represents a product card that includes a title, price, and image.
*/
class ProductCard extends Component {

    render() {
	    return (
		    <div className="card" key={this.props.name}>
		    	<img src = {this.props.img} alt = {this.props.alt}/>
		    	<h2>{this.props.name}</h2>
		    	<div className="card-bottom">
					<h3>${this.props.price}</h3>
					<h3>{this.props.type}</h3>
		    	</div>
		    </div>
	    );
    }
}

export default ProductCard;