chrome.runtime.onInstalled.addListener(function(details) {
    var rule = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostSuffix: 'rollbar.com' },
        })
      ],
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
    };
  
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([rule]);
    });
  });

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
  // Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
    // If the tabs url starts with "http://specificsite.com"...
    if (tab.url.match('https://rollbar.com/DavidK_test/all/rql/?projects=432118&graph_type=line') > -1) {
        // ... show the page action.
        chrome.pageAction.show(tabId);
    }
};
