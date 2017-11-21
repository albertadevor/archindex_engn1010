import React, { Component } from 'react';
import '../css/HomePageContent.css';

/*
 represents the home page content of the site
*/
class HomePageContent extends Component {

    render() {
	    return (
		   <p onClick={() => this.props.changePage("product")}> Hi! </p>
	    );
    }
}

export default HomePageContent;