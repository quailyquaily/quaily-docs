---
outline: deep
---

# 频道设置

Quail 支持将文章推送哪个到不同的渠道。本文档将指导完成设置渠道的过程。

目前，Quail 支持以下频道：Email、Telegram、Discord、Line 和 X，未来我们将添加更多频道。

设置频道有两个好处：

1. 在推送文章时，可以选择推送到这些频道。
2. 如果设置了 Telegram、Discord、Line 或者 X，那么在 Quail 网页中，会对读者呈现加入频道的按钮，读者可以通过点击按钮加入频道，以便接收文章推送。

## Email 设置

作者可以在此调整列表的 Email 推送相关的设置。

### 邮件推送

开启这个选项时，每次推送文章都会发送邮件到所有订阅者的邮箱。关闭这个选项时，推送文章时不会发送邮件，但订阅者仍然可以在列表页面、Feed 或者其他渠道看到新文章。

### 欢迎文本

当订阅者订阅列表时，会收到一封欢迎邮件，可以编辑欢迎邮件的内容。如果内容为空，**[Quail](https://quaily.com "Quail Official Website")** 会使用默认的欢迎文本。

### 签名文本

在每封邮件的最后，会附带一段签名文本，可以编辑签名文本的内容。如果内容为空，Quail 则不会在邮件中附带签名文本。

### 邮件提供商黑名单

有些作者不希望自己的内容被某些邮件提供商提供的邮件地址订阅，那么可以在这里添加黑名单。添加黑名单后，订阅者使用这些邮件提供商提供的邮件地址订阅时，会被提示无法订阅：

`列表拒绝了您的订阅，因为您的电子邮件提供商在列表黑名单中。`

请以半角逗号分隔多个邮件提供商，例如：设置 `qq.com, 163.com, soho.com`，将会拒绝来自 `@qq.com`、`@163.com` 和 `@soho.com` 邮件地址订阅。

## Discord 设置

Quail 支持向 Discord 发送文章，请阅读[这篇周报](https://quaily.com/quail-zh/p/how-to-integrate-discord-with-your-newsletter-by-quail)了解如何设置 Discord。

## Telegram 设置

### 创建 Telegram 频道

第一步是创建一个 Telegram 频道，按照以下说明创建一个频道：

- iPhone：在聊天列表中，开始一个新消息（点击右上角的图标），然后选择“新建频道”。
- Android：在聊天列表中，点击圆形铅笔图标，然后选择“新建频道”。
- Windows Phone：在底部栏点击“+”按钮，然后选择“新建频道”。

创建完频道后，请将其设置为公开，以便所有人都能加入。公开频道将具有以下链接：`https://t.me/your_channel_name`Channel 是 `@your_channel_name`。

### 将 Quail 的机器人添加到频道

在 telegram 中搜索 `@QuailSenderBot`，然后以管理员身份添加到频道，并确保机器人有向频道发送消息的权限。

### 将 Quail 连接到 Telegram

剩下的步骤非常简单，只需访问 [Quail 的写作面板](https://quaily.com/dashboard)，选择要连接的列表，然后点击侧边栏的 `列表设置`。

将看到一个 「Telegram 设置」 部分，只需填 Channel，然后点击 `Verify` 按钮。

如果一切正常，新的设置将被保存。现在，所有新发布的文章也将发送到该频道。

### 番外篇 1：给频道设置讨论区

如果想要在频道中添加一个讨论区，可以按照以下步骤操作：

1. 登录 Telegram 频道并打开频道个人资料。
2. 然后进入 "Discussion"
3. 选择现有群组或点击“创建新群组”为频道创建新群组，并确认将该群组链接到频道。

完成这些步骤后，如果 Telegram 已更新并且 Telegram 频道上的评论已激活，可以在该频道的文章下方看到评论部分。 此部分标记为“评论”，其中显示以下文本：“Leave a Comment”。 可以轻松地将评论放在这篇文章下面。

### 番外篇 2：使用自己的 Telegram 机器人

**创建 Telegram 机器人**

第一步是创建一个 Telegram 机器人。可以按照[官方指南](https://core.telegram.org/bots#6-botfather)创建一个机器人。

创建完机器人后，将获得一个令牌：

1. 向 `@BotFather` 发送 `/mybots`
2. 选择刚刚创建的机器人
3. 选择 `API Token`
4. 复制该令牌

请妥善保存，稍后我们将会用到。

**修改机器人配置**

下一步是将机器人添加到频道并赋予其权限。首先让我们修改机器人的设置：

1. 向 `@BotFather` 发送 `/mybots`
2. 选择刚刚创建的机器人
3. 选择 `Bot Settings`
4. 选择 `Allow Groups`
5. 选择 `Turn on`

接着将机器人添加到频道，并且修改 Quail 频道设置中的机器人令牌和 Channel，保存即可。

## LINE 设置

Quail 支持将文章发送到 LINE 频道。开始之前，请确保已经在 [LINE Developer Dashboard](https://developers.line.biz/console) 创建了一个 LINE 频道。从头开始，需要创建一个**Provider**，然后在该频道下创建一个 **Messaging API Channel**。

1. 访问 [Quail 的仪表板](https://quaily.com/dashboard)，选择要连接的列表，然后单击侧边栏的“列表设置”。
2. 将看到“频道设置”部分，只需启用 LINE 频道
3. 首次使用，需要为频道创建一个密钥对，点击 `创建` 按钮。然后将看到公钥。复制公钥以供下一步使用。
4. 访问 [LINE Developer Dashboard](https://developers.line.biz/console)，选择要连接的频道，找到 **Basic Settings** 下的 **Assertion Signing Key**，点击 **Register a public key** 按钮，粘贴刚刚复制的公钥，然后点击 **Register** 按钮。
5. 复制 **Assertion Signing Key** 并将其粘贴到频道设置页面。
6. 然后填写 **Channel ID** 和 **Channel Secret**。可以在 **Basic Settings** 下找到它们。
7. 可选：填写 **Basic ID**，一个带有邀请 URL 的 LINE 图标将被添加到订阅表单中。你可以在 **Messaging API Settings** 下找到它。

就是这样。现在可以保存设置。新发布的文章也将发送到 LINE 频道。

## X 设置

将 Quail 连接到 X（前身 Twitter）比较简单，在「[列表设置 - 一般设置](https://quaily.com/dashboard/lists/@current/settings/general)」中，按照提示连接 Quail 授权访问自己的 X 账户即可。
