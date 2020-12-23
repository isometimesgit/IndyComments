chrome.storage.local.get({ postFormat: false }, (store) => {
    document.querySelector("#post-format").checked = store.postFormat
});
document.querySelector('#post-format').onchange = function (e) {
    chrome.storage.local.set({
        postFormat: e.target.checked ? true : false
    });
}