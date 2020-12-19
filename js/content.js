chrome.storage.local.get(defaultSettings, (settings) => {
    setInterval(() => {
        walkComments(settings)
    }, 2000)
})
function walkComments(settings) {
    document.querySelectorAll('span.comment-username').forEach((username) => {
        formatComment(username.parentElement.parentElement)
    })
}
function formatComment(comment) {
    let body = comment.querySelector('.comment-body');
    body.innerHTML = body.innerHTML.replace(/<br\s*[\/]?>/gi, '\n')
    body.innerHTML = body.textContent;
}
