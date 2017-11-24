import React, { Component } from 'react';
import Header from './components/Header.jsx'
import SortedFilteredProductListing from './components/SortedFilteredProductListing.jsx';
import HomePageContent from './components/HomePageContent.jsx';
import ProductPage from './components/ProductPage.jsx';
import './css/App.css';

class App extends Component {
	constructor() {
		super();
       	this.state = {
       		currentPage: "home",
       		currProductName: "",
       		currProductImage: "",
       		currProductAlt: "",
       		products: [
			{name: "Pink Marble", 
				img: require('./img/pink_marble.jpg'),
				alt: "Pink Marble", 
				price: 4.69,
				type: "Stone",
				recommended: true},
			{name: "Red Granite", 
				img: require('./img/red_granite.JPG'), 
				alt: "Red Granite", 
				price: 8.73,
				type: "Stone",
				recommended: false},
			{name: "Sandstone", 
				img: require('./img/sandstone.jpg'), 
				alt: "Standstone", 
				price: 9.77,
				type: "Stone",
				recommended: false},
			{name: "Black Marble", 
				img: require('./img/black_marble.jpg'), 
				alt: "Black Marble", 
				price: 9.66,
				type: "Stone",
				recommended: false},
			{name: "Cherry Wood", 
				img: require('./img/cherry_wood.jpeg'), 
				alt: "Cherry Wood", 
				price: 14.88,
				type: "Wood",
				recommended: true},
			{name: "Dark Walnut Wood", 
				img: require('./img/dark_walnut_wood.jpg'), 
				alt: "Dark Walnut Wood", 
				price: 12.79,
				type: "Wood",
				recommended: true},
			{name: "Dossie Wood", 
				img: require('./img/dossie_wood.gif'), 
				alt: "Dossie Wood", 
				price: 1.99,
				type: "Wood",
				recommended: false},
			{name: "Grey Granite", 
				img: require('./img/grey_granite.jpeg'), 
				alt: "Grey Granite", 
				price: 9.72,
				type: "Stone",
				recommended: true},
			{name: "Light Wood", 
				img: require('./img/light_wood.jpeg'), 
				alt: "Light Wood", 
				price: 2.23,
				type: "Wood",
				recommended: false},
			{name: "Limestone", 
				img: require('./img/limestone.jpg'), 
				alt: "Limestone", 
				price: 14.79,
				type: "Stone",
				recommended: true},
			{name: "White Marble", 
				img: require('./img/marble.jpg'), 
				alt: "White Marble", 
				price: 20.98,
				type: "Stone",
				recommended: false},
			{name: "Storm Gold Granite", 
				img: require('./img/storm_gold_granite.jpg'), 
				alt: "Storm Gold Granite", 
				price: 10.73,
				type: "Stone",
				recommended: true}]
       	};

       	this.changePage = this.changePage.bind(this);
	}

	changePage(pageName, optName, optImg, optAlt) {
		optName = optName || "";
	  	optImg = optImg || "";
		optAlt = optAlt || "";
		this.setState({currentPage: pageName});

		if(pageName==="specific-product") {
			this.setState({currProductName: optName});
			this.setState({currProductImg: optImg});
			this.setState({currProductAlt: optAlt});
		}
	}

	mainContent() {
		console.log(this.state.currentPage);
		if(this.state.currentPage == "product") {
			return(<SortedFilteredProductListing items={this.state.products} 
				changePage={this.changePage}/>)
		}
		if(this.state.currentPage == "specific-product") {
			return(<ProductPage name={this.state.currProductName} 
				img={this.state.currProductImg}
				alt={this.state.currProductAlt}
				changePage={this.changePage}/>)
		}

		return(<HomePageContent changePage={this.changePage} />)
	}

	render() {
		const arcIndexHeaderOptions = ["Featured", "Sell With Us", "Sale", "My Cart"];
		

		return (
			<div className="App">
				<Header title="ArchIndex" headerOptions={arcIndexHeaderOptions}
				changePage={this.changePage} />
				{this.mainContent()}
			</div>
		);
	}
}

export default App;
