import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item){
    this.get('items').pushObject(item);
  },
  pop(item){
    this.get('items').removeObject(item);
  }
});
