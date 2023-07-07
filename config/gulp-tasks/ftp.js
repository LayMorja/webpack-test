import util from 'gulp-util';
import FtpConnection from 'vinyl-ftp';
import { configFTP } from '../gulp-settings.js';

export const deploy = () => {
  configFTP.log = util.log;
  const conn = FtpConnection.create(configFTP);

  return app.gulp
    .src(app.path.distFolder)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'DEPLOY',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(conn.dest(`/${app.path.ftp}/${app.path.rootFolder.toLowerCase()}`));
};
