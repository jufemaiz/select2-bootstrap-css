module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      all: ['test/*_test.js']
    },
    
    sass: {
      options: {
        style: 'expanded'
      },
      dist: {
        files: {
          'docs/select2-bootstrap.css': 'lib/build.scss',
          'select2-bootstrap.css': 'lib/build.scss'
        }
      },
      test: {
        files: {
          'tmp/select2-bootstrap.css': 'lib/build.scss'
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', '*.json']
    }

  });

};