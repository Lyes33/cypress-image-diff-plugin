Cypress visual with cypress image diff

- 1- install cypress:

npm install cypress

- 2- install cypress image dif: 

npm i -D cypress-image-diff-js

- 3- import the cypress image diff plugin in cypress config js: 

const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      return getCompareSnapshotsPlugin(on, config);
    },
  },
};

- 4- import and add cypress image command in e2e js

const compareSnapshotCommand = require("cypress-image-diff-js/command");

compareSnapshotCommand();


- doc: https://cypress.visual-image-diff.dev/getting-started

- testThreshold: permet de rendre l'assertion de comparaison plus flexible en appliquant un seuil plus élevé (la valeur par défaut est 0) :


