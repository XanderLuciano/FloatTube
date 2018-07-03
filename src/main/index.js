import { app, BrowserWindow, dialog } from 'electron'

if (process.env.NODE_ENV !== 'development') {
    import('path').then( (path) => {
        global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\');
    });
}

let mainWindow;
const winURL = ( process.env.NODE_ENV === 'development' )
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

function createWindow () {
    mainWindow = new BrowserWindow({
        title: 'FloatTube',
        alwaysOnTop: true,
        height: 563,
        width: 1000,
        minHeight: 360,
        minWidth: 360,
        useContentSize: true,
    });

    mainWindow.loadURL(winURL);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
