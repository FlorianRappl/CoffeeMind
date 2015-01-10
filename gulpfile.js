// Generated by CoffeeScript 1.8.0
(function() {
  var coffee, coffeelint, concat, config, cucumber, gulp, jasmine, notify, runSequence, sass, uglify;

  gulp = require('gulp');

  coffee = require('gulp-coffee');

  concat = require('gulp-concat');

  jasmine = require('gulp-jasmine');

  uglify = require('gulp-uglify');

  runSequence = require('run-sequence');

  coffeelint = require('gulp-coffeelint');

  cucumber = require('gulp-cucumber');

  sass = require('gulp-ruby-sass');

  notify = require('gulp-notify');

  config = {
    src: {
      main: ['src/scripts/*.coffee'],
      spec: ['spec/**/*Spec.js'],
      features: ['features/*'],
      styles: ['./styles/*.sass'],
      jquery: ['./bower_components/jquery/dist/jquery.min.js'],
      normalize: ['./bower_components/normalize.css/normalize.css'],
      fontAwesome: ['./bower_components/font-awesome/css/font-awesome.css'],
      mainFiles: {
        error: 'src/404.html',
        appleIcon: 'src/apple-touch-icon-precomposed.png',
        favIcon: 'src/favicon.ico',
        index: 'src/index.html'
      }
    },
    dest: {
      folder: 'build',
      styles: './build/styles',
      scripts: './build/scripts',
      srcScriptsVendor: './src/scripts/vendor',
      srcStylesVendor: './src/styles/vendor'
    }
  };

  gulp.task('default', function() {});

  gulp.task('copyVendor', function() {
    gulp.src(config.src.jquery).pipe(gulp.dest(config.dest.srcScriptsVendor));
    gulp.src(config.src.normalize).pipe(gulp.dest(config.dest.srcStylesVendor));
    return gulp.src(config.src.fontAwesome).pipe(gulp.dest(config.dest.srcStylesVendor));
  });

  gulp.task('copy to build folder', function() {
    gulp.src(config.src.mainFiles.error).pipe(gulp.dest(config.dest.folder));
    gulp.src(config.src.mainFiles.appleIcon).pipe(gulp.dest(config.dest.folder));
    gulp.src(config.src.mainFiles.favIcon).pipe(gulp.dest(config.dest.folder));
    return gulp.src(config.src.mainFiles.index).pipe(gulp.dest(config.dest.folder));
  });

  gulp.task('build scripts', function() {
    return gulp.src(config.src.main).pipe(coffee()).pipe(uglify()).pipe(gulp.dest(config.dest.scripts));
  });

  gulp.task('jasmine', function() {
    return gulp.src(config.src.spec).pipe(jasmine()).on('error', notify.onError({
      title: 'Jasmine test failed',
      message: 'One or more tests failed. See the cli for details.'
    }));
  });

  gulp.task('spec', function(callback) {
    return runSequence('jasmine', callback);
  });

  gulp.task('coffee-lint', function() {
    return gulp.src(config.src.main).pipe(coffeelint()).pipe(coffeelint.reporter());
  });

  gulp.task('cucumber', function() {
    return gulp.src(config.src.features).pipe(cucumber({
      'steps': 'features/step_definitions/*.js'
    }));
  });

  gulp.task('sass', function() {
    return gulp.src(config.src.styles).pipe(sass({
      "sourcemap=none": true
    })).pipe(gulp.dest(config.dest.styles));
  });

}).call(this);

//# sourceMappingURL=gulpfile.js.map
