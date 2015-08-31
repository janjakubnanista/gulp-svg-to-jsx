'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var svgtojsx = require('svg-to-jsx');

module.exports = function(options) {
    options = options || {};

    function transform(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            return callback(new gutil.PluginError(
                'gulp-svg-to-jsx',
                'Streaming not supported'
            ));
        }

        var contents = file.contents.toString();
        svgtojsx(contents, options, function(error, result) {
            if (error) return callback(error);

            var output = new gutil.File({
                contents: new Buffer(result),
                path: file.path
            });

            this.push(output);
            callback();
        }.bind(this));
    }

    return through.obj(transform);
};
