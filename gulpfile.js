import gulp from 'gulp';
import { plugins } from './config/gulp-plugins.js';
import { path } from './config/gulp-settings.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  isFonts: process.argv.includes('--fonts'),
  imagesBuild: process.argv.includes('--images'),
  gulp,
  path,
  plugins,
};

import { css } from './config/gulp-tasks/css.js';
import { files } from './config/gulp-tasks/files.js';
import { fontStyle, otfToTtf, ttfToWoff } from './config/gulp-tasks/fonts.js';
import { deploy } from './config/gulp-tasks/ftp.js';
import { html } from './config/gulp-tasks/html.js';
import { images } from './config/gulp-tasks/images.js';
import { reset } from './config/gulp-tasks/reset.js';
import { sprite } from './config/gulp-tasks/sprite.js';
import { zip } from './config/gulp-tasks/zip.js';

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);
const devTasks = gulp.series(fonts, gulp.parallel(html, css, images, files));

export const dev = gulp.series(reset, devTasks);

export { css, html, reset, otfToTtf, ttfToWoff, fontStyle, deploy, zip, images, files, sprite };
