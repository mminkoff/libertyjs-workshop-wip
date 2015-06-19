import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteImage: function() {
      this.controller.get('model').destroyRecord();
      this.transitionTo('images');
    }
  }
});
