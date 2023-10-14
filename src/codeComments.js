function parseCodeComments(code, language) {
    let commentSyntax;

    switch (language) {
        case 'javascript':
            commentSyntax = /\/\/.*|\/\*[\s\S]*?\*\//g;
            break;
        case 'python':
            commentSyntax = /#.*|\'\'\'[\s\S]*?\'\'\'|\"\"\"[\s\S]*?\"\"\"/g;
            break;
        default:
            throw new Error(`Unsupported language: ${language}`);
    }

    const comments = code.match(commentSyntax);
    return comments || [];
}
