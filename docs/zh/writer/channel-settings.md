---
outline: deep
description: 推送设置
---

# 推送设置

Quaily 支持将文章推送到不同的渠道。本文档将指导完成设置渠道的过程。

目前，Quaily 支持以下频道：Email、Telegram、Discord、Line，未来我们将添加更多频道。

设置频道有两个好处：

1. 在推送文章时，可以选择推送到这些频道。
2. 如果设置了 Telegram、Discord、Line，那么在 Quaily 网页中，会对读者呈现加入频道的按钮，读者可以通过点击按钮加入频道，以便接收文章推送。

## Email 设置

作者可以在此调整列表的 Email 推送相关的设置。

### 邮件推送

开启这个选项时，每次推送文章都会发送邮件到所有订阅者的邮箱。关闭这个选项时，推送文章时不会发送邮件，但订阅者仍然可以在列表页面、Feed 或者其他渠道看到新文章。

### 欢迎文本

当订阅者订阅列表时，会收到一封欢迎邮件，可以编辑欢迎邮件的内容。如果内容为空，**[Quaily](https://quaily.com "Quaily Official Website")** 会使用默认的欢迎文本。

### 签名文本

在每封邮件的最后，会附带一段签名文本，可以编辑签名文本的内容。如果内容为空，Quaily 则不会在邮件中附带签名文本。

### 邮件提供商黑名单

有些作者不希望自己的内容被某些邮件提供商提供的邮件地址订阅，那么可以在这里添加黑名单。添加黑名单后，订阅者使用这些邮件提供商提供的邮件地址订阅时，会被提示无法订阅：

`列表拒绝了您的订阅，因为您的电子邮件提供商在列表黑名单中。`

请以半角逗号分隔多个邮件提供商，例如：设置 `qq.com, 163.com, soho.com`，将会拒绝来自 `@qq.com`、`@163.com` 和 `@soho.com` 邮件地址订阅。

## 推送到其他社交/社群媒体

Quaily 支持推送的社交/社群媒体：

| 名称 | 说明 |
| ------- | ----------- |
| Discord | Quaily 支持把文章推送到 Discord 服务器中的指定频道 |
| Telegram | Quaily 支持把文章推送到 Telegram 频道 |
| LINE | Quaily 支持把文章推送到 Line Biz 频道 |
| Slack | Quaily 支持把文章推送到 Slack 工作区中的指定频道 |
| X | Quaily 支持以指定 X（前 Twitter）账号的名义发送文章到 X |
| Bluesky | Quaily 支持以指定 Bluesky 账号的名义发送文章到 Bluesky |

配置方式：

- [📣 不仅仅是邮件——用 Discord、Telegram、LINE 连接你的社区](https://quaily.com/quail-zh/p/beyond-email-connect-your-community-with-discord-telegram-line "不仅仅是邮件——用 Discord、Telegram、LINE 连接你的社区")
- [📣 不仅仅是邮件 —— 把 Newsletter 也发送到 Slack](https://quaily.com/quail-zh/p/not-just-email-send-newsletter-to-slack)
- [📣 不仅仅是邮件 —— 把 Newsletter 也发送到 X 和 Bluesky](https://quaily.com/quail-zh/p/not-just-email-send-newsletter-to-x-and-bluesky)
