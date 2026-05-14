import { app, Menu } from 'electron'
import * as actions from '../actions/file'

const dockMenu = Menu.buildFromTemplate([{
  label: '打开...',
  click (menuItem, browserWindow) {
    actions.openFile(browserWindow)
  }
}, {
  label: '清空最近记录',
  click () {
    app.clearRecentDocuments()
  }
}])

export default dockMenu
