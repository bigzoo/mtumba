import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  // myItems: this.get('shoppingCart.items'),
  actions:{
    removeFromCart(item){
      this.get('shoppingCart').pop(item);
    }
  }
});
