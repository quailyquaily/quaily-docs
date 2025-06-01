---
outline: deep
description: The widget settings for Quaily
---

# Widget Settings

Widget offer a way to embed Quaily's subscription form on your website. This document will guide you through the process of setting up widgets.

Visit List's "List Settings - General - Widget Settings" to set up Widget's layout, style, and other settings.

After you finish the settings, you can click the "Copy" button to copy the embed code, then paste it into your website.

## Widget Layouts

There are two layouts of widgets: `Base Info` and `Subscribe Form`.

**Base Info**: Display the basic information of the list, such as the list name, description

<iframe src="https://quaily.com/blog/widget.external?theme=light&list_slug=blog&layout=info&lang=en" data-theme="light"
    width="100%" height="128px" title="Quaily Widget" frameborder="0" allow="web-share" allowfullscreen >
</iframe>

**Subscribe Form**: Display the subscribe form, which allows visitors to subscribe to the list

<iframe src="https://quaily.com/blog/widget?theme=light&list_slug=blog&layout=subscribe_form&lang=en" data-theme="light"
    width="100%" height="400px" title="Quaily Widget" frameborder="0" allow="web-share" allowfullscreen >
</iframe>

## Customizing Widget with CSS

You can customize the widget with CSS. Tap the "Edit Custom Styles" button to open the editor.

Then you can write your CSS code in the editor. The code will be applied to the widget after you save it.

> It may take a few seconds to apply the new styles.

Discussing how to customize widget styles with CSS is beyond the scope of this document. If you need help, feel free to join our [developer community](https://discord.gg/FWrJ8bwhwe).

## Sample CSS Code

Here are some sample CSS code snippets for customizing the widget. Feel free to copy and paste them into the editor.

### 1. Minimal Subscribe Form

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

### 2. Use custom font

**Code**

```css
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");
* {
  font-family: "Inconsolata", monospace;
}
```
