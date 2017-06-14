import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.query('product',{
      orderBy: 'cost',
      limitToLast: 3
    });
  }
});
// model: function() {
//     return this.store.query('task', {
//       orderBy: 'done',
//       equalTo: 'true',
//       limitToFirst: 5
//     });
//   }
