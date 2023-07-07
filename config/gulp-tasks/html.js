import fileinclude from 'gulp-file-include';
import minifyHtml from 'gulp-minify-html';
import typography from 'gulp-typograf';
import version from 'gulp-version-number';
import gulpWebpHtmlNosvg from 'gulp-webp-html-nosvg';

export const html = function () {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      fileinclude({
        prefix: '@',
      })
    )
    .pipe(
      version({
        value: '%DT%',
        append: {
          key: '_v',
          to: ['js', 'css'],
        },
      })
    )
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.replace(/@files\//g, './'))
    .pipe(app.plugins.replace(/@temp\//g, 'temp/'))
    .pipe(app.plugins.replace('NEW_PROJECT_NAME', `${app.path.rootFolder}`))

    .pipe(
      typography({
        locale: ['ru', 'en-US'],
        htmlEntity: {
          type: 'name',
        },
      })
    )

    .pipe(gulpWebpHtmlNosvg())
    .pipe(app.plugins.if(app.isBuild, minifyHtml()))
    .pipe(app.gulp.dest(app.path.build.html));
};
