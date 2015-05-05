var _ = require('underscore'),
    p = require('bluebird'),
    raml2boot = require('raml2boot');

// Please see the Grunt documentation for more information regarding task
// creation: http://gruntjs.com/creating-tasks
module.exports = function(grunt) {

  grunt.registerMultiTask('raml2boot', 'Generate a Bootstrap page from API documentation in RAML.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      standalone: true
    });

    var conversions = {};

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      var files = grunt.file.expand({nonull: true}, f.orig.src);

      if (files.length >= 2) {
        grunt.log.warn('You have specified a mapping with multiple source files (["' +
          files.join('", "') + '"] -> "' + f.dest + '") which this plugin does not support. Only the last file will be used.');
      }

      var src = _.last(files);
      if (!grunt.file.exists(src)) {
        grunt.log.warn('Source file "' + src + '" not found.');
        return;
      }

      conversions[src] = f.dest;
    });

    if (_.isEmpty(conversions)) {
      return grunt.fail.fatal('No RAML file to convert.');
    }

    var done = this.async();

    p.all(_.map(conversions, convert));

    function convert(dest, src) {
      return raml2boot(_.extend(options, { source: src, output: dest })).then(function() {
        grunt.log.ok(src + ' -> ' + dest);
      }, function(err) {
        grunt.log.error(src + ' -> ' + dest);
        return p.reject(err);
      });
    }
  });
};
