import DS from 'ember-data';

export default DS.Model.extend({
  caption: DS.attr('string'),
  url: DS.attr('string'),
  height: DS.attr('number'),
  width: DS.attr('number'),

  thumbUrl: Ember.computed('url',function() {
    var u = this.get('url');
    return u + '&width=120';
  })
});
