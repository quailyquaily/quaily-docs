---
outline: deep
description: Quaily の Obsidian プラグイン
---

# Obsidian プラグイン

**[Quaily](https://quaily.com "Quaily Official Website")** は [Obsidian](https://obsidian.md/) プラグインを提供しており、Obsidian 上から記事の保存、公開、非公開化、ニュースレター配信まで行えます。

Obsidian の強力な Markdown 編集機能と組み合わせることで、投稿管理をより柔軟に進められます。

基本的な使い方は「[📝 Write with Favorite Editor and Publish to Quaily](https://quaily.com/blog/p/write-with-favorite-editor-and-publish-to-quaily)」を参照してください。

## プラグインのインストール

Quaily の Obsidian プラグインは、Obsidian のコミュニティプラグイン一覧にあります。そこから直接インストールできます。

1. Obsidian の設定ページを開き、「Community Plugins」タブを開きます。
2. 右側の「Browse」をクリックするとプラグイン一覧が表示されます。
3. 一覧で「Quaily」を検索し、「Install」をクリックします。

反映のために Obsidian の再起動が必要な場合があります。

手動インストールについては [plugin homepage](https://github.com/quailyquaily/obsidian-quail) を参照してください。

## プラグインの設定

インストール後、機能を使うには設定が必要です。

1. Obsidian の設定ページから「Community Plugins」を開き、Quaily プラグインの「Settings」をクリックします。
2. Quaily にログインし、認可を完了します（コマンドパレットから `Quail: Login` でも可能です）。
3. ドロップダウンから使用するリストを選びます。

その後、Obsidian を再起動すると確実です。

## 記事を書く

記事自体は通常どおり Obsidian で書けます。書き終えたら、Quaily プラグインで保存・公開できます。

公開前には、Quaily の要件に合わせて要約などのメタデータを用意してください。

プラグインが提供する主なコマンドは、Obsidian のコマンドパレットから使えます。

![](https://static.quaily.com/media/jo4uy0en.webp)

### 要約とメタデータの生成

Quaily は AI による要約生成をサポートしており、Obsidian プラグインから呼び出せます。

1. `Ctrl + P`（macOS では `Cmd + P`）でコマンドパレットを開きます。
2. 「Quaily」と入力し、「Quaily: Generate Meta by AI」を選んで Enter を押します。
3. 少し待つと、要約、タグなどのメタデータが [frontmatter](https://jekyllrb.com/docs/front-matter/) 形式で記事の先頭に挿入されます。

記事の先頭には次のような内容が入ります。

```yaml
---
slug: "post-slug"
datetime: 2021-08-01T00:00:00+08:00
summary: "post summary"
tags: "tag1, tag2"
cover_image_url: "URL of post cover image"
---
```

各項目の意味:

- `slug`: 記事 URL を生成するための識別子。リスト内で一意である必要があります
- `datetime`: 公開日時
- `summary`: 記事要約
- `tags`: 記事タグ
- `cover_image_url`: カバー画像 URL。手動で変更できます

`cover_image_url` を変更する場合は、次のどちらかを満たしてください。

1. カバー画像が外部から公開アクセス可能であること
2. Obsidian 内の画像であり、絶対パスで指定されていること。詳しくは後述の「画像の挿入」を参照してください

::: tip
AI 生成を使わず、要約を手動入力しても構いません。

その場合は「Quaily: Insert Metadata Template」を選ぶと、手入力用のメタデータテンプレートが挿入されます。
:::

### 記事を保存する

1. 「Quaily: Save」を実行します。
2. 少し待つと、Quaily に自動保存されます。

この時点で Quaily にログインすると、「[post List](https://quaily.com/dashboard)」で保存された記事を確認できます。

### 記事を公開する

1. 「Quaily: Publish」を実行します。
2. 少し待つと、記事が Quaily に公開され、アクセス URL が表示されます。状態は「Draft」から「Published」に変わります。
3. 結果ダイアログ内で URL をクリックして記事を開くか、「Copy」で URL をコピーできます。

![](https://static.quaily.com/media/q38uky74.webp)

### 記事を非公開にする

1. 「Quaily: Unpublish」を実行します。
2. 少し待つと、記事は非公開になり、状態が「Draft」に戻ります。

### 記事を配信する

1. 「Quaily: Send」を実行します。
2. 少し待つと、記事が購読者へメール配信されます。
   - Telegram、Discord、LINE などを連携している場合は、それらのチャンネルにも配信されます。

### 記事をプレビューする

公開前に記事をプレビューできます。

1. 「Quaily: Preview」を実行します。
2. 少し待つとプレビューウィンドウが開き、QR コードとプレビューボタンが表示されます。
   - スマートフォンで QR コードを読み取ると、スマホ表示を確認できます
   - プレビューボタンを押すと、ブラウザで確認できます

![](https://static.quaily.com/media/16nuk707.webp)

### デフォルトチャンネルを設定する

複数の Quaily チャンネルを Obsidian で管理している場合、投稿先のデフォルトチャンネルを設定できます。

1. 「Quaily: Set Default Channel」を実行します。
2. 一覧からチャンネルを選びます。

## 画像の挿入

記事内の画像が Obsidian のローカル vault にある場合、Quaily プラグインがそれを読み取り、保存・公開時に自動でアップロードします。
画像の挿入には、Obsidian の内部リンク構文と通常の Markdown 画像構文の両方が使えます。

:::tip
画像が Quaily にアップロードされると、自動で WebP へ変換され、記事中の画像 URL もアップロード後の URL に置き換えられます。
:::

**内部リンク構文**

絶対パスでも、文中の画像エイリアスでも構いません。

例:

```
![[image-1.png]]

![[images/image-2.png]]
```

この例では `image-1.png` と `image-2.png` が記事に挿入されます。`image-1.png` はその名前のファイルが一意である前提、`image-2.png` は `images` フォルダ内のファイルです。
クリップボードから画像を直接貼り付けても、Quaily が自動で処理します。

**Markdown 画像構文**

この場合は絶対パスを使ってください。例:

Obsidian のディレクトリ構成が次のようになっているとします。

```
- [essay]
  - [images]
    - image-1.png
    - image-2.png
  - [posts]
    - test
```

ここで `essay`、`images`、`posts` はフォルダ、`image-1.png` と `image-2.png` は画像ファイル、`test` は記事ファイルです。

`test` に `image-1.png` を挿入したい場合は、次のように書きます。

```markdown
![image-1](essay/images/image-1.png)
```

この `essay/images/image-1.png` はトップレベルからの絶対パスです。相対パスでは、Quaily プラグインは画像ファイルを見つけられません。

---

以上が Quaily の Obsidian プラグインの使い方です。質問があれば、[bug tracker](https://github.com/orgs/quailyquaily/projects/2/views/2) にどうぞ。
