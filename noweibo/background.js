var currentTab
var hidden = false
var tabid = 0

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "showPageAction") {

        chrome.tabs.query({
                currentWindow: true,
                active: true
            },
            function(tabArray) {
                if (tabArray && tabArray[0]) {
                    chrome.pageAction.setIcon({
                        tabId: tabArray[0].id,
                        path: "icons/noweibooff.png"
                    })
                    tabid = tabArray[0].id
                    chrome.pageAction.show(tabArray[0].id)

                }
            }
        )
    }
})

chrome.pageAction.onClicked.addListener(function(tab) {
    var recov = hidden ? false : true
    chrome.tabs.sendMessage(tab.id, {
        recover: recov
    }, function(response) {
    	chrome.pageAction.setIcon({tabId:tabid,path:recov?"icons/noweibo19.png":"icons/noweibooff.png"})
        hidden = recov
    })
});
