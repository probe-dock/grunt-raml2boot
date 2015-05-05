module.exports = function(grunt) {

  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json'],
        commit: false,
        createTag: false,
        push: false
      }
    },

    jasmine_node: {
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec'
      },
      all: ['spec/']
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ]
    },

    raml2boot: {
      example: {
        options: {
          standalone: true
        },
        files: {
          'tmp/test.html': ['examples/api.raml']
        }
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('default', ['jshint', 'jasmine_node']);
};
