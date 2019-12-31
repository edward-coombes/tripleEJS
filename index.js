const { app, BrowserWindow } = require('electron')
require('./app.js')

let mainWindow = null

function main() {
	//create the browser window, and load content served from the express app
	mainWindow = new BrowserWindow()
	mainWindow.loadURL('http://localhost:' + process.env.LOCALPORT + '/')
	mainWindow.on('close', () => {mainWindow = null})

}

app.on('ready', main)
app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') {
		//handling for mac
		app.quit()
	}
})
