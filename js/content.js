chrome.storage.local.get(defaultSettings, (settings) => {
    setInterval(() => {
        hideComments(settings)
    }, 2000)
})
function showComment($comment, show = true) {
    $comment.find('.comment-actions,.comment-body,.comment-replies').toggle(show);
    $comment.find('.indycomments-show-btn').text(show ? 'hide' : 'show');
}
function hideComments(settings) {
    $('span.comment-username').each(function () {
        $comment = $(this);
        if (settings.hideUsers.includes($comment.text())) {
            if (!$comment.parent().find('.indycomments-show-btn').length) {
                showComment($comment.parent().parent(), false);
                $comment.parent().append(
                    '<a href="#" class="indycomments-show-btn" ' +
                    'style="margin-left:.2rem;background:#999;color:#fff;padding:0 .2rem;">' +
                    'show</a>')
            }
        }
    })
}
$(document).on('click', '.indycomments-show-btn', function (e) {
    e.preventDefault()
    $comment = $(this).parent().parent();
    showComment($comment, this.innerText === 'show')
})
$('.post-new-comment textarea').on('change', function (e) {
    this.value = this.value.replace(/https:\/\//g, '')
    this.value = this.value.replace(/http:\/\//g, '')
    this.value = this.value.replace(/&/g, 'and')
    this.value = this.value.replace(/'/g, '"')
    this.value = this.value.replace(/`/g, '"')
    this.value = this.value.replace(/\//g, '|')
    this.value = this.value.replace(/\\/g, '|')
    // this.value = this.value.replace(/  /g, ' ')
})