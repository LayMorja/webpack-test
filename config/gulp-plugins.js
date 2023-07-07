import gulpIf from 'gulp-if';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import replace from 'gulp-replace';

export const plugins = {
  notify,
  plumber,
  if: gulpIf,
  replace,
};
