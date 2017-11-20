/**
 * This file should contain only global use regexs
 */

export const israelPhones = /^05[0|2|3|4|5|6|8|9]([0-9]{7})$|^0[2|3|4|8|9]([0-9]{7})$|^07[2|3|4|6|7|9]([0-9]{7})$/;
export const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const onlyHebrew = /[\u0590-\u05FF]/;
export const onlyPositiveNumber = /^\d*[1-9]\d*$/;
export const alphaNumericWithRange = /^[0-9a-z\u0590-\u05FF]$/;
export const onlyNumbersAndEnglishLettets = /^[0-9a-zA-Z]$/;
export const IDFPrivateNumber = /^[0-9]{5,7}$/;