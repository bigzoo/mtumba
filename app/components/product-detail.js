import Ember from 'ember';

export default Ember.Component.extend({
  outCart: true,
  inCart: false,
  actions:{
    addToCart(item){
      this.sendAction('addToCart',item);
      this.set('inCart',true);
      this.set('outCart',false);
    },
    removeFromCart(item){
      this.sendAction('removeFromCart',item);
      this.set('inCart',false);
      this.set('outCart',true);
    }
  }
});
