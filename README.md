# grunt-raml2boot

> Grunt task for RAML to Bootstrap.

[![NPM version](https://badge.fury.io/js/grunt-raml2boot.svg)](http://badge.fury.io/js/grunt-raml2boot)
[![License](https://img.shields.io/npm/l/grunt-raml2boot.svg)](http://opensource.org/licenses/MIT)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-raml2boot --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-raml2boot');
```

## Usage

In your project's Gruntfile, add a section named `raml2boot` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  raml2boot: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

## Options

### options.standalone

Type: `boolean`
Default value: `true`

If true, a standalone HTML page with a navbar and title will be generated.
If false, only a partial HTML fragment will be generated, to be included in a complete page elsewhere.

This options has no effect if the `layout` option is specified.

#### options.layout

Type: `string`

The path to a custom layout file to use.

## Examples

#### Simple Conversion

In this example, the `raml2boot:apidoc` task will parse the RAML file at `doc/api.raml` and save the resulting HTML to `dest/api.html`.

```js
grunt.initConfig({
  raml2boot: {
    options: {},
    apidoc: {
      files: {
        'dest/api.html': 'doc/api.raml'
      }
    }
  },
});
```





## Contributing

* [Fork](https://help.github.com/articles/fork-a-repo)
* Create a topic branch - `git checkout -b feature`
* Push to your branch - `git push origin feature`
* Create a [pull request](http://help.github.com/pull-requests/) from your branch

Please add a changelog entry with your name for new features and bug fixes.





## License

**grunt-raml2boot** is licensed under the [MIT License](http://opensource.org/licenses/MIT).
See [LICENSE.txt](LICENSE.txt) for the full text.
