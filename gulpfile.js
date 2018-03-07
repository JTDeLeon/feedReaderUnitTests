let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();
let useref = require('gulp-useref');
let uglify = require('gulp-uglify');
let gulpIf = require('gulp-if');
let cssnano = require('gulp-cssnano');

//Use gulp to build project
gulp.task('default', ['sass', 'jasmine', 'fonts', 'misc', 'useref'], function(){
  console.log("Building your project now!");
});

gulp.task('sass',function(){
  return gulp.src('src/scss/**.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('jasmine',function(){
  return gulp.src('src/jasmine/**')
    .pipe(gulp.dest('dist/jasmine'))
});

gulp.task('fonts',function(){
  return gulp.src('src/fonts/**')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('misc',function(){
  return gulp.src('src/fonts/**')
    .pipe(gulp.dest('dist/fonts'))
});



//Use gulp.watch to open a watching browser sync session that will preprocess scss to css and update to browser any changes to .scss, .js, and .html files
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('src/scss/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});

//Will concat & minify 
gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});
