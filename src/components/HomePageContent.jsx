import React, { Component } from 'react';
import '../css/HomePageContent.css';
import { Carousel } from 'react-bootstrap';
import projects_img from '../img/projects_header.png';
import material_listing_img from '../img/material_listing.png';

/*
 represents the home page content of the site
*/
class HomePageContent extends Component {

    render() {
	    return (
		   <div id="homePageContent">
                <div id="caroText">
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
                </div>

                <img src={material_listing_img} width="70%" 
                    onClick={() => this.props.changePage("product")}/>
                <img src={projects_img} width="100%" 
                    onClick={() => this.props.changePage("product")}/>
            </div>


	    );
    }
}

export default HomePageContent;