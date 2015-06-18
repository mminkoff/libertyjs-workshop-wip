import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'demo-app-wip/tests/helpers/start-app';

var application;

module('Acceptance | images', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /images', function(assert) {
  var totalImages;

  visit('/images');

  andThen(function() {
    assert.equal(currentURL(), '/images');

    application.__container__.lookup('store:main').find('image').then(function(images) {
      totalImages = images.filterBy('isNew',false).length;
    });

    click('h4 a');
  });

  andThen(function() {
    assert.equal(currentURL(), '/images/new');
    assert.equal(find('.images li').length,totalImages,"no new images added");
  });
});
