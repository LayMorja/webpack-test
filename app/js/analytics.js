const getAnalytics = function () {
  let counter = 0;
  let isDestroyed = false;

  const listener = () => counter++;

  document.addEventListener('click', listener);

  return {
    destroy() {
      if (!isDestroyed) {
        document.removeEventListener('click', listener);
        isDestroyed = true;
      }
    },

    getClicks() {
      if (!isDestroyed) {
        return counter;
      }
      return 'Analytics has destroyed';
    },
  };
};

window.analytics = getAnalytics;