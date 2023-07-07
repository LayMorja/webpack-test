import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const srcFolder = './app';
const buildFolder = './public';

export const path = {
  build: {
    html: buildFolder + '/',
    js: buildFolder + '/js/',
    styles: buildFolder + '/styles/',
    images: buildFolder + '/img/',
    fonts: buildFolder + '/fonts/',
    assets: buildFolder + '/assets/',
  },
  src: {
    html: srcFolder + '/*.html',
    js: srcFolder + '/js/index.js',
    styles: srcFolder + '/styles/*.scss',
    images: [
      srcFolder + '/img/**/*.{jpg,jpeg,png,gif,webp}',
      srcFolder + '/temp/**/*.{jpg,jpeg,png,gif,webp}',
    ],
    fonts: srcFolder + '/fonts/*.*',
    assets: srcFolder + '/assets/**.*',
    svg: srcFolder + '/img/svg/*.svg',
    svgicons: srcFolder + '/img/icons/*.svg',
    files: srcFolder + '/files/**/*.*',
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  zip: buildFolder + '/**/*.*',
  ftp: './www/laymorja.ru/',
};

export const configFTP = {
  host: '31.31.196.183',
  user: 'u2014622',
  password: 'ZgX7YC35Efb0aF6a',
  parallel: 10,
};
