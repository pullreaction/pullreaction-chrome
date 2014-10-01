
var createProperties = {
    contexts: ['all'],
    id:       'contextMenuItemCreate',
    title:    'Add to Pull Reaction',
    type:     'normal'
};
var contextMenuItemCreate = chrome.contextMenus.create(createProperties, function() {
    /**
     * TODO: chrome.runtime.lastError object handling when something goes
     *       wrong during contextMenu creation process
     *
     *       if (typeof chrome.runtime.lastError != 'undefined') {
     *          ...
     *       }
     */
});
