"use strict";

const defaultSettings = {
    hideUsers: [],
    replaceChars: [
        { pattern: 'http:\\\\', replace: '' },
        { pattern: 'https:\\\\', replace: '' },
        { pattern: '\\', replace: '|' },
        { pattern: '/', replace: '|' },
        { pattern: '\'', replace: '"' },
        { pattern: '`', replace: '"' },
        { pattern: '&', replace: ' and ' },
    ]
}
