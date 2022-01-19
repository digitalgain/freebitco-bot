"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require("puppeteer");
const moment = require("moment");
const process = require("process");
const minimist = require("minimist");
const defaultTimeout = 180000;
const logInfo = (message) => {
    const now = moment().format();
    message = (`${now} | ${message}`);
    console.log(message);
};
const launch = (auth) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer.launch({
        headless: auth.headless,
		args: ['--no-sandbox'],
        defaultViewport: null,
        devtools: false
    });
    const balance = yield roll(browser, auth);
    yield browser.close();
    logInfo('Waiting next roll');
    yield new Promise(resolve => setTimeout(resolve, 3600000));
    launch(auth);
});
const roll = (browser, auth) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = yield browser.newPage();
        page.setDefaultTimeout(defaultTimeout);
        yield page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36');
        logInfo('Loading FreeBitco.in');
        yield page.goto('https://freebitco.in', { waitUntil: 'networkidle0' });
        logInfo('Logging in');
        yield page.click('li.login_menu_button > a');
        yield page.waitForSelector('#login_form', { visible: true });
        yield page.type('#login_form_btc_address', auth.username);
        yield page.type('#login_form_password', auth.password);
        let navi = page.waitForNavigation({ waitUntil: 'networkidle0' });
        yield page.$eval('#login_button', element => element.click());
        yield navi;
        let balance;
        if (auth.debug === false) {
            yield page.waitForSelector('#free_play_form_button', { visible: true });
            logInfo('Rolling');
            yield page.$eval('#free_play_form_button', el => el.click());
            yield page.waitForSelector('#free_play_result', { visible: true });
            const result = yield page.$eval('#free_play_result', el => el.textContent);
            logInfo(String(result).trim());
            balance = yield page.$eval('#balance_small', el => el.textContent);
        }
        logInfo('Balance: ' + balance);
        logInfo('Logging out');
        navi = page.waitForNavigation({ waitUntil: 'networkidle0' });
        yield page.click('a.logout_link');
        yield navi;
        yield page.close();
        return Number(balance);
    }
    catch (err) {
        logInfo(err);
        return yield roll(browser, auth);
    }
});
const min = minimist(process.argv);
if (min.p === undefined || min.u === undefined)
    throw new Error("Undefined username or password");
console.log('FREEBITCO-bot');
console.log('>> https://digitalgain.net/freebitco-bot.php');
launch({
    username: min.u,
    password: min.p,
    headless: min.h === undefined,
    debug: min.d !== undefined
});
