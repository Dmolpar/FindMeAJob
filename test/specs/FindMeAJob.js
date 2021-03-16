const assert = require('assert')

const JustJoinItHomePage = require('../page/JustJoinIt.HomePage.js')
const JustJoinItOffersPage = require('../page/JustJoinIt.OffersPage.js')
const JustJoinItTestingPage = require('../page/JustJoinIt.TestingPage.js')

describe('JustJoin.It homepage', () => {

    it('redirect user to the Testing page by clicking the Testing button', () => {
        JustJoinItHomePage.open()
        JustJoinItHomePage.clickTestingButton()
        assert.strictEqual(browser.getUrl().includes(JustJoinItTestingPage.pageUrl), true)
    })

    it('should find a job offer', () => {
        JustJoinItTestingPage.open()
        JustJoinItTestingPage.searchFor('Test Automation')
        JustJoinItTestingPage.searchFor('Testing')
        JustJoinItTestingPage.searchFor('Automated Testing')
        assert.strictEqual(JustJoinItTestingPage.jobOffers[0].isExisting(), true)
    })

    it('should open the first offer by clicking it', () => {
        // depends on the previous test
        JustJoinItTestingPage.clickNthOffer(0)
        assert.strictEqual(browser.getUrl().includes(JustJoinItOffersPage.pageUrl), true)
    })

    it('apply for a job by filling in required forms', () => {
        // depends on the previous tests
        JustJoinItOffersPage.setNameInputValue('Dmytro Parkhomenko')
        JustJoinItOffersPage.setEmailInputValue('dmolpa@gmail.com')
        JustJoinItOffersPage.setIntroduceInputValue('This application is made by an automated software. https://github.com/Dmolpar/FindMeAJob')
        JustJoinItOffersPage.attachCV('/home/dev/Documents/wdio/Apply for a job/CV.pdf')
        JustJoinItOffersPage.checkConcentCheckBox()
        JustJoinItOffersPage.clickApplyButton()
        browser.pause(100000)
    })

})