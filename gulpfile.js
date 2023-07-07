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
import { html } from './config/gulp-tasks/html.js';
import { reset } from './config/gulp-tasks/reset.js';

export { css, html, reset };
