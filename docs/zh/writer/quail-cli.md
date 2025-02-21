---
outline: deep
---

# Quaily CLI

`quail-cli` 是一个用于与 [Quaily](https://quaily.com) 进行交互的命令行界面（CLI）工具，旨在简化和自动化用户认证、管理帖子以及获取用户详情等操作。

`quail-cli` 会与位于 `https://api.quaily.com` 的 Quaily API 进行交互。

关于这个 CLI 的使用方法，请参考[《🖥️ 介绍 Quail CLI：简化你的工作流》](https://quaily.com/quail-zh/p/introducing-quail-cli-simplifying-your-workflow)。

## 安装

使用以下命令即可安装 `quail-cli`：

```bash
$ go install github.com/quail-ink/quail-cli@latest
```

## 使用方法

安装完成后，你可以通过下面的命令开始使用 `quail-cli`：

```bash
$ quail-cli [command]
```

### 可用命令

- **help**: 查看任意命令的帮助信息。
- **login**: 使用 OAuth 方式登录 Quaily。
- **me**: 获取当前用户的信息。
- **post**: 创建、更新、删除或获取帖子。

### 全局参数

- `--api-base string`: Quaily API 的基础 URL（默认为 `https://api.quaily.com`）。
- `--auth-base string`: Quaily Auth 的基础 URL（默认为 `https://quaily.com`）。
- `--config string`: 配置文件路径（默认为 `$HOME/.config/quail-cli/config.yaml`）。
- `--format string`: 指定输出格式，可选 `human`（可读格式）或 `json`（默认为 `human`）。
- `-h, --help`: 显示 `quail-cli` 的帮助信息。

## 使用示例

### 在 Quaily 中进行认证

```bash
$ quail-cli login
```

该命令会启动 OAuth 流程来完成 Quaily 的身份验证。请按照以下步骤进行：

1. 访问终端中提示的 URL。
2. 授权该应用程序访问你的账户。

### 获取当前用户信息

```bash
$ quail-cli me
```

此命令会获取当前已认证用户的相关信息。

### 帖子操作

#### 创建或更新帖子 (Upsert)

```bash
$ quail-cli post upsert your_markdown_file.md -l your_list_slug
```

`quail-cli` 会从给定的 Markdown 文件中读取 Frontmatter 信息来创建或更新帖子。若帖子不存在则自动创建，若已存在则更新。

下面是一个 Markdown 文件示例：

```markdown
---
title: "Here is the title"
slug: your-post-slug
datetime: 2024-09-30 18:42
summary: "This is a summary of the post."
tags: tag1, tag2, tag3
cover_image_url: "your-image-url.jpg"
---

> 任何足够先进的技术都与魔术无异。
>
> —— 阿瑟·克拉克 (Arthur C. Clarke)

这是一篇帖子正文的内容。

    int main() {
        printf("Hello, World!");
        return 0;
    }

## 章节标题

这是文章的最后一个部分。
```

#### 发布/取消发布/投递/删除帖子

```bash
$ quail-cli post publish -l your_list_slug -p your_post_slug
```

```bash
$ quail-cli post unpublish -l your_list_slug -p your_post_slug
```

```bash
$ quail-cli post deliver -l your_list_slug -p your_post_slug
```

```bash
$ quail-cli post delete -l your_list_slug -p your_post_slug
```

## 配置

默认情况下，`quail-cli` 会从 `$HOME/.config/quail-cli/config.yaml` 读取配置文件。你也可以通过 `--config` 参数指定其他配置文件路径。

```bash
$ quail-cli --config /path/to/config.yaml
```

### 配置文件示例

```yaml
# 不要修改 `app` 部分，quail-cli 会自动管理它。
app:
  access_token: ""
  expiry: ""
  refresh_token: ""
  token_type: ""
post:
  # frontmatter_mapping 用于映射 frontmatter 中的键
  # 在下面的示例中：
  # 你可以在 frontmatter 中使用 `featureImage`，并将其映射到 `cover_image_url`
  frontmatter_mapping:
    cover_image_url: featureImage
```