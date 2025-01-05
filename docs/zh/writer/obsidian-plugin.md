---
outline: deep
---

# Obsidian 插件

**[Quaily](https://quaily.com "Quaily Official Website")** 提供了一个 [Obsidian](https://obsidian.md/) 插件，可以在 Obsidian 中使用 Quaily 的发布、取消发布、推送文章等功能。

配合 Obsidian 提供的强大的 Markdown 编辑功能，Quaily 的 Obsidian 插件可以帮助您更好地管理您的文章。

## 安装插件

Quaily 的 Obsidian 插件可以在 Obsidian 社区插件列表中找到。 您可以直接从那里安装它。

1. 打开 Obsidian 的设置页面，然后单击「社区插件」选项卡。
2. 单击「社区插件」选项卡右侧的「浏览」按钮。 将出现一个插件列表。
3. 在插件列表中搜索「Quaily」，然后单击「安装」按钮。

您可能需要再次重新启动，插件才能生效。

更多安装说明请参考[插件主页](https://github.com/quail-ink/obsidian-quail)。

## 配置插件

在安装好插件后，您需要配置插件，才能使用插件提供的功能。

1. 首先打开 Obsidian 的设置页面，然后点击「社区插件」选项卡，找到 Quaily 插件，点击「设置」按钮。
2. 登录 Quaily，完成授权。（您也可以在命令面板中使用 `Quail: Login` 命令）
3. 选择一个列表。

重启 Obsidian，插件即可生效。

## 撰写文章

您可以如同往常一样，在 Obsidian 中撰写文章。当您完成文章撰写后，您可以使用 Quaily 的 Obsidian 插件来发布文章。

在发布之前，需要先按照 Quaily 的要求生成一些文章的摘要

## 生成摘要等元信息

Quaily 提供了 AI 生成文章摘要的功能，您可以使用 Quaily 的 Obsidian 插件来调用这个功能。使用方法如下：

1. 按快捷键 `Ctrl + P`，打开 Obsidian 的命令面板（如果是 macOS 用户，请使用 `Cmd + P`）
2. 输入 Quaily，选择「Quaily: Generate Metadata」命令，按回车键
3. 稍等片刻，Quaily 将会自动为您生成文章的摘要、标签等元信息，并且以 [frontmatter](https://jekyllrb.com/docs/front-matter/) 的形式插入到文章的开头。

您可以在文章的开头看到类似下面的内容：

```yaml
---
slug: "文章的 slug"
datetime: 2021-08-01T00:00:00+08:00
summary: "文章摘要"
tags: "标签1, 标签2"
cover: "文章封面图片的 URL"
---
```

其中，

- `slug` 是文章的 slug，Quaily 会根据这个 slug 来生成文章的 URL。这个 slug 是整个列表唯一的，一般应该是文章标题的英文单词组合。如果您不希望使用这个 slug，可以手动修改。
- `datetime` 是文章的发布时间。
- `summary` 是文章的摘要，您也可以手动修改。
- `tags` 是文章的标签，您也可以手动修改。
- `cover` 是文章的封面图片 URL，您也可以手动修改，但是修改时请注意：
  1. 封面图片必须是一个公开的图片，或者，
  2. 封面图片必须是您的 Obsidian 中的图片，且使用绝对定位路径。请参考下文的「插入图片」一节。

::: tip
您也可以不使用 AI 生成的摘要，而是手动输入摘要。

如果您不需要使用 AI 生成的摘要，可以选择「Quaily: Insert Metadata Template」命令，Obsidian 将会自动插入一个元信息模板，然后在其中手动输入信息。
:::

## 保存文章

当您完成文章的撰写、生成摘要等元信息后，您可以使用 Quaily 的 Obsidian 插件来保存文章：

1. 按快捷键 `Ctrl + P`，打开 Obsidian 的命令面板（如果是 macOS 用户，请使用 `Cmd + P`）
2. 输入 Quaily，选择「Quaily: Save」命令，按回车键
3. 稍等片刻，Quaily 将会自动将文章保存到 Quaily 中。

如果您此时登录到 Quaily，就可以在「[文章列表](https://quaily.com/dashboard)」看到您刚才保存的文章了。

## 发布文章

发布文章将会把一篇文章从「草稿」状态变为「发布」状态，这样，您的文章就可以被大家看到了：

1. 按快捷键 `Ctrl + P`，打开 Obsidian 的命令面板（如果是 macOS 用户，请使用 `Cmd + P`）
2. 输入 Quaily，选择「Quaily: Publish」命令，按回车键
3. 稍等片刻，Quaily 将会自动将文章发布到 Quaily 中，并且弹出文章的访问地址
4. 您可以点击弹出的地址，查看您的文章

## 取消发布

取消发布将会把一篇文章从「发布」状态变为「草稿」状态，这样，您的文章就不会被大家看到了。

具体的操作和发布文章类似，只是在第 2 步中选择「Quaily: Unpublish」命令即可。

## 推送文章

推送文章将会把一篇文章通过邮件推送给你的订阅者。如果您为列表设置了 Telegram 机器人，那么推送文章的同时，机器人也会自动推送文章到您的 Telegram 频道。

具体的操作和发布文章类似，只是在第 2 步中选择「Quaily: Deliver」命令即可。

## 插入图片

如果您帖子中的图像来自本地的 Obsidian 库，Quaily 的 Obsidian 插件可以读取它们，并在保存或发布帖子时自动将它们上传到 Quaily。
您可以使用 Obsidian 的内部链接语法和通用 Markdown 图像语法将图像插入到您的帖子中。

:::tip
将图像上传到 Quaily 后，Quaily 会自动将图像转换为 WebP 格式，并将帖子中的图像链接替换为上传图像的 URL。
:::

**内部链接语法**

它可以是句子中的绝对路径或图像别名。下面是一个示例。

```
![[image-1.png]]

![[images/image-2.png]]
```

上面的代码将在帖子中插入图像 `image-1.png` 和 `image-2.png` 。 在本例中，`image-1.png` 是帖子中唯一具有此名称的文件，`image-2.png` 是 `images` 文件夹下的文件。
您也可以直接从剪贴板粘贴图片，Quaily 会自动处理。

**Markdown 语法**

请使用绝对路径以这种方式插入图像。 下面是一个示例。

假如您的 Obsidian 目录结构如下：

```
- [essay]
  - [images]
    - image-1.png
    - image-2.png
  - [articles]
    - test
```

其中，essay、images、articles 都是文件夹，image-1.png 和 image-2.png 是图片文件，test 是文章文件。

如果希望在 test 中插入图片 image-1.png，您需要使用以下经典语法：

```markdown
![image-1](/essay/images/image-1.png)
```

而不是 Obsidian 语法：

```markdown
![[image-1]]
```

请注意，这里的 `/essay/images/image-1.png` 是绝对定位路径（即从最上层的文件夹开始），而不是相对定位路径。如果您使用相对定位路径，Quaily 的 Obsidian 插件将无法找到图片文件。

---

以上就是 Quaily 的 Obsidian 插件的使用方法。如果您有任何问题，欢迎在 [GitHub Issue](https://github.com/quail-ink/obsidian-quail/issues) 中提出。
