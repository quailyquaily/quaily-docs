---
description: The sending settings for a Quaily channel
outline: deep
---

# Sending Settings

Quaily supports to send posts to different channels. This document will guide you through the process of setting up channels.

At present, Quaily supports the following channels: Email, Telegram, Discord, LINE. We will add more channels in the future.

## Email Settings

Authors can adjust the list's email delivery related settings here.

### Email Delivery

When this option is turned on, every time an article is delivered, an email will be sent to all subscribers. When this option is turned off, no email will be sent when articles are delivered, but subscribers will still see new articles on the list page, feed, or other channels.

### Onboarding Text

When a subscriber subscribes to a list, they receive a welcome email.

Here you can edit the content of the welcome email. If the content is empty, **[Quaily](https://quaily.com "Quaily Official Website")** will use the default text.

### Signature Text

At the end of each email, a signature text is attached.

Here you can edit the content of the signature text. If the content is empty, Quaily will not attach the signature text to the message.

### Email Provider denylist

Some authors don't want their content to be subscribed by addresses provided by certain email providers, so they can add here. After adding the denylist, when subscribers use the email address provided by these email providers to subscribe, they will be prompted that they cannot subscribe:

`The list owner rejected your subscription, because your email provider is in the denylist.`

Please split multiple domains with commas, for example: set `qq.com, 163.com, soho.com`, it will reject emails from `@qq.com`, `@163.com` and `@soho. com` email address to subscribe.

## Send Posts to Other Social/Community

Quaily supports sending to the following social/community media:

| Name     | Description                                |
| -------  | -------------------------------------------------------- |
| Discord  | Quaily supports sending posts to a specified channel in a Discord server |
| Telegram | Quaily supports sending posts to a Telegram channel      |
| LINE     | Quaily supports sending posts to a Line Biz channel      |
| Slack    | Quaily supports sending posts to a specified channel in a Slack workspace |
| X        | Quaily supports sending posts to X (formerly Twitter) on behalf of a specified X account |
| Bluesky  | Quaily supports sending posts to Bluesky on behalf of a specified Bluesky account |

How to configure:

- [📣 More than just email — send Newsletter to Slack too](https://quaily.com/blog/p/not-just-email-send-newsletter-to-slack)
- [📣 More than just email — send Newsletters to X and Bluesky too!](https://quaily.com/blog/p/not-just-email-send-newsletter-to-x-and-bluesky)
- [📣 More than just email — Send Newsletter to Discord, Telegram, and LINE too!](https://quaily.com/blog/p/beyond-email-connect-your-community-with-discord-telegram-line)
