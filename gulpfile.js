const gulp = require('gulp')
const markdown = require('gulp-markdown');
const wrapper = require('gulp-wrapper');
const flatten = require('gulp-flatten');
const writeGood = require('write-good')
const child_process = require('child_process')

const concat = require('gulp-concat')
const minifyCSS = require('gulp-minify-css')

const globMarkdown = ['./**/*.md', '!./node_modules/**'];

const mdWatcher = gulp.watch(globMarkdown, ['md'])

mdWatcher.on('change', ({path}, stat)=>{
  child_process.execFile('./node_modules/write-good/bin/write-good.js', [path], (error, stdout, stderr)=>{
    console.log(stdout)
  })
})

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
      if (lang)
      {
        require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
          callback(err, result.toString());
        })
      } else {
        callback(null, code)
      }
    }
  }
  
  return gulp.src(globMarkdown)
    .pipe(markdown(opts))
    .pipe(wrapper({
      header: '<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="style.min.css"/></head><body>',
      footer: '</body></html>\n'
      
    }))
    .pipe(gulp.dest('.'))
});


gulp.task('default', [ 'md', 'css' ]);
