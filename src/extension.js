const vscode = require('vscode');
const fs = require('fs');
const { parseCodeComments } = require('./codeComments');

function activate(context) {
    let disposable = vscode.commands.registerCommand('codeScribe.parseComments', () => {
        const filePath = 'sample.js'; // Change to your file's path

        if (fs.existsSync(filePath)) {
            const code = fs.readFileSync(filePath, 'utf8');
            const comments = parseCodeComments(code);

            if (comments.length > 0) {
                vscode.window.showInformationMessage(`Found ${comments.length} comments.`);
            } else {
                vscode.window.showInformationMessage('No comments found.');
            }
        } else {
            vscode.window.showInformationMessage('File not found.');
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {
    // This method is called when your extension is deactivated.
}

module.exports = {
    activate,
    deactivate
};