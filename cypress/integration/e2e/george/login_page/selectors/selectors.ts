export const LOGIN_PAGE_ELEMENTS = Object.freeze({
    languageButton: '.lang-item-label',
    loginButton: '.ladda-label',
    inputNickNameToolBar: '//*[@id="input.nickname"]',
    inputDays: '//*[@id="input.apin_day"]',
    checkBox: '[type="checkbox"]',
    monthList: '//*[@id="input.apin_month"]',

});

export const ERROR_MESSAGES_LOGIN = Object.freeze({
    MessageWrongNickNameLengthNumber: '//*[@id="widgetsDiv"]/nickname/app-widget/div/div/div/div/ng-transclude/ng-container/app-bubble-error/p/span',
    errorMessageBadCredentials: '//*[@id="widgetsDiv"]/div/div/div[1]/div',
    errorMessageIncorrectDateInput: '//*[@id="widgetsDiv"]/apin/app-widget/div/div/div/div/ng-transclude/ng-container/app-bubble-error/p',
});
