var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var IndexComponent = require('./components/index.jsx').IndexComponent;
var CartComponent = require('./components/cart.jsx').CartComponent;

var CartCollection = require('./models/cart.js').CartCollection;
var cartCollection = new CartCollection();
var ShirtCollection = require('./models/shirts.js').ShirtCollection;
var shirtCollection = new ShirtCollection();
var shirts = require('./models/shirtinfo.js').shirts;
shirtCollection.add(shirts);

var Router = Backbone.Router.extend({
  routes: {
   '': 'indexLoad',
   'cart': 'cartLoad'
  },
  indexLoad: function(){
    ReactDOM.render(
      React.createElement(IndexComponent, {
        shirtCollection: shirtCollection,
        cartCollection: cartCollection
      }),
      document.getElementById('main-container')
    );
  },
  cartLoad: function(){
    ReactDOM.render(
      React.createElement(CartComponent, {
        cartCollection: cartCollection
      }),
      document.getElementById('main-container')
    );
  }
});

module.exports = new Router();
