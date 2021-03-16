class JustJoinItTestingPage {

    get pageUrl()       { return 'https://justjoin.it/all/testing' }
    get searchInput()   { return $(".MuiInputBase-inputAdornedStart") }
    get jobOffers()     { return $$(".css-1kkqsk3") }
    
    open() {
        browser.url(this.pageUrl)
        browser.maximizeWindow()
    }

    setSearchInputValue(value='') {
        browser.waitUntil(() => this.searchInput.isDisplayed())
        this.searchInput.click()
        browser.waitUntil(() => this.searchInput.isFocused())
        this.searchInput.clearValue()
        for (const char of value) {  
            this.searchInput.addValue(char)
            }
    }

    searchFor(value) {
        this.setSearchInputValue(value)
        browser.keys('Enter')
    }

    clickNthOffer(offerNumber=0) {
        browser.waitUntil(() => this.jobOffers[offerNumber].isDisplayed())
        this.jobOffers[offerNumber].click()
    }
}

module.exports = new JustJoinItTestingPage()
