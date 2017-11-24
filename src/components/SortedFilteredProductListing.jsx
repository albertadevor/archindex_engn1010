import React, { Component } from 'react';
import { Button, ToggleButton, ToggleButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import ProductList from './ProductList';
import search from './grey-search.png';

/*
  Listing of products that can be filtered and sorted. 
  Works with any product that has a type and price.
*/
class SortedFilteredProductListing extends Component {
   constructor(props) {
       super(props);
       this.state = {
           search: "",
           materialTypeSelected: "All",
           recType: "All",
           sort: "Default", //indicates default
       };
   }

   /*
      Sets state of search when user starts typing in search bar
   */
   onSearch = (event) => {
         this.setState({search: event.target.value.toLowerCase()});
   }

   filterItem = (item) => {
       // Checks if the current search term is contained in this item
       let isInFilter = item.name.toLowerCase().search(this.state.search) !== -1;

        if(isInFilter && this.state.materialTypeSelected !== "All") {
            isInFilter = item.type === this.state.materialTypeSelected;
        }
        if(isInFilter && this.state.recType !== "All") {
            isInFilter = item.recommended;
       }
        
       return isInFilter;
   }

   handleMaterialChange = (val) => {
        this.setState({materialTypeSelected: val});
   }

   handleRecTypeChange = (val) => {
        this.setState({recType: val});
   }

   clear = () => {
        this.setState({recType: "All"});
        this.setState({materialTypeSelected: "All"});
        this.setState({search: ""});
        this.searchInput.value = "";

   }

   changeSort = (val) => {
        this.setState({sort: val});
   }

   filterAndSortProducts() {
        let filteredProductList = this.props.items.filter(this.filterItem);
            if(this.state.sort === "Price: Low to High") {
                filteredProductList = filteredProductList.sort((a,b) =>
                    a.price - b.price)
            }
            if(this.state.sort === "Price: High to Low") {
                filteredProductList = filteredProductList.sort((a,b) =>
                    b.price - a.price)
            }
        return filteredProductList
   }

   render() {
        return (
           <div id="mainDisplay">
                <div id = "sortBar">
                <h4> Featured Items </h4>
                <div id="sort-by">
                    <p> Sort by ...</p>
                    <DropdownButton onSelect={this.changeSort} title={this.state.sort} id="bg-vertical-dropdown-1"> 
                        <MenuItem eventKey="Price: Low to High">Price: Low to High</MenuItem>
                        <MenuItem eventKey="Price: High to Low">Price: High to Low</MenuItem>
                        <MenuItem eventKey="Default">Default</MenuItem>
                    </DropdownButton>
                </div>
                </div>
                <div id = "filterBar">
                    <h4>Filter by ... </h4>
                    <div id ="filter-container" className="search-div">
                        <input type="text" name="search" placeholder="Search" id="search-bar" 
                            ref={el => this.searchInput = el} onChange={this.onSearch}/>
                        <img src={search} id="submit-search" alt="search button" />
                    </div>

                    <p> Material Type </p>
                    <div id ="filter-container">
                        
                        <ToggleButtonGroup 
                            name="materialType"
                              onChange={this.handleMaterialChange} 
                              value={this.state.materialTypeSelected}>
                              <ToggleButton value="All">All</ToggleButton>
                              <ToggleButton value="Stone">Stone</ToggleButton>
                              <ToggleButton value="Wood">Wood</ToggleButton>
                        </ToggleButtonGroup>
                        
                    </div>

                    <p> Recomendation </p>
                    <div id ="filter-container">

                        <ToggleButtonGroup 
                            name="recType"
                              onChange={this.handleRecTypeChange} 
                              value={this.state.recType}>
                              <ToggleButton value="All">All</ToggleButton>
                              <ToggleButton value="Recommended">Recommended Only</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                        <div id="filter-container">
                            <Button onClick={this.clear}>
                                Clear
                            </Button>
                    </div>
                    
                </div>
                {/*
                  Here we are taking the items property (which is the list of
                  produce), filtering the content to match the search word, then
                  passing the filtered produce into the List component.
                */}
               <ProductList items={this.filterAndSortProducts()} changePage={this.props.changePage}/>
           </div>
        );
   }
}


export default SortedFilteredProductListing;