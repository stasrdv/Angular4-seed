/**
 * This file is responsible for browser action
 */

import { Injectable } from "@angular/core";

@Injectable()
export class BrowsersManager {

    /**
     * Check if its safari mobile
     */
    isSafariMobile(): RegExpMatchArray {
       return _isSafariMobile();
    }

    /**
     * Check if its IE browser
     */
    isIEBrowser(): boolean {
        return _isIEBrowser();
    }
}

function _isSafariMobile(): RegExpMatchArray {
    return navigator.userAgent.match(/(iPod|iPhone|iPad)/)
        && navigator.userAgent.match(/AppleWebKit/);
}

function _isIEBrowser(): boolean {
    return window.navigator.msSaveBlob != undefined;
}