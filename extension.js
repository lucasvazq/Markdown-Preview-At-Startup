const vscode = require('vscode');
const path = require('path');

function activate() {
    const config = vscode.workspace.getConfiguration('markdownPreviewAtStartup');
    if (!config) {
        return;
    }
    const filepath = config.get('markdownFilePath');
    if (!filepath) {
        return;
    }
    const filePath = path.join(vscode.workspace.workspaceFolders, filepath);
    const uri = vscode.Uri.file(filePath);
    vscode.commands.executeCommand('markdown.showPreview', uri);
}

exports.activate = activate;
