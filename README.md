# eshop

A small part of the online store on Vue.js with a list of goods and a shopping cart

## Project demo

https://vue-eshop.000webhostapp.com 

## Task description

```
The main page displays a list of products with a name, image and price. Each product can be immediately added 
to the shopping cart, with more than one time.
At the top, a link to the "shopping cart" page is displayed with the quantity counter of the ordered goods.

The "shopping cart" page displays the list of ordered goods sorted by the time of the addition (the last one 
added at the top).
Goods from the shopping cart can be deleted (one at a time or all at once), as well as change the number of 
ordered items. 
At the bottom of the page, the total price of the order is displayed.

Functional requirements:
- All actions on the site should take place without reloading the page.
- The interface must meet the usability requirements.
- After the page is reloaded, the state of the contents of the shopping cart must be saved.

Technical requirements:
- You can use JavaScript or TypeScript as the development language.
- As a bundler, if necessary, use Webpack.
- The logic of the application should be broken down into a reasonable number of self-sufficient 
  Vue components.
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
