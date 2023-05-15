chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log("blocked 1 ", details.url);
    return { cancel: true };
  },
  { urls: ads },
  ["blocking"]
);
