module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Define uglify task options.
    uglify: {
      production: {
        src: 'javascripts/*.js',
        dest: 'javascripts/application.min.js'
      }
    },

    // Define Jasmine task options.
    jasmine: {
      src: 'javascripts/application.min.js',
      options: {
        vendor: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js',
        spec: 'test/*.spec.js'        
      }
    },

    // Define Watch task options.
    watch: {
      scripts: {
        files: ['javascripts/*.js'],
        tasks: ['default'],
        options: {
          nospawn: true,
        },
      },
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');  

  // Default task(s).
  grunt.registerTask('default', [ 'jasmine', 'uglify' ]);

};