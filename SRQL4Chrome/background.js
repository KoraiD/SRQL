chrome.browserAction.onClicked.addListener(function(tab) { 
  Rollbar.info("User clicked on icon");
  
  if (tab.url == 'https://rollbar.com/DavidK_test/all/rql/?projects=432118&graph_type=line') {
    Rollbar.debug("tab url match");
  }
  Rollbar.debug(tab.url);
  //console.log(tab)
  chrome.tabs.create({url: chrome.extension.getURL('popup.html')});
});