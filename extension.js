const vscode = require('vscode');
const path = require('path');

function showError(message) {
    const outputChannel = vscode.window.createOutputChannel('markdownPreviewAtStartup');
    outputChannel.appendLine(`[ERROR] ${message}`);
    outputChannel.show();
}

async function activate(context) {
    const config = vscode.workspace.getConfiguration('markdownPreviewAtStartup');
    if (!config) {
        return;
    }

    const filepath = config.get('markdownFilePath');
    if (!filepath) {
        showError('Failed to load the configuration for markdownPreviewExtension.markdownFilePath');
        return;
    }

    let filePath;
    if (vscode.workspace.workspaceFolders?.length > 0) {
        const workspaceFolderPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
        filePath = path.join(workspaceFolderPath, filepath);
    } else {
        filePath = path.isAbsolute(filepath)
            ? filepath
            : path.join(context.extensionPath, filepath);
    }

    const uri = vscode.Uri.file(filePath);
    try {
        await vscode.commands.executeCommand('markdown.showPreview', uri);
    } catch (err) {
        showError(`Failed to open Markdown preview: ${err.message}`);
    }
}

exports.activate = activate;
