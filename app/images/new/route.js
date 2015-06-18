import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('image');
  },

  actions: {
    fileSelected: function(fileBlob) {
      this.controller.set('model.url',fileBlob.url);
    }
  }
});
