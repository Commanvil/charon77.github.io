const gulp = require('gulp')
//const markdown = require('gulp-markdown');
const markdown = require('gulp-remarkable')

const wrapper = require('gulp-wrapper');
const flatten = require('gulp-flatten');
const writeGood = require('write-good')
const child_process = require('child_process')
const replace = require('gulp-replace')
const path = require('path')
const pygmentize = require('pygmentize-bundled')
const deasync = require('deasync')

const concat = require('gulp-concat')
const minifyCSS = require('gulp-minify-css')

const globMarkdown = ['./**/*.md', '!./node_modules/**'];


const mdWatcher = gulp.watch(globMarkdown, ['md'])

//mdWatcher.on('change', ({path}, stat)=>{
  //run_and_print('./node_modules/write-good/bin/write-good.js', path)
//})


const htmlWatcherFromMd = gulp.watch('./**/*.md')
htmlWatcherFromMd.on('change', ({path: filePath}, stat)=>{
  // Changes extension to .html
  let pathObj = path.parse(filePath)
  pathObj.ext = '.html'
  pathObj.base = null // Obey .ext
  let htmlPath = path.format(pathObj)
  run_and_print('./node_modules/readability-checker/lib/readability.js', htmlPath)
})



function run_and_print(fname, path) {
  child_process.execFile(fname, [path], (error, stdout, stderr)=>{
    console.log(path)
    console.log(stderr)
    console.log(stdout)
  })
}

gulp.watch(globMarkdown, ['md'])
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
    remarkableOptions: {
        typographer: true,
        highlight: highlighter
    }

  }
  
  return gulp.src(globMarkdown)
    //.pipe(markdown(opts))
    .pipe(markdown(opts))
    
    .pipe(wrapper({
      header: '<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="@style.min.css"/></head><body>',
      footer: '</body></html>\n'
      
    }))
    
    .pipe(replace('@style.min.css', relativePathReplace('style.min.css')))
    .pipe(replace('/img/stock', relativePathReplace('img/stock')))
    .pipe(gulp.dest('.'))
});


gulp.task('default', [ 'md', 'css' ]);

function relativePathReplace (fileName) {

  function replaceDelegate ()  {
    let file = this.file

    let relativePathToHome = path.dirname( path.relative(file.path, file.base) )

    let relativePathToFile = path.join(relativePathToHome, fileName)
    return relativePathToFile
  }

  return replaceDelegate
}

function highlighter (code, lang) {
      if (lang)
      {
        return syncPygmentize(code,lang)
      } else {
          return ''
      }
}

function syncPygmentize(code, lang) {
  let error = undefined
  let result = undefined
  pygmentize({ lang: lang, format: 'html' }, code, (err, res)=>{
    error=err
    result =res
    if (err) {
      throw err
    }
  })

  deasync.loopWhile (()=>{return result == undefined})
  return result.toString()
  
}
