import DS from 'ember-data';

export default DS.Model.extend({
  caption: DS.attr('string'),
  url: DS.attr('string'),
  height: DS.attr('number'),
  width: DS.attr('number')
});
