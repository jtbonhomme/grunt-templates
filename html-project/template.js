/*
 * grunt-templates-project
 * http://www.stefanvermaas.nl
 *
 * Copyright (c) 2013 Stefan Vermaas
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a basic HTML(5) project with SASS (Compass, Bourbon, Neat and Toffee)';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version'),
    init.prompt('main'),
    init.prompt('npm_test', 'grunt nodeunit')
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
      'grunt-contrib-uglify': '~0.1.1',
      'grunt-contrib-watch': '~0.2.0',
      'grunt-contrib-jasmine': '~0.4.2',
    };    

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};