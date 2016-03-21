var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var shirts = [
  {
    "name": "Louisianimal",
    "description": "Sunshine Tee : unisex xs - xxl : #highbrass #highbrassapparel #fashion #prints #printing #nola #louisianimal",
    "price": 21.99,
    "url": "https://scontent.cdninstagram.com/t51.2885-15/e15/11049331_1542118619383271_1036519807_n.jpg?ig_cache_key=OTQ4Njk5MjIzNTg2NzkzNTAz.2",
    "quantity": 0,
    "size": ""
  },
  {
    "name": "King Cake Baby",
    "description": "THE KING CAKE BABY IS BACK. We will be delivering another run of these since they SOLD OUT! #highbrass #highbrassapparel #fronky #nola #mardigras",
    "price": 21.99,
    "url": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12547207_936907363025665_315896055_n.jpg?ig_cache_key=MTE3NjUyNjE4MjIzNTI2OTYzNg%3D%3D.2.l",
    "quantity": 0,
    "size": ""
  },
  {
    "name": "Sun's Out, Guns Out",
    "description": "Suns out guns out #sogo #highbrass #highbrassapparel",
    "price": 21.99,
    "url": "https://scontent.cdninstagram.com/t51.2885-15/e15/11283323_408734772643090_1129708671_n.jpg?ig_cache_key=NDQ1MjUzMjc2NzQ2OTM1MDcy.2",
    "quantity": 0,
    "size": ""
  },
  {
    "name": "Just Deaux It",
    "description": "Heather Royal & Navy Raglan : unisex xs - xxl : #highbrass #highbrassapparel #fashion #prints #printing #nola",
    "price": 21.99,
    "url": "https://scontent.cdninstagram.com/t51.2885-15/e15/10808421_1624802541086595_222328823_n.jpg?ig_cache_key=OTQ4NzAwOTczMjk5NDI3NDAy.2",
    "quantity": 0,
    "size": ""
  },
  {
    "name": "LA Stripes",
    "description": "LA STRIPE MARDI GRAS EDITION : Heather grey : unisex xs - xxl : #highbrass #highbrassapparel #fashion #prints #printing #mardigras",
    "price": 21.99,
    "url": "https://scontent.cdninstagram.com/t51.2885-15/e15/11005031_1577382249185747_1308716489_n.jpg?ig_cache_key=OTQ4Njk0ODM4NDI1MTg1MjAx.2",
    "quantity": 0,
    "size": ""
  },
  {
    "name": "Throw Me Something Mister!",
    "description": "THE LATEST DESIGN IS OUT!",
    "price": 21.99,
    "url": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12424842_1644918632425968_1677392383_n.jpg?ig_cache_key=MTE3NjUyNzM5NDcwNzg5Mjc3MQ%3D%3D.2.l",
    "quantity": 0,
    "size": ""
  },
  {
    "name": "Just Deaux It",
    "description": "White Tee : unisex xs - xxl : #highbrass #highbrassapparel #fashion #prints #printing #nola",
    "price": 21.99,
    "url": "https://scontent.cdninstagram.com/t51.2885-15/e15/11093054_1562394907381713_872042356_n.jpg?ig_cache_key=OTQ4NzAyODM2NTkzODEzNjMw.2",
    "quantity": 0,
    "size": ""
  },
  {
    "name": "Baewatch",
    "description": "BAEWATCH : Women's Muscle Tank Heather Grey : xs - xxl : #highbrass #highbrassapparel #fashion #prints #printing #baewatch",
    "price": 21.99,
    "url": "https://scontent.cdninstagram.com/t51.2885-15/e15/11024093_1560662247549133_1141669202_n.jpg?ig_cache_key=OTQ4NzA1NTAxMDUwNTk1NTMw.2",
    "quantity": 0,
    "size": ""
  },
  {
    "name": "Thunderbird",
    "description": "White & Heather Charcoal : unisex xs - xxl : #highbrass #highbrassapparel #fashion #prints #printing",
    "price": 21.99,
    "url": "https://scontent.cdninstagram.com/t51.2885-15/e15/11055695_755892104524959_1093562474_n.jpg?ig_cache_key=OTQ4Njk0MDE4MDQ0NDg4NjEy.2",
    "quantity": 0,
    "size": ""
  }
]

module.exports = {
  shirts: shirts
}
