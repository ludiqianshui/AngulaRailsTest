var BrowserOperation = (function () {

    return {

        startBrowser: function( isNonAngular ) {
            browser.ignoreSynchronization = isNonAngular;
            return this;
        },

        navigateTo: function ( url ) {
            browser.get( url );
        }

    };

})();

module.exports = BrowserOperation;