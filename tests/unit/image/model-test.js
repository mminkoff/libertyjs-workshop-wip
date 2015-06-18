import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('image', 'Unit | Model | image', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it provides a thumbUrl', function(assert) {
  var model = this.subject();
  var baseUrl = 'http://foo.bar/baz';
  var baseUrlCropped =  baseUrl + '/convert?crop=1,2,3,4';

  assert.equal(model.get('thumbUrl'),'');

  Ember.run( function() {
    model.set('url',baseUrl);
  });

  assert.equal(model.get('thumbUrl'),baseUrl + '/convert?width=120');

  Ember.run( function() {
    model.set('url',baseUrlCropped);
  });

  assert.equal(model.get('thumbUrl'),baseUrlCropped + '&width=120');
});
