var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var IndexComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      cartCollection: this.props.cartCollection,
      total: this.props.cartCollection.total().toFixed(2)
    }
  },
  handleAdd: function(item){
    this.addItem(item);
    this.cartTotal();
  },
  addItem: function(item){
    var order = item.clone();
    this.props.cartCollection.add(order);
    this.setState({
      cartCollection: this.props.cartCollection
    });
    console.log('cartCollection', this.state.cartCollection);
  },
  cartTotal: function(){
    this.setState({total: this.props.cartCollection.total().toFixed(2)});
  },
  render: function(){
        var newShirt = function(item){
          console.log(item);
          return (
          <div className="col-sm-6 col-md-4" key={item.get("cid")}>
            <div className="thumbnail">
              <img src={item.get("url")} alt="..." />
              <div className="caption">
                <h3>{item.get("name")}</h3>
                <p className="t-shirt-descriptions">{item.get("description")}</p>
                <div className="input-group t-shirt-btn-group">
                  <div className="form-group">
                    <input type="text" className="form-control" id="quantity-input" placeholder="Quantity" />
                    <button type="button" href="#" onClick={this.handleAdd.bind(this, item)} className="pull-right btn buy-btn btn-success" role="button">Buy!</button>
                    <button type="button" className="pull-right btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Size <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu pull-right">
                      <li><a href="#">Small</a></li>
                      <li><a href="#">Medium</a></li>
                      <li><a href="#">Large</a></li>
                      <li><a href="#">X-Large</a></li>
                    </ul>
                  </div>
                </div>
                <div className="t-shirt-price">
                  <span>${item.get("price")}</span>
                </div>
              </div>
            </div>
          </div>
          )
        }
          return (
        <div className="row">
            {(this.props.shirtCollection).map(newShirt.bind(this))}
        </div>
    )
  }
});

module.exports = {
  IndexComponent: IndexComponent
}
