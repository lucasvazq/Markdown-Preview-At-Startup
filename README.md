<span align="center">
    <h1>Markdown Preview At Startup</h1>
</span>

<div align="center">
    <img src="https://github.com/lucasvazq/Markdown-Preview-At-Startup/raw/main/logo.png" height="300px" width="300px" alt="GUI config example">
</div>

<br>

<span align="center">
    <p><b>VS Code Extension</b></p>
</span>
<span align="center">
    <p><i>Allows you to open a markdown preview when the editor starts</i></p>
</span>

## Usage

Different Options

<details><summary>Workspace or User [JSON]</summary>

<br>

`settings.json`

```json
{
    "markdownPreviewAtStartup.markdownFilePath": "docs/CUSTOM_README.md"
}
```

</details>

<details><summary>Dev Containers</summary>

<br>

`./.devcontainer/devcontainer.json`

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

## Info

```yml
Extension ID: LucasVazquez.markdown-preview-at-startup
Marketplace Link: https://marketplace.visualstudio.com/items?itemName=LucasVazquez.markdown-preview-at-startup
Repository Link: https://github.com/lucasvazq/Markdown-Preview-At-Startup
```
