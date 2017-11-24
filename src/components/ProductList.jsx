import React, { Component } from 'react';
import ProductCard from './ProductCard.jsx';
/*
 This list takes a list of items and 
 renders it in a list of product cards.
*/
class ProductList extends Component {
	renderList() {
	    const items =  this.props.items.map(item => {
            return <ProductCard key={item.name} 
            	name={item.name} price={item.price} 
            	img={item.img} alt={item.alt} type={item.type}
                changePage={this.props.changePage}/>
        });
        return items;
    }

    render() {
	    return (
		    <ol id="filter-list">
			    {this.renderList()}
		    </ol>
	    );
    }
}

export default ProductList;