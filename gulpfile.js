var gulp   = require ('gulp'),
    gutil  = require ('gulp-util'),
    coffee = require ('gulp-coffee'),
    browserify = require ('gulp-browserify'),
    compass = require ('gulp-compass'),
    concat = require ('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
	'components/scripts/rclick.js',
	'components/scripts/pixgrid.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js',
];
var sassSources = [
	'components/sass/style.scss'
];

gulp.task('coffee', function(){
	gulp.src(coffeeSources)
	    .pipe(coffee({bare: true})
	        .on('error', gutil.log))
	    .pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function(){
	gulp.src(jsSources)
	    .pipe (concat('script.js'))
	    .pipe (browserify())
	    .pipe (gulp.dest('builds/developments/js'))
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/developments/images',
      style: 'expanded',
      comments: true,
      css:'builds/developments/css'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('builds/developments/css'))
});

gulp.task('default', ['coffee','js', 'compass']);


