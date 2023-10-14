const vscode = require('vscode');
const fs = require('fs');
const { parseCodeComments } = require('./codeComments');

function activate(context) {
    let disposable = vscode.commands.registerCommand('codeScribe.parseComments', async () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const languageId = editor.document.languageId;

            if (languageId === 'javascript' || languageId === 'python') {
                const code = editor.document.getText();
                const comments = parseCodeComments(code, languageId);

                if (comments.length > 0) {
                    vscode.window.showInformationMessage(`Found ${comments.length} comments.`);
                } else {
                    vscode.window.showInformationMessage('No comments found.');
                }
            } else {
                vscode.window.showInformationMessage('Unsupported language: ' + languageId);
            }
        } else {
            vscode.window.showInformationMessage('No active editor.');
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
