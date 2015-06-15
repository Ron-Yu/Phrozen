var gulp = require('gulp'),
    uglyfly = require('gulp-uglyfly'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    prefix = require('gulp-autoprefixer'),
    notify = require("gulp-notify"),
    clean = require('gulp-clean'),
    minifyCss = require('gulp-minify-css'),
    gulpFilter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files'),
    gulpSequence = require('gulp-sequence'),
    rename = require("gulp-rename");

var js_dest_path = 'build/assets/lib/js';
var css_dest_path = 'build/assets/lib/css';
var img_for_fancybox = 'assets/lib/css';
var themes_for_semantic_ui = 'bower_components/semantic-ui/dist/themes/**/*';
var materialize_sass_path = 'bower_components/materialize/sass/**/*';
var materialize_font_path = 'bower_components/materialize/dist/font/**/*';
var materialize_js_path = 'bower_components/materialize/dist/js/**/materialize.js';

var jsFilter = gulpFilter('*.js');
var cssFilter = gulpFilter('*.css');
var imgFilter = gulpFilter(['*.gif', '*.png']);



//test task
gulp.task('test', function(){
  console.log("this is a test sentence.");
});

// export bower files to where we want
gulp.task('exportBowerFiles', function() {
    return gulp.src(mainBowerFiles())

    .pipe(jsFilter)
        .pipe(gulp.dest(js_dest_path))
        .pipe(jsFilter.restore())

    .pipe(cssFilter)
        .pipe(gulp.dest(css_dest_path))
        .pipe(cssFilter.restore());
});


// export materialize sass files to where we want
gulp.task('materializeSass', function() {
  return gulp.src(materialize_sass_path, { base: 'bower_components' })
        .pipe(gulp.dest('native/sass/vendor'));

});

// copy materialize sass fiel and rename it
// gulp.task('materializeSassCopy', function () {
//     gulp.src('native/sass/materialize/sass/**/materialize.scss')
//         .pipe(rename({
//             prefix: "_"
//           }))
//         .pipe(gulp.dest('native/sass/materialize/sass/forImport'));
// });

// export materialize font file
gulp.task('materializFont', function() {
  return gulp.src(materialize_font_path, { base: 'bower_components/materialize/dist' })
        .pipe(gulp.dest('build/css'));

});

// export materialize js file
gulp.task('materializJs', function() {
  return gulp.src(materialize_js_path)
        .pipe(gulp.dest('build/assets/lib/js'));

});

//materialize compile task
//compile
// gulp.task('materializeSassCompile', function () {
//     gulp.src('native/sass/materialize/sass/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(sourcemaps.write('./maps'))
//         .pipe(gulp.dest('build/assets/lib/materialize/css'))
//         .pipe(notify("materializeSass complie complete!"));
// });


// run materialize sequence
gulp.task('materializeBuild', gulpSequence('materializeSass', 'materializFont', 'materializJs'));


// Sctipt Task
// Uglifies
gulp.task('scripts', function(){
  gulp.src('native/js/*.js')
    .pipe(plumber())
    .pipe(uglyfly())
    .pipe(gulp.dest('build/js'))
    .pipe(notify("Scripts uglify are done!"));
});


//compass Task
//compile
// gulp.task('compass', function() {
//   gulp.src('native/sass/**/*.sass')
//     .pipe(plumber())
//     .pipe(compass({
//       css: 'build/css',
//       sass: 'native/sass',
//       sourcemaps: true
//     }))
//     .pipe(prefix())
//     .pipe(gulp.dest('build/css'))
//     .pipe(notify("Compass complie complete!"));
// });


//Sass Task
//compile
gulp.task('sass', function () {
    gulp.src('native/sass/application.sass')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
          indentedSyntax: true
        }))
        .pipe(prefix())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('build/css'))
        .pipe(notify("Sass complie complete!"));
});


//Styles Task
//compile
gulp.task('styles', function () {
  gulp.src('native/stylus/**/*.styl')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({use: nib()}))
    .pipe(prefix())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(notify("Styles complie complete!"));
});


//Template task
//compile jade
gulp.task('templates', function () {
  gulp.src('native/jade/page/**/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('build'))
    .pipe(notify("Template complie complete!"));
});

//Images task
//compress
gulp.task('image', function () {
  gulp.src('native/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
    .pipe(notify("Images compress complete!"));
});

//Watch Task
//Watches JS
gulp.task('watch', function(){
    gulp.watch('native/js/*.js', ['scripts']);
    gulp.watch('native/**/*.jade', ['templates']);
    gulp.watch('native/sass/**/*.sass', ['sass']);
});


gulp.task('default', ['scripts', 'sass', 'templates', 'watch']);
