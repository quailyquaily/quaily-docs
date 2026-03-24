---
outline: deep
description: Quaily と連携する Quaily CLI
---

# Quaily CLI

`quail-cli` は [Quaily](https://quaily.com) と対話するためのコマンドラインインターフェースです。ユーザー認証、記事管理、ユーザー情報取得などを簡単に自動化できます。

Quaily CLI は `https://api.quaily.com` の Quaily API と通信します。

使い方の概要は「[🖥️ Introducing Quail CLI: Streamline Your Newsletter Workflow](https://quaily.com/blog/p/introducing-quail-cli-streamline-your-newsletter-workflow)」を参照してください。

## インストール

`quail-cli` は次のコマンドでインストールできます。

```bash
$ go install github.com/quailyquaily/quail-cli@latest
```

## 基本的な使い方

インストール後は、次のように呼び出します。

```bash
$ quail-cli [command]
```

### 利用できるコマンド

- **help**: 各コマンドのヘルプを表示
- **login**: OAuth で Quaily にログイン
- **me**: 現在のユーザー情報を取得
- **post**: 記事の作成、更新、削除、取得

### グローバルフラグ

- `--api-base string`: Quaily API のベース URL（デフォルト: `https://api.quaily.com`）
- `--auth-base string`: Quaily Auth のベース URL（デフォルト: `https://quaily.com`）
- `--config string`: 設定ファイルのパス（デフォルト: `$HOME/.config/quail-cli/config.yaml`）
- `--format string`: 出力形式。`human` または `json`（デフォルト: `human`）
- `-h, --help`: `quail-cli` のヘルプを表示

## 使い方

### Quaily へログインする

```bash
$ quail-cli login
```

OAuth ログインが開始されます。表示された案内に従って認証を完了してください。

1. ターミナルに表示された URL を開く
2. アプリケーションを認可する

### 現在のユーザー情報を取得する

```bash
$ quail-cli me
```

現在認証済みのユーザー情報を取得します。

### 記事操作

#### 記事を作成または更新する

```bash
$ quail-cli post upsert your_markdown_file.md -l your_list_slug
```

`quail-cli` は Markdown ファイルの frontmatter を読み取り、記事を作成または更新します。対象記事が存在しなければ新規作成し、存在すれば更新します。

Markdown ファイルの例:

```markdown
---
title: "Here is the title"
slug: your-post-slug
datetime: 2024-09-30 18:42
summary: "This is a summary of the post."
tags: tag1, tag2, tag3
cover_image_url: "your-image-url.jpg"
---

> Any sufficiently advanced technology is indistinguishable from magic.
>
> -- Arthur C. Clarke

This is the body of the post.

    int main() {
        printf("Hello, World!");
        return 0;
    }

## Section Title

This is the last section of the post.
```

#### 記事を公開 / 非公開 / 配信 / 削除する

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

## 設定

デフォルトでは、`quail-cli` は `$HOME/.config/quail-cli/config.yaml` を読み込みます。別ファイルを使う場合は `--config` を指定します。

```bash
$ quail-cli --config /path/to/config.yaml
```

### 設定ファイル例

```yaml
# DO NOT modify `app` section, quail-cli will manage it.
app:
  access_token: ""
  expiry: ""
  refresh_token: ""
  token_type: ""
post:
  # frontmatter_mapping is used to map the frontmatter keys
  # for this example:
  # you can use`featureImage` in the frontmatter and it will be mapped to `cover_image_url`
  frontmatter_mapping:
    cover_image_url: featureImage
```
