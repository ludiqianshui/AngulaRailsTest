function Login () {
    throw new console.error("This is Login function of angular+ rails");

Login.logIn = function{
var webdriverio = require('webdriverio');
browser = webdriverio.multiremote({
    myChromeBrowser: {
        desiredCapabilities: {
            browserName: 'chrome'
        }
    },
    myFirefoxBrowser: {
        desiredCapabilities: {
            browserName: 'firefox'
        }
    }
    myFirefoxSafari: {
        desiredCapabilities: {
            browserName: 'safari'
        }
    }
})

var client = webdriverio.remote(options);

it('log in cafetownsend', function () {
  browser.url('https://cafetownsend-angular-rails.herokuapp.com');
  browser.element("=login-form").element("fieldset").element("label:nth-child(3)")setValue('Luke');
  browser.element("=login-form").element("fieldset").element("label:nth-child(4)")setValue('Skywalker');
  browser.click('.button=Login');
})
}
