chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (
      details.tabId !== -1 &&
      details.initiator &&
      details.initiator.startsWith("https://mydramalist.com")
    ) {
      console.log("blocked 1 ", details.url);
      return { cancel: true };
    }
  },
  { urls: ads },
  ["blocking"]
);
