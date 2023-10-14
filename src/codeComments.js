function parseCodeComments(code, languageId) {
    let commentRegex;

    if (languageId === 'javascript') {
        commentRegex = /\/\/.*|\/\*[\s\S]*?\*\//g;
    } else if (languageId === 'python') {
        commentRegex = /#.*/g;
    } else {
        return [];
    }

    const comments = code.match(commentRegex);
    return comments || [];
}

module.exports = {
    parseCodeComments
};
