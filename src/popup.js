"use strict";
window.onload = function () {
    const button = document.getElementById('changeBtn');
    const inputField = document.getElementById('customUserAgent');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        console.log('Input Value: ' + inputField.value);
        chrome.runtime.sendMessage({ changeUserAgent: true, customUserAgent: inputField.value });
    });
};
