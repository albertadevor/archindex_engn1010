import React, { Component } from 'react';
import '../css/Header.css';
import logo from '../img/archindexlogo.png';
import search from './grey-search.png';
/*
 This list takes a list of items and renders this list in an ordered list format
*/
class Header extends Component {
	constructor(props) {
       super(props);
       this.state = {
       		title: "Default title",
           	background: "#272c43", //Default background color is pink
           	headerOptions: [], //Default header options are empty
       };
       
   }

   onSearch() {
    //filler method - no planned functionality
   }

	/* 
		When Component mounts we update the 
		states of the customized attributes
	*/
	componentDidMount() {
		this.saveCustomizedHeaderDefaults(this.props);
	}


   /*
   	This is its own method so that the default states can be used
   	(and the app doesn't crash) if we don't pass in any customized 
   	props for title, header options, etc. while still allowing
   	for customization.
   */
   saveCustomizedHeaderDefaults(props) {
   		if(props.title) {
   			this.setState({title: props.title});
   		}
   		if(props.headerOptions) {
   			this.setState({headerOptions: props.headerOptions});
   		}
   		if(props.background) {
   			this.setState({background: props.background});
   		}
   }

   renderTopPortion() {
   	return (
   		<div id="top-nav" className="flex-container">
            <div id="title-box" onClick={() => this.props.changePage("home")}>
			     
                 <img id="logo" src={logo} />
                 <h1> {this.props.title} </h1>
            </div>
            <div className="search-div">
                <input type="text" name="search" placeholder="Search" id="search-bar" 
                    ref={el => this.searchInput = el} onChange={this.onSearch}/>
                <img src={search} id="submit-search" alt="search button" />
            </div>
		</div>)
   }

   renderHeaderOptions() {

   		return this.state.headerOptions.map(item => {

   			if (item === this.state.headerOptions[this.state.headerOptions.length -1]){
   				//if last item don't return the last break
   				return (
			    	<span className = "headerOptSpan" key={item}>
			    		<p className="headerOptTxt">{item}</p>
			    	</span>
			    )
   			}
		    return (
		    	<span className = "headerOptSpan" key={item}>
		    		<p className="headerOptTxt">{item}</p>
		    		<p className = "headerOptTxt"> | </p>
		    	</span>
		    )
	    });
   }

   renderBottomPortion() {
   		return(
   			<div id="bottom-nav" className ="flex-container">
				<div id="header-options">
					{this.renderHeaderOptions()}
				</div>
								
				<p id = "login-signup" className= "flex-container flex-right-item">
				 Login | Sign Up 
				</p>
			</div>
   		)
   }

    render() {
	    return (
		   <header style={{backgroundColor: this.state.background}}>
				{this.renderTopPortion()}
				{this.renderBottomPortion()}
			</header>
	    );
    }
}

export default Header;