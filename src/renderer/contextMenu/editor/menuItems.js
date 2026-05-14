import * as contextMenu from './actions'

// NOTE: This are mutable fields that may change at runtime.

export const CUT = {
  label: '剪切',
  id: 'cutMenuItem', // not used yet!
  role: 'cut'
}

export const COPY = {
  label: '复制',
  id: 'copyMenuItem',
  role: 'copy'
}

export const PASTE = {
  label: '粘贴',
  id: 'pasteMenuItem',
  role: 'paste'
}

export const COPY_AS_MARKDOWN = {
  label: '复制为 Markdown',
  id: 'copyAsMarkdownMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.copyAsMarkdown()
  }
}

export const COPY_AS_HTML = {
  label: '复制为 HTML',
  id: 'copyAsHtmlMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.copyAsHtml()
  }
}

export const PASTE_AS_PLAIN_TEXT = {
  label: '粘贴为纯文本',
  id: 'pasteAsPlainTextMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.pasteAsPlainText()
  }
}

export const INSERT_BEFORE = {
  label: '在前面插入段落',
  id: 'insertParagraphBeforeMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.insertParagraph('before')
  }
}

export const INSERT_AFTER = {
  label: '在后面插入段落',
  id: 'insertParagraphAfterMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.insertParagraph('after')
  }
}

export const SEPARATOR = {
  type: 'separator'
}
