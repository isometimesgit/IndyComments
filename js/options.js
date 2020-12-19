"use strict";
const saveOptions = _ => {
    chrome.storage.local.set({
        hideUsers: Util.split($("#hide-users").val())
    });
};
const restoreOptions = _ => {
    chrome.storage.local.get(defaultSettings, (settings) => {
        $('#hide-users').val(Util.join(settings.hideUsers))
    });
};
document.addEventListener('DOMContentLoaded', _ => {
    restoreOptions();
    $(document).on('change', 'input,textarea', saveOptions);
});
