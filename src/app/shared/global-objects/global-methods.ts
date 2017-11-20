/**
 * This file should contain only global wide function
 * 
 * consider to refctor your code to managers
 */

import { Injectable } from "@angular/core";

@Injectable()
export class GlobalMethods {

    // Check israeli ID
    checkID(value: any): boolean {
        if (value.length > 9 || value.length < 5) return false;

        let sum: number = 0;

        for (let i = 0; i < 8; i++) {
            let x = (((i % 2) + 1) * value.charAt(i));
            if (x > 9) {
                let xStr = x.toString();
                x = parseInt(xStr.charAt(0)) + parseInt(xStr.charAt(1))
            }
            sum += x;
        }
        return ((sum + parseInt(value.charAt(8))) % 10 == 0 && value != '000000000') ? true : false;
    }

    // Get the document height
    getDocomentHeight(): number {
        let D: Document = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    // Adds a string divider between 2 strings 
    concatStringWithDivider(strOne: string, strTwo: string, divider: string): string {
        return `${strOne} ${divider} ${strTwo}`;
    }
}