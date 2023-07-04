import gulp from 'gulp';
import { path } from "./config/gulp-settings.js";
import { plugins } from "./config/gulp-plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    isFonts: process.argv.includes('--fonts'),
    imagesBuild: process.argv.includes('--images'),
    gulp,
    path,
    plugins,
}

import { reset } from "./config/gulp-tasks/reset.js";

export { reset };