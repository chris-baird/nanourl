# Nanourl

 1. [About](#About)
 2. [Features](#Features)
 3. [Technolgy](#Technology)
 4. [Installation](#Installation)
 5. [Endpoints](#Endpoints)
 6. [Contributing](#Contributing)
 7. [Developer](#Developer)

## About
Small lightweight URL shortener Rest API that provides several endpoints for creating a new shortened URL and for retrieving the origional URL via the shirtened link.

## Features

 - REST API
 - URL Shortening Service

## Technology

 - Node.js
 - Express.js
 - Mongodb/Mongoose ODM
 - Shortid
 - Valid-url

## Installation

**Prerequisites**
Node v16.x.x, NPM v8.x.x, and MongoDB Community Edition are all require for this project to run.

	 1. Clone the project.
	 2. cd into the project diectory
	 3. Run npm install in the terminal
	 4. Create your .env file in the root directory
	 5. Add the following to the .env file MONGO_URI=mongodb://localhost:27017/nanoitproject
	 6. In the root directory open a terminal and run the command npm start
		  

## Endpoints

- **Base Url** [https://nanomyurl.herokuapp.com](https://nanomyurl.herokuapp.com/)
- **POST** /api/nanourl/new
	 - Expects on the body of the request be the property **url_input** and the value being a valid url.
		 - IE 'url_input': 'https://www.google.com/'
	- Returns a short link that combined with the GET endpoint forms the short url. 
		- IE lW6da7pHV
		- https://nanomyurl.herokuapp.com/api/nanourl/lW6da7pHV 
 - **GET** /api/nanourl/:short_link
   - Expects the shortened url link returned from the POST request.
	   - IE lW6da7pHV
	   - https://nanomyurl.herokuapp.com/api/nanourl/lW6da7pHV
	- Redirects to the origional URL.


## Contributing
	

 - Fork the project repo and clone it down
 - Create a new branch and begin your work
 - Commit and push the branch up to your forked repo
 - Submit a pull request against the dev branch


## Developer
Portfolio
[chrisbaird.dev](https://chrisbairddev.herokuapp.com/)
