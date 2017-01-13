var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");
var paths = {react:'./jsx/**/*.jsx',
			sass:'./scss/**/*.scss'}


gulp.task('default', function() {

});

gulp.task("webpack", function(callback) {

	var config = Object.create(webpackConfig);

	webpack(config, function(err,stats){
		if (err) { throw new gutil.PluginError("webpack:build", err);}
		gutil.log("[webpack]", stats.toString({

		}));
		callback();
	})
});

gulp.task('watch', function() {
	gulp.watch(paths.react, ['webpack']);
	gulp.watch(paths.sass, ['webpack']);
});