---
outline: deep
description: Quaily のウィジェット設定
---

# ウィジェット設定

ウィジェットを使うと、自分のサイトへ Quaily の購読フォームを埋め込めます。このページでは、ウィジェットの設定方法を説明します。

リストの「List Settings - General - Widget Settings」で、レイアウト、スタイルなどを設定できます。

設定後は「Copy」を押して埋め込みコードをコピーし、自分のサイトへ貼り付けてください。

## ウィジェットのレイアウト

ウィジェットには `Base Info` と `Subscribe Form` の 2 種類があります。

**Base Info**: リスト名や説明など、基本情報を表示します。

<iframe src="https://quaily.com/blog/widget.external?theme=light&list_slug=blog&layout=info&lang=en" data-theme="light"
    width="100%" height="128px" title="Quaily Widget" frameborder="0" allow="web-share" allowfullscreen >
</iframe>

**Subscribe Form**: 購読フォームを表示し、訪問者がそのまま購読できます。

<iframe src="https://quaily.com/blog/widget?theme=light&list_slug=blog&layout=subscribe_form&lang=en" data-theme="light"
    width="100%" height="400px" title="Quaily Widget" frameborder="0" allow="web-share" allowfullscreen >
</iframe>

## CSS でカスタマイズする

ウィジェットは CSS でカスタマイズできます。「Edit Custom Styles」を押すとエディタが開きます。

エディタに CSS を書いて保存すると、そのスタイルがウィジェットへ適用されます。

> 新しいスタイルが反映されるまで数秒かかることがあります。

CSS の書き方そのものはこのページの範囲外です。必要であれば [developer community](https://discord.gg/FWrJ8bwhwe) で相談してください。

## サンプル CSS

以下はそのまま使えるサンプルです。

### 1. 最小構成の購読フォーム

**Code**

```css
/* adjust the layout and styles */
.widget-form {
  padding: 0 !important;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.widget-action-wrapper .q-text-field {
  text-align: left !important;
}
/* hide non-used elements */
.block-drop-shadow::after,
.widget-stat-form-row,
.widget-other-methods-form-row,
.widget-list-subtitle-form-row,
.widget-list-title-form-row,
.widget-list-avatar-form-row {
  display: none;
}
```

**Live Demo**

<iframe src="https://quaily.com/blog/widget.external?theme=light&list_slug=blog&layout=subscribe_form&lang=en" data-theme="light"
    width="100%" height="128px" title="Quaily Widget" frameborder="0" allow="web-share" allowfullscreen >
</iframe>

### 2. カスタムフォントを使う

**Code**

```css
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");
* {
  font-family: "Inconsolata", monospace;
}
```
