// Set environment for development
process.env.NODE_ENV = 'development';

import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'

// Install `electron-debug` with `devtron`
import electronDebug from 'electron-debug'
electronDebug({ enabled: true, showDevTools: false });

// Install extensions
require('electron').app.on('ready', () => {
  // Vue JS Devtools
  installExtension(VUEJS_DEVTOOLS)
      .then( (name) => { console.log(`Installed extension: ${name}`) } )
      .catch( (err) => { console.warn('Unable to install `vue-devtools`: \n', err) } );
});

// Require `main` process to boot app
require('./index');
