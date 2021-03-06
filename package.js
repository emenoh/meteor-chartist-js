Package.describe({
  name: 'mfpierre:chartist-js',
  summary: 'Simple responsive charts',
  version: '1.7.1',
  git: 'https://github.com/mfpierre/meteor-chartist-js'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('fourseven:scss@4.12.0');
  api.addFiles([
    'chartist-js/dist/chartist.js',
    'chartist-js/dist/scss/settings/_chartist-settings.scss',
    'chartist-js/dist/scss/chartist.scss'
  ], 'client');
});
