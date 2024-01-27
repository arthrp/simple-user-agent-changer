"use strict";
let customUserAgent = "";
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.changeUserAgent) {
        customUserAgent = request.customUserAgent;
    }
});
chrome.webRequest.onBeforeSendHeaders.addListener((details) => {
    var _a;
    if (customUserAgent) {
        console.log('Custom user agent is', customUserAgent);
        const userAgentHeader = (_a = details.requestHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === "User-Agent");
        userAgentHeader.value = customUserAgent;
        return { requestHeaders: details.requestHeaders };
    }
}, { urls: ["<all_urls>"] }, ["blocking", "requestHeaders"]);
