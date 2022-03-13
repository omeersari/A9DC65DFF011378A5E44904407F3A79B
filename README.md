# simpleshop

You can go to the project: https://simpleshopp.vercel.app/
## Build Setup

Download this repository and in your terminal run (.env is required for local run):
 
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# to run tests
$ npm run test
```


# Used Tech and Notes

- Nuxt is used.
- SASS is used for styling. Responsive design is applied.
- For API request axios is used. (see nuxt.config.js >> axios)
- To run the project locally, .env file is required. 
- To style code, prettier is used.
- Deployment is made with Vercel.
- 2 simple tests are applied. One of them checks for header title and other checks props of Pagination.


# Pages

## homepage

A get request is made to list the products. Products are shown with their images, names and prices. Pagination is applied with pagination component.
 
- Each page includes 10 items.
- User can search items by their name.
- User can sort items by their price. (If there is a search filter, it will only sort searched items.)
- User can click on an item to go to a detail page of that item.

## detail/:id

Array filter method is used to get requested item by it's id. 

- User can see details of the item.
- User can click different images of item to see that on the left side of the page.