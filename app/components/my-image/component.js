import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-group-item'],

  url: Ember.computed('image.url','image.thumbUrl','thumb',function() {
    if (this.get('thumb')) {
      return this.get('image.thumbUrl');
    } else {
      return this.get('image.url');
    }
  })
});
