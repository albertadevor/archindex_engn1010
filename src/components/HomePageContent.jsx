import React, { Component } from 'react';
import '../css/HomePageContent.css';
import { Carousel } from 'react-bootstrap';

/*
 represents the home page content of the site
*/
class HomePageContent extends Component {

    render() {
	    return (
		   <div id="homePageContent">
                <h2> Welcome to ArchIndex, </h2>
                <Carousel id="headerCaro" 
                    nextIcon="" prevIcon="" indicators={false} interval={2000}
                    controls={false}> 

                    <Carousel.Item>
                        <h2 className="blueTitle"> Maker </h2>
                    </Carousel.Item>

                    <Carousel.Item>
                        <h2 className="redTitle"> Dreamer </h2>
                    </Carousel.Item>

                    <Carousel.Item>
                        <h2 className="purpleTitle"> Crafter </h2>
                    </Carousel.Item>

                    <Carousel.Item>
                        <h2 className="blueTitle"> Designer </h2>
                    </Carousel.Item>

                    <Carousel.Item>
                        <h2 className="redTitle"> Creator </h2>
                    </Carousel.Item>

                    <Carousel.Item>
                        <h2 className="purpleTitle"> Visionary </h2>
                    </Carousel.Item>

                </Carousel>

                <p onClick={() => this.props.changePage("product")}> click me! </p>
            </div>


	    );
    }
}

export default HomePageContent;