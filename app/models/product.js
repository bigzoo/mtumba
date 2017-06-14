import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  img1: DS.attr('string'),
  img2: DS.attr('string'),
  img3: DS.attr('string'),
  cost: DS.attr('number'),
  shortDescription: DS.attr('string'),
  description: DS.attr('string'),
  availableStock: DS.attr('number')

});
