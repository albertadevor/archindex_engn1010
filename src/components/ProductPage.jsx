import React, { Component } from 'react';
import '../css/ProductPage.css';
import suppliers from '../img/order_page.png';
import {Button} from 'react-bootstrap';
/*
 This component represents a product card that includes a title, price, and image.
*/
class ProductPage extends Component {

    render() {
	    return (

	    	
		    <div className="product-page" key={this.props.name}>
		    <Button id="back" onClick={() => 
		    	this.props.changePage("product")}>← Back</Button>
		    	<h2>{this.props.name}</h2>
		    	<img className ="material" src = {this.props.img} alt = {this.props.alt}/>

		    	<h3> Description: </h3>
		    	<p> The common {this.props.name} and its allies, are important for their attractive timber,
which is hard, dense, tight-grained and polishes to a very smooth finish. The colour ranges from creamy white
in the sapwood to a dark chocolate colour in the heartwood. When kiln-dried, {this.props.name} tends toward a dull
brown colour, but when air-dried can become a rich purplish-brown. Because of its colour, hardness and grain,
it is a prized furniture and carving wood.</p>

			<img src={suppliers} className="suppliers"/>
		    </div>
	    );
    }
}

export default ProductPage;