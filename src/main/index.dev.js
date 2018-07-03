/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Set environment for development
process.env.NODE_ENV = 'development';

import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: false });

// Install extensions
require('electron').app.on('ready', () => {
  // Vue JS Devtools
  installExtension(VUEJS_DEVTOOLS)
      .then( (name) => { console.log(`Installed extension: ${name}`) } )
      .catch( (err) => { console.warn('Unable to install `vue-devtools`: \n', err) } );
});

// Require `main` process to boot app
require('./index');
