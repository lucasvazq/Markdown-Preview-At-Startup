# Markdown Preview At Startup

**VS Code Extension:** Allows you to open a markdown preview when the editor starts.

- Extension ID: LucasVazquez.markdown-preview-at-startup
- Marketplace Link: https://marketplace.visualstudio.com/items?itemName=LucasVazquez.markdown-preview-at-startup
- Repository Link: https://github.com/lucasvazq/Markdown-Preview-At-Startup

## Usage

Different Options

<details><summary>settings.json</summary>

```json
{
    "markdownPreviewAtStartup.markdownFilePath": "docs/CUSTOM_README.md"
}
```

</details>

<details><summary>.devcontainer/devcontainer.json</summary>

```json
{
    "customizations": {
        "vscode": {
            "settings": {
                "markdownPreviewAtStartup.markdownFilePath": "docs/CUSTOM_README.md"
            }
        }
    }
}
```

</details>

<details><summary>GUI</summary>

<div align="center">
    <img src="https://github.com/lucasvazq/Markdown-Preview-At-Startup/raw/main/GUI_config_example.png" alt="GUI config example">
</div>

</details>
