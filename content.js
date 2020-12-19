setTimeout(walkComments, 1000)
setInterval(walkComments, 5000)
function walkComments() {
    document.querySelectorAll('.comment-list-wrapper .comment-body').forEach((body) => {
        body.innerHTML = body.innerHTML.replaceAll('<br>', '\n')
        body.innerHTML = body.textContent;
    })
} 