import { ipcMain } from 'electron'
import * as actions from '../actions/view'

export default function (keybindings) {
  const viewMenu = {
    label: '视图(&V)',
    submenu: [{
      label: '命令面板...',
      accelerator: keybindings.getAccelerator('view.command-palette'),
      click (menuItem, browserWindow) {
        actions.showCommandPalette(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'sourceCodeModeMenuItem',
      label: '源代码模式',
      accelerator: keybindings.getAccelerator('view.source-code-mode'),
      type: 'checkbox',
      checked: false,
      click (item, browserWindow, event) {
        if (!event) {
          item.checked = !item.checked
        }
        actions.typeMode(browserWindow, 'sourceCode', item)
      }
    }, {
      id: 'typewriterModeMenuItem',
      label: '打字机模式',
      accelerator: keybindings.getAccelerator('view.typewriter-mode'),
      type: 'checkbox',
      checked: false,
      click (item, browserWindow, event) {
        if (!event) {
          item.checked = !item.checked
        }
        actions.typeMode(browserWindow, 'typewriter', item)
      }
    }, {
      id: 'focusModeMenuItem',
      label: '专注模式',
      accelerator: keybindings.getAccelerator('view.focus-mode'),
      type: 'checkbox',
      checked: false,
      click (item, browserWindow, event) {
        if (!event) {
          item.checked = !item.checked
        }
        actions.typeMode(browserWindow, 'focus', item)
      }
    }, {
      type: 'separator'
    }, {
      label: '显示侧边栏',
      id: 'sideBarMenuItem',
      accelerator: keybindings.getAccelerator('view.toggle-sidebar'),
      type: 'checkbox',
      checked: false,
      click (item, browserWindow, event) {
        if (!event) {
          item.checked = !item.checked
        }
        actions.layout(item, browserWindow, 'showSideBar')
      }
    }, {
      label: '显示标签栏',
      id: 'tabBarMenuItem',
      accelerator: keybindings.getAccelerator('view.toggle-tabbar'),
      type: 'checkbox',
      checked: false,
      click (item, browserWindow, event) {
        if (!event) {
          item.checked = !item.checked
        }
        actions.layout(item, browserWindow, 'showTabBar')
      }
    }, {
      label: '切换目录',
      id: 'tocMenuItem',
      accelerator: keybindings.getAccelerator('view.toggle-toc'),
      click (_, browserWindow) {
        actions.layout(null, browserWindow, 'rightColumn', 'toc')
      }
    }, {
      label: '重新加载图片',
      accelerator: keybindings.getAccelerator('view.reload-images'),
      click (item, focusedWindow) {
        if (focusedWindow) {
          focusedWindow.webContents.send('mt::invalidate-image-cache', {})
        }
      }
    }, {
      type: 'separator'
    }]
  }

  if (global.MARKTEXT_DEBUG) {
    viewMenu.submenu.push({
      label: '开发者工具',
      accelerator: keybindings.getAccelerator('view.toggle-dev-tools'),
      click (item, focusedWindow) {
        if (focusedWindow) {
          focusedWindow.webContents.toggleDevTools()
        }
      }
    })
    viewMenu.submenu.push({
      label: '重新加载窗口',
      accelerator: keybindings.getAccelerator('view.dev-reload'),
      click (item, focusedWindow) {
        if (focusedWindow) {
          ipcMain.emit('window-reload-by-id', focusedWindow.id)
        }
      }
    })
  }

  return viewMenu
}
