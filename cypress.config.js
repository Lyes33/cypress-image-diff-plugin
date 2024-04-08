const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);
    },
  },
};