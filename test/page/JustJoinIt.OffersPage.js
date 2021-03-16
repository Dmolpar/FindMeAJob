class JustJoinItOffersPage {

    get pageUrl() { return 'https://justjoin.it/offers/' }
    get nameInput() { return $("//input[@name='name']") }
    get emailInput() { return $("//input[@name='email']") }
    get applyButton()  { return $("//span[contains(.,'Apply')]") }
    get introduceInput() { return $("//textarea[@name='message']") }
    get uploadCVDialog()  { return $("input[accept='application/pdf']") }
    get concentCheckBox()  { return $("//label[contains(.,'Processing data in future recruitment')]") }
    get acceptTermsButton() {return $(".MuiBox-root-51>button")}

    setNameInputValue(value='Dmytro') {
        browser.waitUntil(() => this.nameInput.isExisting())
        this.nameInput.scrollIntoView()
        browser.waitUntil(() => this.nameInput.isDisplayed())
        this.nameInput.click()
        browser.waitUntil(() => this.nameInput.isFocused())
        this.nameInput.clearValue()
        for (const char of value) {  
            this.nameInput.addValue(char)
            }
    }

    setEmailInputValue(value='dmolpa@gmail.com') {
        browser.waitUntil(() => this.emailInput.isDisplayed())
        this.emailInput.click()
        browser.waitUntil(() => this.emailInput.isFocused())
        this.emailInput.clearValue()
        for (const char of value) {  
            this.emailInput.addValue(char)
            }
    }

    setIntroduceInputValue(value) {
        browser.waitUntil(() => this.introduceInput.isDisplayed())
        this.introduceInput.click()
        browser.waitUntil(() => this.introduceInput.isFocused())
        this.introduceInput.clearValue()
        for (const char of value) {  
            this.introduceInput.addValue(char)
            }
    }

    attachCV(filePath) {
        browser.execute((el) => el.style.display = 'block', this.uploadCVDialog)
        this.uploadCVDialog.waitForDisplayed()
        this.uploadCVDialog.setValue(filePath)
    }

    checkConcentCheckBox() {
        this.concentCheckBox.click()
    }

    clickApplyButton() {
        if (this.acceptTermsButton.isExisting() === true) {
            this.acceptTermsButton.waitForDisplayed()
            this.acceptTermsButton.moveTo()
            this.acceptTermsButton.click()
        }
        this.applyButton.click()
    }
}

module.exports = new JustJoinItOffersPage()