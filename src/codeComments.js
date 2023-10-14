function parseCodeComments(code) {
    const comments = code.match(/\/\/.*|\/\*[\s\S]*?\*\//g);
    return comments || [];
}

module.exports = {
    parseCodeComments
};