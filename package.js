Package.describe({
  name: "edgemethod:autoform-file-semantic",
  summary: "File upload for AutoForm",
  description: "File upload for AutoForm - w/Semantic UI classes",
  version: "0.3.0",
  git: "http://github.com/edgemethod/autoform-file-semantic.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'check',
    'coffeescript',
    'underscore',
    'reactive-var',
    'templating',
    'less@1.0.0 || 2.5.0',
    'aldeed:autoform@5.5.1',
    'cfs:ui'
  ]);

  api.addFiles('lib/client/autoform-file.html', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
