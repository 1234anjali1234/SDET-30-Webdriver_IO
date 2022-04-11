



$(selector).waitForDisplayed({ timeout, reverse, timeoutMsg, interval })
$(selector).waitForClickable({ timeout, reverse, timeoutMsg, interval })


$(selector).selectByAttribute(attribute, value)
$(selector).selectByIndex(index)
$(selector).isSelected()
$(selector).selectByVisibleText(text)




$(selector).dragAndDrop(target, { duration })
$(selector).doubleClick()

//click
$(selector).click({ button, x, y })

//rightClick
await myButton.click({ button: 'right' })
it('should demonstrate a right click passed as string', async () => {
    const myButton = await $('#myButton')
    await myButton.click({ button: 'right' }) // opens the contextmenu at the location of the button
})
it('should demonstrate a right click passed as number while adding an offset', async () => {
    const myButton = await $('#myButton')
    await myButton.click({ button: 2, x: 30, y: 40 }) // opens the contextmenu 30 horizontal and 40 vertical pixels away from location of the button (from the center of element)
})


browser.keys(value)
driver.sendKeyEvent(keycode, metastate)
browser.releaseActions()


browser.elementHover(elementId)
browser.moveToElement(element, xoffset, yoffset)

browser.switchToFrame(id)
browser.switchToParentFrame()
browser.switchToWindow(name)
browser.switchWindow(matcher)
browser.getWindowPosition()



browser.acceptAlert()
browser.dismissAlert()
browser.getAlertText()
browser.sendAlertText(text)


browser.maximizeWindow()

browser.saveScreenshot(filepath)
browser.takeScreenshot()

$(selector).scrollIntoView(scrollIntoViewOptions)















