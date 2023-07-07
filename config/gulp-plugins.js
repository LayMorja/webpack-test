import gulpIf from 'gulp-if';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

export const plugins = {
  notify,
  plumber,
  if: gulpIf,
  replace,
  rename,
};
