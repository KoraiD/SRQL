chrome.browserAction.onClicked.addListener(function(tab) { 
  
  alert('icon clicked')
// TODO: add message for popup page -> log event with Rollbar!
chrome.tabs.create({url: chrome.extension.getURL('background.html')});
});


// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
  // Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
    // If the tabs url starts with "http://specificsite.com"...
    if (tab.url.match('https://rollbar.com/DavidK_test/all/rql/?projects=432118&graph_type=line') > -1) {
        // ... show the page action.
        //TODO: redesign -> if on Rollbar RQL then show button
    }
};
