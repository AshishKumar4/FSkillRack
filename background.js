function getClipboard() {
    var pasteTarget = document.createElement("div");
    pasteTarget.contentEditable = true;
    var actElem = document.activeElement.appendChild(pasteTarget).parentNode;
    pasteTarget.focus();
    document.execCommand("Paste", null, null);
    var paste = pasteTarget.innerText;
    actElem.removeChild(pasteTarget);
    return paste;
};

function onClipboardMessage(request, sender, sendResponse) {
    if (request.action === "paste") { //$NON-NLS-0$
        sendResponse({
            paste: getClipboard()
        });
    }
}

chrome.extension.onMessage.addListener(onClipboardMessage);
//http://skillrack.com/faces/candidate/codeexamcenter.xhtml
