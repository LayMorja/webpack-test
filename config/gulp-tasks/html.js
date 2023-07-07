import fileInclude from 'gulp-file-include';
import minifyHTML from 'gulp-minify-html';
import version from 'gulp-version-number';
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';

export const html = () => {
  return (
    app.gulp.src(app.path.source.html)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'HTML',
            message: 'Error: <%= error.message %>',
          })
        )
      )
       .pipe(fileInclude({
          prefix: '@'
       }))
      .pipe(webpHtmlNoSvg())
      .pipe(
        version({
          value: '%MDS%',
          append: {
            key: '_v',
            to: ['js', 'css'],
          },
          output: {
            file: 'config/version.json',
          },
        })
      )
      .pipe(app.plugins.if(app.isBuild, minifyHTML()))
      .pipe(app.gulp.dest(app.path.build.html))
  );
};
