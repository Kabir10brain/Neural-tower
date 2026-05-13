const { app, BrowserWindow } = require('electron');

function createWindow() {

  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 1000,
    minHeight: 700,

    frame: true,

    autoHideMenuBar: true,

    icon: __dirname + '/icon.ico',

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {

  createWindow();

  app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }

  });

});

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit();
  }

});