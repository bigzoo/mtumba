import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  inCart: false,
  model(params){
    return this.store.findRecord('product',params.product_id)
  },
  actions: {
    addToCart(item){
      this.get('shoppingCart').add(item);
      console.log(this.get('inCart'));
      this.set('inCart',true);
      console.log(this.get('inCart'));
    },
    removeFromCart(item){
      this.get('shoppingCart').pop(item);
    }
  }
});
