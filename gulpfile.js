const gulp = require('gulp')
const markdown = require('gulp-markdown');
const wrapper = require('gulp-wrapper');

gulp.watch('md/**/*.md', ['md'])

gulp.task('md', function(){
  //const opts = {title: 'File $BASENAME in $DIRNAME', stylesheet: 'css/modest.css'};
  const opts = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  }
  
  return gulp.src('md/*.md')
    .pipe(markdown(opts))
    .pipe(wrapper({
      header: '<html><head><link rel="stylesheet" href="css/modest.css"/></head>',
      footer: '</html>\n'
      
    }))
    .pipe(gulp.dest('.'))
});


gulp.task('default', [ 'md' ]);
