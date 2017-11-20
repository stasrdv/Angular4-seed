/**
 * This file is responsible for window object management
 */

import { Injectable } from "@angular/core";

@Injectable()
export class windowRef {

    // Get native window object
    get nativeWindow(): any {
        return _window();
    }

    // Returns if its moblie screen
    get isMobileScreen(): boolean {
        return _isMobileScreen();
    }
}

function _window(): any {
    return window;
}
function _isMobileScreen(): any {
    return window.screen.width < 768;
}