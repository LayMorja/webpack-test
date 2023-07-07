import autoPrefixer from 'gulp-autoprefixer';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
const sass = gulpSass(dartSass);

export const css = () => {
  return app.gulp
    .src(app.path.src.styles)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'STYLES',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      sass({
        outputStyle: app.isBuild ? 'compressed' : 'expanded',
      })
    )
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(app.plugins.replace(/@temp\//g, '../temp/'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoPrefixer({
          cascade: false,
          overrideBrowserslist: ['last 3 versions'],
          grid: true,
        })
      )
    )
    .pipe(
      app.plugins.rename({
        extname: '.min.css',
      })
    )
    .pipe(app.gulp.dest(app.path.build.styles));
};
