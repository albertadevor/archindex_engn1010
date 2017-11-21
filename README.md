# README

## Link to page

My work can be found at:
https://albertadevor.github.io/archindex/

You can also run it through 
$ npm install
$ npm start

and navigate to localhost:3000

## Reusable Components

The reusable components I implemented are:
1. Header: A header with a changeable title and sections but standard search, sign up, and log in buttons
2. Product Card: A card for each product with price, name, and image.
3. Product List: A listing of product cards based on a list of dictionary inputs
4. SortedFilteredProductListing: A component that allows for sorting and filtering of a product list. This is definitely the least reusable of the 4 components because it contains a lot of logic specific to this project.

## Libraries Used
I used React-Bootstrap for styling and built the app using create-react-app.

## Design

I decided to use a clean looking white card look for the products. I thought this would make it easy to understand the differences in products. 

I decided to put the filter bar on the left, and the sorting on the top. I decided to separate these two components (instead of putting all controls in one place) so that the user's mental model of these things would be that they are different and do not control the same thing. If they were placed together there was a risk that the user would be confused why the filter options weren't sorting and the sort options weren't filtering.

## Goal

The goal of this application is to allow users to view different materials for purchase and make an informed choice about which they'd like to use. By sorting by price and filtering by material type the user has a better chance of being able to find the right material for them.

# Data Flow

The data is originally created as a list of objects in App.js. That list is passed into the SortedFilteredProductListing component. SortedFilteredProductListing filters and sorts the list (as its name might indicate) and then passes off the altered list to ProductList which maps the list of data points into a list of ProductCards (another component). Each of the ProductCards is a styled portrayal of most of the information available about each kind of material.