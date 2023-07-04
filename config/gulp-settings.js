import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const appFolder = './app';
const distFolder = './dist';

export const path = {
    dist: {
        html: distFolder + '/',
        js: distFolder + '/js/',
        styles: distFolder + '/styles/',
        images: distFolder + '/img/',
        fonts: distFolder + '/fonts/',
        assets: distFolder + '/assets/',
    },
    app: {
        html: appFolder + '/*.html',
        js: appFolder + '/js/index.js',
        styles: appFolder + '/styles/*.scss',
        images: [appFolder + '/img/**/*.{jpg,jpeg,png,gif,webp}',
                appFolder + '/temp/**/*.{jpg,jpeg,png,gif,webp}'],
        fonts: appFolder + '/fonts/*.*',
        assets: appFolder + '/assets/**.*',
        svg: appFolder + '/img/svg/*.svg'
    },
    clean: distFolder,
    distFolder,
    appFolder,
    rootFolder,
    ftp: './www/laymorja.ru/'
}

export const configFTP = {
    host: '31.31.196.183',
    user: 'u2014622',
    password: 'ZgX7YC35Efb0aF6a',
    parallel: 10
}