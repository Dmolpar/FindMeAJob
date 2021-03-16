class JustJoinItHomePage {

    get pageUrl() { return 'https://justjoin.it/' }
    get testingButton() { return $("a[href='/all/testing']") }
    
    open() {
        browser.url(this.pageUrl)
        browser.maximizeWindow()
    }

    clickTestingButton() {
        browser.waitUntil(() => this.testingButton.isDisplayed())
        this.testingButton.click()
    }
}

module.exports = new JustJoinItHomePage()