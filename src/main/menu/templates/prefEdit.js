export default function (keybindings) {
  return {
    label: '编辑',
    submenu: [{
      label: '剪切',
      accelerator: keybindings.getAccelerator('edit.cut'),
      role: 'cut'
    }, {
      label: '复制',
      accelerator: keybindings.getAccelerator('edit.copy'),
      role: 'copy'
    }, {
      label: '粘贴',
      accelerator: keybindings.getAccelerator('edit.paste'),
      role: 'paste'
    }, {
      type: 'separator'
    }, {
      label: '全选',
      accelerator: keybindings.getAccelerator('edit.select-all'),
      role: 'selectAll'
    }]
  }
}
