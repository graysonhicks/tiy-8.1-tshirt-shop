var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var SideBarComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      cartCollection: this.props.cartCollection,
      total: this.props.cartCollection.total().toFixed(2)
    }
  },
  handleClick: function(item){
  },
  render: function(){
    var newShirt = function(item){
      console.log(item);
      return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={item.get("url")} alt="..." />
          <div className="caption">
            <h3>{item.get("name")}</h3>
            <p className="t-shirt-descriptions">{item.get("description")}</p>
            <div className="input-group t-shirt-btn-group">
              <div className="form-group">
                <p>Quantity: 2</p>
                <button type="button" href="#" className="pull-right btn cart-remove-btn btn-danger" role="button">Remove</button>
                <p>Size: M</p>
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
        {(this.state.cartCollection).map(newShirt.bind(this))}
    </div>
)
}
});

module.exports = {
  SideBarComponent: SideBarComponent
}
