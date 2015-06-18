import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('image');
  },

  actions: {
    fileSelected: function(fileBlob) {
      this.controller.set('model.url',fileBlob.url);
      this.controller.set('picker',false);
    },
    openPicker: function(){
      this.controller.set('picker',true);
    },
    onClose: function(){
      this.controller.set('picker',false);
    },
    saveImage: function() {
      this.controller.get('model').save();
      this.transitionTo('images');
    },
    cancel: function() {
      this.controller.get('model').deleteRecord();
      this.transitionTo('images');
    }
  }
});
