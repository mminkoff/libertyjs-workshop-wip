/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'demo-app-wip',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' wss://*.firebaseio.com",
      'style-src': "self http://localhost:4200 http://fonts.googleapis.com/",
      'font-src': "self http://localhost:4200 http://fonts.gstatic.com/",
      'img-src': "self ow.ly https://www.filepicker.io https://s3.amazonaws.com",
      'script-src': "self http://api.filepicker.io http://localhost:4200/",
      'frame-src': "self http://dialog.filepicker.io https://www.filepicker.io"
    },
    firebase: 'https://shining-inferno-8972.firebaseio.com/',
    filepickerKey: 'AZ6sXjNISRmv580NSLBzgz',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
