---
description: Quaily チャンネルの配信設定
outline: deep
---

# 配信設定

Quaily では、記事を複数のチャンネルに配信できます。このページではチャンネル設定方法を説明します。

現在、Quaily が対応している主な配信先は Email、Telegram、Discord、LINE です。今後さらに追加予定です。

## メール設定

ここでは、リストのメール配信に関する設定を調整できます。

### Email Delivery

このオプションをオンにすると、記事を配信するたびに全購読者へメールが送信されます。オフにするとメールは送信されませんが、購読者はリストページ、フィード、その他のチャンネルで新着記事を確認できます。

### Onboarding Text

読者がリストを購読すると、ウェルカムメールが届きます。

ここでウェルカムメール本文を編集できます。空欄の場合、**[Quaily](https://quaily.com "Quaily Official Website")** のデフォルト文面が使われます。

### Signature Text

各メールの末尾には署名テキストを付けられます。

ここで署名テキストの内容を編集できます。空欄の場合、署名は付与されません。

### Email Provider denylist

特定のメールプロバイダのアドレスからの購読を受け付けたくない場合は、ここに追加できます。denylist に登録したドメインのアドレスで購読しようとすると、次のメッセージが表示されます。

`The list owner rejected your subscription, because your email provider is in the denylist.`

複数ドメインはカンマ区切りで入力してください。たとえば `qq.com, 163.com, soho.com` と設定すると、`@qq.com`、`@163.com`、`@soho.com` のアドレスでは購読できなくなります。

## 他のソーシャル/コミュニティへの配信

Quaily は次のソーシャル/コミュニティ媒体への配信にも対応しています。

| Name     | Description |
| -------  | ----------- |
| Discord  | Discord サーバー内の指定チャンネルに配信 |
| Telegram | Telegram チャンネルに配信 |
| LINE     | LINE Biz チャンネルに配信 |
| Slack    | Slack ワークスペース内の指定チャンネルに配信 |
| X        | 指定した X アカウントとして投稿 |
| Bluesky  | 指定した Bluesky アカウントとして投稿 |

設定方法の参考:

- [📣 More than just email — send Newsletter to Slack too](https://quaily.com/blog/p/not-just-email-send-newsletter-to-slack)
- [📣 More than just email — send Newsletters to X and Bluesky too!](https://quaily.com/blog/p/not-just-email-send-newsletter-to-x-and-bluesky)
- [📣 More than just email — Send Newsletter to Discord, Telegram, and LINE too!](https://quaily.com/blog/p/beyond-email-connect-your-community-with-discord-telegram-line)
