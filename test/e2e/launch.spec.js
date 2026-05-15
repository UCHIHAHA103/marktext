const { expect, test } = require('@playwright/test')
const { launchElectron } = require('./helpers')

test.describe('Check Launch MarkText', async () => {
  let app = null
  let page = null

  test.beforeAll(async () => {
    const { app: electronApp, page: firstPage } = await launchElectron()
    app = electronApp
    page = firstPage
  })

  test.afterAll(async () => {
    // contextIsolation 启用后 app.close() 会等待 IPC 响应导致超时，直接强制退出
    await app.evaluate(({ app }) => app.exit(0)).catch(() => {})
  })

  test('Empty MarkText', async () => {
    const title = await page.title()
    expect(/^MarkText|Untitled-1 - MarkText$/.test(title)).toBeTruthy()
  })
})
