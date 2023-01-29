const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

const styles = () => {
   return src('app/scss/app.scss')
      .pipe(sass().on('error', sass.logError))
      // .pipe(concat('app/css/style.css'))
      .pipe(dest('app/css'))
      .pipe(dest('build/css'))
      .pipe(browserSync.stream());
}

const files = () => {
   return src('app/**/*.html')
      .pipe(browserSync.stream())
      .pipe(dest('build/'));
}

const js = () => {
   return src('app/**/*.js')
      .pipe(browserSync.stream())
      .pipe(dest('build/'));
}

const browserSyncJob = () => {
   browserSync.init({
     server: "app/",
     notify: false
   });

   watch('app/**/*.html', files);
   watch('app/scss/**/*.scss', styles);
   watch('app/**/*.js', js);
};

exports.default = browserSyncJob;