import * as actions from '../actions/format'

export default function (keybindings) {
  return {
    id: 'formatMenuItem',
    label: '格式(&O)',
    submenu: [{
      id: 'strongMenuItem',
      label: '粗体',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strong'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'strong')
      }
    }, {
      id: 'emphasisMenuItem',
      label: '斜体',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.emphasis'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'em')
      }
    }, {
      id: 'underlineMenuItem',
      label: '下划线',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.underline'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'u')
      }
    }, {
      type: 'separator'
    }, {
      id: 'superscriptMenuItem',
      label: '上标',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.superscript'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'sup')
      }
    }, {
      id: 'subscriptMenuItem',
      label: '下标',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.subscript'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'sub')
      }
    }, {
      id: 'highlightMenuItem',
      label: '高亮',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.highlight'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'mark')
      }
    }, {
      type: 'separator'
    }, {
      id: 'inlineCodeMenuItem',
      label: '行内代码',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-code'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'inline_code')
      }
    }, {
      id: 'inlineMathMenuItem',
      label: '行内公式',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-math'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'inline_math')
      }
    }, {
      type: 'separator'
    }, {
      id: 'strikeMenuItem',
      label: '删除线',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strike'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'del')
      }
    }, {
      id: 'hyperlinkMenuItem',
      label: '超链接',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.hyperlink'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'link')
      }
    }, {
      id: 'imageMenuItem',
      label: '图片',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.image'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'image')
      }
    }, {
      type: 'separator'
    }, {
      label: '清除格式',
      accelerator: keybindings.getAccelerator('format.clear-format'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'clear')
      }
    }]
  }
}
