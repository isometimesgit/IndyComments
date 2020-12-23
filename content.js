function walkComments() {
    document.querySelectorAll('.comment-list-wrapper .comment-body').forEach((body) => {
        body.innerHTML = body.innerHTML.replaceAll('<br>', '\n')
        body.innerHTML = body.textContent;
    })
}
function formatCharsToUnicodeEqu(s) {
    return s.replaceAll('http://','')
	.replaceAll('https://', '')
	.replaceAll('&', String.fromCharCode(65286))
        .replaceAll('\'', String.fromCharCode(712))
        .replaceAll('/', String.fromCharCode(10187))
        .replaceAll('\\', String.fromCharCode(10189))
        .replaceAll('>', String.fromCharCode(65310))
        .replaceAll('<', String.fromCharCode(65308))
}
// format text on posting
chrome.storage.local.get({ 'postFormat': false }, (store) => {
    if (store.postFormat) {
        document.addEventListener('change', function (e) {
            if (e.target.matches('.post-new-comment textarea')) {
                e.target.value = formatCharsToUnicodeEqu(e.target.value);
            }
        }, false);
    }
});
// format text on displaying
setTimeout(walkComments, 1000)
setInterval(walkComments, 5000)
