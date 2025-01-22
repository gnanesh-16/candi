import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

export class AppUpdater {
  constructor() {
    log.transports.file.level = 'debug'
    autoUpdater.logger = log
    autoUpdater.checkForUpdatesAndNotify()

    autoUpdater.on('update-available', () => {
      log.info('Update available')
    })

    autoUpdater.on('update-downloaded', () => {
      log.info('Update downloaded')
    })

    autoUpdater.on('error', (err: Error) => {
      log.error('Error in auto-updater: ' + err)
    })
  }
}