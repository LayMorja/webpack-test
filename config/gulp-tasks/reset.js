import { deleteAsync } from 'del';

export const reset = () => {
  deleteAsync(`${app.path.rootFolder.toLowerCase()}.zip`);
  return deleteAsync(app.path.clean);
};
