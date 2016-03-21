var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var CartComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      cartCollection: this.props.cartCollection,
      cart: JSON.parse(localStorage.orders),
      total: this.props.cartCollection.total().toFixed(2)
    }
  },
  removeItem: function(item){
    this.props.cartCollection.remove(item);
    this.setState({
      cartCollection: this.props.cartCollection,
    });
    console.log(this.props.cartCollection);
    // var cartCollectionJSONString = JSON.stringify(this.state.cartCollection.toJSON());
    // localStorage.setItem("orders", cartCollectionJSONString);
    this.cartTotal();
  },
  cartTotal: function(){
    this.setState({total: this.props.cartCollection.total().toFixed(2)});
  },
  handleClick: function(item){
  },
  render: function(){
    var newShirt = function(item){
      return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={item.get('url')} alt="..." />
          <div className="caption">
            <h3>{item.get('name')}</h3>
            <p className="t-shirt-descriptions">{item.description}</p>
            <div className="input-group t-shirt-btn-group">
              <div className="form-group">
                <p><span>Quantity: {item.get('quantity')} </span> <span className="pull-right">Size: {item.get('size')}</span></p>
                <button type="button" href="#" onClick={this.removeItem.bind(this, item)} className="pull-right btn btn-block cart-remove-btn btn-danger" role="button">Remove</button>
                <ul className="dropdown-menu pull-right">
                  <li><a href="#">Small</a></li>
                  <li><a href="#">Medium</a></li>
                  <li><a href="#">Large</a></li>
                  <li><a href="#">X-Large</a></li>
                </ul>
              </div>
            </div>
            <div className="t-shirt-price">
              <span>${item.get('price')}</span>
            </div>
          </div>
        </div>
      </div>
      )
    }
      return (
    <div className="row">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header cart-header pull-right">
            Order Total: ${this.state.total}
            <button className="btn btn-success">Checkout!</button>
          </div>
        </div>
      </nav>
      {(this.props.cartCollection).map(newShirt.bind(this))}
    </div>
)
}
});

module.exports = {
  CartComponent: CartComponent
}
