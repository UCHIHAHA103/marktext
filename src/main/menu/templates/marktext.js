import { app, Menu } from 'electron'
import { showAboutDialog } from '../actions/help'
import * as actions from '../actions/marktext'

// macOS only menu.

export default function (keybindings) {
  return {
    label: 'MarkText',
    submenu: [{
      label: '关于 MarkText',
      click (menuItem, browserWindow) {
        showAboutDialog(browserWindow)
      }
    }, {
      label: '检查更新...',
      click (menuItem, browserWindow) {
        actions.checkUpdates(browserWindow)
      }
    }, {
      label: '偏好设置',
      accelerator: keybindings.getAccelerator('file.preferences'),
      click () {
        actions.userSetting()
      }
    }, {
      type: 'separator'
    }, {
      label: '服务',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: '隐藏 MarkText',
      accelerator: keybindings.getAccelerator('mt.hide'),
      click () {
        Menu.sendActionToFirstResponder('hide:')
      }
    }, {
      label: '隐藏其他',
      accelerator: keybindings.getAccelerator('mt.hide-others'),
      click () {
        Menu.sendActionToFirstResponder('hideOtherApplications:')
      }
    }, {
      label: '显示全部',
      click () {
        Menu.sendActionToFirstResponder('unhideAllApplications:')
      }
    }, {
      type: 'separator'
    }, {
      label: '退出 MarkText',
      accelerator: keybindings.getAccelerator('file.quit'),
      click: app.quit
    }]
  }
}
