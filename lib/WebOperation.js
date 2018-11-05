var WebOperation = (function () {

    var webElem;
    var until = protractor.ExpectedConditions;
    var timeoutTime = 30000;

    return {

        findElement: function( cssSelector ) {
            webElem = element( by.css( cssSelector ) );
            return this;        },

        click: function() {
            this.waitUntilClickable();
            webElem.click();
        },

        typeContent: function( text ) {
            this.click();
            webElem.clear();
            browser.actions().sendKeys( text ).perform();
        },

        clear: function () {
            webElem.clear();
        },

        getText: function () {
            this.waitUntilVisiable();
            return webElem.getText().then(function ( text ) {
                return text;
            });
        },

        switchToFrame: function( cssStr ) {
            browser.switchTo().frame(browser.driver.findElement(by.css( cssStr )));
        },

        switchToMain: function() {
            browser.switchTo().defaultContent();
        },

        select: function ( text ) {
            this.waitUntilClickable();
            webElem.element( by.cssContainingText( 'option', text ) ).click();
        },

        isSelected: function () {
            this.waitUntilVisiable();
            return webElem.isSelected().then(function ( value ) {
                return value;
            });
        },

        isVisiable: function ( msg ) {
            browser.wait( until.visibilityOf( webElem ), 8000, msg );
        },

        waitUntilClickable: function () {
            browser.wait( until.elementToBeClickable( webElem ), timeoutTime, "Element " +  webElem.locator() + " is never clickable!" );
        },

        waitUntilVisiable: function () {
            browser.wait( until.visibilityOf( webElem ), timeoutTime, "Element " +  webElem.locator() + " is still invisiable!" );
        }

    };

})();

module.exports = WebOperation;