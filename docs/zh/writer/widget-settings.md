---
outline: deep
description: Widget 设置。设置 Widget 的布局、样式和其他设置。
---

# Widget 设置

Widget 提供了一种在您的网站上嵌入 Quaily 的订阅表单的方法。本文档将指导您完成设置 Widget 的过程。

访问列表的「列表设置 - 通用 - Widget 设置」来设置 Widget 的布局、样式和其他设置。

完成设置后，您可以点击「复制」按钮，复制嵌入代码，然后将其粘贴到您的网站中。

## Widget 布局

目前有两种 Widget 布局：`基本信息` 和 `订阅表单`。

**基本信息**: 显示列表的基本信息，如列表名称、描述。

<iframe src="https://quaily.com/blog/widget.external?theme=light&list_slug=blog&layout=info&lang=en" data-theme="light"
    width="100%" height="128px" title="Quaily Widget" frameborder="0" allow="web-share" allowfullscreen >
</iframe>

**订阅表单**: 显示订阅表单，让访客订阅列表。

<iframe src="https://quaily.com/blog/widget?theme=light&list_slug=blog&layout=subscribe_form&lang=en" data-theme="light"
    width="100%" height="400px" title="Quaily Widget" frameborder="0" allow="web-share" allowfullscreen >
</iframe>

## 定制 Widget 样式

你可以使用 CSS 来自定义 Widget 样式。点击 "编辑自定义样式" 按钮打开编辑器。

然后你可以在编辑器中编写你的 CSS 代码。保存后，代码将应用到 Widget 中。

> 应用新样式可能需要几十秒钟的时间。

讨论如何使用 CSS 定制 Widget 样式超出了本文档的范围。如果您需要帮助，欢迎加入我们的[开发者社区](https://discord.gg/FWrJ8bwhwe)。

## 示例 CSS 代码

这里有一些用于自定义 Widget 的 CSS 代码片段，请随意使用和修改他们。

### 1. 简约订阅表单

**代码**

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

**示例**

<iframe src="https://quaily.com/blog/widget.external?theme=light&list_slug=blog&layout=subscribe_form&lang=en" data-theme="light"
    width="100%" height="128px" title="Quaily Widget" frameborder="0" allow="web-share" allowfullscreen >
</iframe>

### 2. 自定义字体

**代码**

```css
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");
* {
  font-family: "Inconsolata", monospace;
}
```
