import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    addToCart(item){
      this.sendAction('addToCart',item);
    },
    removeFromCart(item){
      this.sendAction('removeFromCart',item);
    }
  }
});
