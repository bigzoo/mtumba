import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  img1: DS.attr(),
  img2: DS.attr(),
  img3: DS.attr(),
  cost: DS.attr('number'),
  description: DS.attr(),
  availableStock: DS.attr()

});
