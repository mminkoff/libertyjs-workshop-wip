import Ember from 'ember';

export default Ember.Controller.extend({
  images: Ember.computed.alias('model'),

  savedImages: Ember.computed('images.@each.isNew',function() {
    return this.get('images').filterBy('isNew',false);
  })
});
