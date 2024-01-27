let customUserAgent = "";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.changeUserAgent) {
    customUserAgent = request.customUserAgent
  }
});

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    if (customUserAgent) {
      console.log('Custom user agent is', customUserAgent);

      const userAgentHeader = details.requestHeaders?.find(h => h.name === "User-Agent");
      userAgentHeader!.value = customUserAgent;
    
      return { requestHeaders: details.requestHeaders };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);