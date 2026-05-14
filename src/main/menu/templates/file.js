import { app } from 'electron'
import * as actions from '../actions/file'
import { userSetting } from '../actions/marktext'
import { showTabBar } from '../actions/view'
import { isOsx } from '../../config'

export default function (keybindings, userPreference, recentlyUsedFiles) {
  const { autoSave } = userPreference.getAll()
  const fileMenu = {
    label: '文件(&F)',
    submenu: [{
      label: '新建标签页',
      accelerator: keybindings.getAccelerator('file.new-tab'),
      click (menuItem, browserWindow) {
        actions.newBlankTab(browserWindow)
        showTabBar(browserWindow)
      }
    }, {
      label: '新建窗口',
      accelerator: keybindings.getAccelerator('file.new-file'),
      click (menuItem, browserWindow) {
        actions.newEditorWindow()
      }
    }, {
      type: 'separator'
    }, {
      label: '打开文件...',
      accelerator: keybindings.getAccelerator('file.open-file'),
      click (menuItem, browserWindow) {
        actions.openFile(browserWindow)
      }
    }, {
      label: '打开文件夹...',
      accelerator: keybindings.getAccelerator('file.open-folder'),
      click (menuItem, browserWindow) {
        actions.openFolder(browserWindow)
      }
    }]
  }

  if (!isOsx) {
    const recentlyUsedMenu = {
      label: '最近打开',
      submenu: []
    }

    for (const item of recentlyUsedFiles) {
      recentlyUsedMenu.submenu.push({
        label: item,
        click (menuItem, browserWindow) {
          actions.openFileOrFolder(browserWindow, menuItem.label)
        }
      })
    }

    recentlyUsedMenu.submenu.push({
      type: 'separator',
      visible: recentlyUsedFiles.length > 0
    }, {
      label: '清空最近记录',
      enabled: recentlyUsedFiles.length > 0,
      click (menuItem, browserWindow) {
        actions.clearRecentlyUsed()
      }
    })
    fileMenu.submenu.push(recentlyUsedMenu)
  } else {
    fileMenu.submenu.push({
      role: 'recentdocuments',
      submenu: [
        {
          role: 'clearrecentdocuments'
        }
      ]
    })
  }

  fileMenu.submenu.push({
    type: 'separator'
  }, {
    type: 'separator'
  }, {
    label: '保存',
    accelerator: keybindings.getAccelerator('file.save'),
    click (menuItem, browserWindow) {
      actions.save(browserWindow)
    }
  }, {
    label: '另存为...',
    accelerator: keybindings.getAccelerator('file.save-as'),
    click (menuItem, browserWindow) {
      actions.saveAs(browserWindow)
    }
  }, {
    label: '自动保存',
    type: 'checkbox',
    checked: autoSave,
    id: 'autoSaveMenuItem',
    click (menuItem, browserWindow) {
      actions.autoSave(menuItem, browserWindow)
    }
  }, {
    type: 'separator'
  }, {
    label: '移动到...',
    accelerator: keybindings.getAccelerator('file.move-file'),
    click (menuItem, browserWindow) {
      actions.moveTo(browserWindow)
    }
  }, {
    label: '重命名...',
    accelerator: keybindings.getAccelerator('file.rename-file'),
    click (menuItem, browserWindow) {
      actions.rename(browserWindow)
    }
  }, {
    type: 'separator'
  }, {
    label: '导入...',
    click (menuItem, browserWindow) {
      actions.importFile(browserWindow)
    }
  }, {
    label: '导出',
    submenu: [
      {
        label: 'HTML',
        click (menuItem, browserWindow) {
          actions.exportFile(browserWindow, 'styledHtml')
        }
      }, {
        label: 'PDF',
        click (menuItem, browserWindow) {
          actions.exportFile(browserWindow, 'pdf')
        }
      }
    ]
  }, {
    label: '打印',
    accelerator: keybindings.getAccelerator('file.print'),
    click (menuItem, browserWindow) {
      actions.print(browserWindow)
    }
  }, {
    type: 'separator',
    visible: !isOsx
  }, {
    label: '偏好设置...',
    accelerator: keybindings.getAccelerator('file.preferences'),
    visible: !isOsx,
    click () {
      userSetting()
    }
  }, {
    type: 'separator'
  }, {
    label: '关闭标签页',
    accelerator: keybindings.getAccelerator('file.close-tab'),
    click (menuItem, browserWindow) {
      actions.closeTab(browserWindow)
    }
  }, {
    label: '关闭窗口',
    accelerator: keybindings.getAccelerator('file.close-window'),
    click (menuItem, browserWindow) {
      actions.closeWindow(browserWindow)
    }
  }, {
    type: 'separator',
    visible: !isOsx
  }, {
    label: '退出',
    accelerator: keybindings.getAccelerator('file.quit'),
    visible: !isOsx,
    click: app.quit
  })
  return fileMenu
}
