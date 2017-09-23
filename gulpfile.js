const gulp = require('gulp')
const markdown = require('gulp-markdown');
const wrapper = require('gulp-wrapper');
const flatten = require('gulp-flatten');

const concat = require('gulp-concat')
const minifyCSS = require('gulp-minify-css')

gulp.watch('md/**/*.md', ['md'])

gulp.watch('css/**/*.css', ['css'])


gulp.task('css', function(){
  return gulp.src('css/**/*.css')
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('.'))
  
})

gulp.task('md', function(){
  //const opts = {title: 'File $BASENAME in $DIRNAME', stylesheet: 'css/modest.css'};
  const opts = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    highlight: function (code, lang, callback) {
    require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
      callback(err, result.toString());
    })}
  }
  
  return gulp.src('md/**/*.md')
    .pipe(flatten())
    .pipe(markdown(opts))
    .pipe(wrapper({
      header: '<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="style.min.css"/></head><body>',
      footer: '</body></html>\n'
      
    }))
    .pipe(gulp.dest('.'))
});


gulp.task('default', [ 'md', 'css' ]);
