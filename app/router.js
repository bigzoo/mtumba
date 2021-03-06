import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('product', {path : '/products/:product_id'});
  this.route('products');
  this.route('about');
  this.route('contact');
  this.route('checkout');
});

export default Router;
