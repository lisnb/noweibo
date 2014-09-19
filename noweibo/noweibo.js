function Noweibo() {

	// var hidden = true

    function opNav(op) {
        var nav = document.getElementById('pl_content_top')
        if (nav) {
            nav.hidden = op
        }

    }

    function opTitle(op) {
        var title = document.getElementsByTagName('title')[0]
        if (title) {
            title.innerText = op ? "thinking in python" : "我的首页 微博-随时随地发现新鲜事"
        }
    }

    function opPublisher(op) {
        var publisher = document.getElementById("pl_content_publisherTop")
        if (publisher) {
            publisher.hidden = op
        }

    }

    function opRightBox(op) {
        var rightbox = document.getElementById("Box_right")
        if (rightbox) {
            rightbox.hidden = op
        }
    }

    function opLeftBox(op) {
        var leftbox = document.getElementsByClassName('W_main_l')
        if (leftbox && leftbox[0]) {
            leftbox[0].hidden = op
        }
    }

    function opIm(op) {
        var im = document.getElementById("WB_webim")
        if (im) {
            im.hidden = op
        }
    }

    function weibo(op) {
        opNav(op)
        opTitle(op)
        opPublisher(op)
        opRightBox(op)
        opLeftBox(op)
        opIm(op)
    }

    function listen() {
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            weibo(request.recover)
            sendResponse("xixixi")
            })
    }

    function storage(){
    	chrome.storage.local.get('turn',function(value){
    		if(value.turn == "off"){
    			hidden = false
    		}
    		else{
    			hidden = true
    		}
    	})
    }

    chrome.runtime.sendMessage('showPageAction')
    // console.log(hidden)
    listen()
    //storage()
    weibo(false)

}

Noweibo()
