import gulpSass from 'gulp-sass';
import dartSass from 'sass';
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
    .pipe(app.gulp.dest(app.path.build.styles));
};
