---
description: Quaily チャンネルの分析設定
outline: deep
---

# 分析

## 組み込み分析

Quaily には、すぐに使えるシンプルな組み込み分析機能があります。追加設定は不要です。

各記事で確認できる指標は次のとおりです。

1. Page views: 記事が表示された回数（Web ページとメールの両方を含む）
2. Post reads: 記事が読まれた回数。ユーザーが 10 秒以上その記事に滞在した場合にカウントされます
3. Email reads: メール内で記事が読まれた回数。メール配信した記事でのみ利用できます

デフォルトでは、これら 3 つの指標は記事一覧上で「X views」として表示されます。ただし、作者は「[List Settings - General Settings](https://quaily.com/dashboard/lists/@current/settings/general)」でこの表示をオフにできます。

## 外部分析サービス

Quaily は外部分析サービスとして [Umami.is](https://umami.is/) と [Google Analytics](https://analytics.google.com/) をサポートしています。

### Umami.is

Umami は、Google Analytics の代替となるオープンソースでプライバシー重視の分析ツールです。

[Umami.is](https://umami.is/) でアカウントを作成し、`Website ID` を `Umami ID` 欄に入力してください。

#### セルフホスト版 Umami

セルフホスト版 Umami を使っている場合は、`Umami Base` 欄にインスタンスの URL を入力できます。

### Google Analytics

Google Analytics は広く使われている分析サービスです。Umami と同様にアカウントを作成し、`Measurement ID` を `Google Analytics ID` 欄に入力してください。

#### Events

Google Analytics を有効にすると、Quaily は次のイベントを送信します。

- `sign_up`: ユーザーがメール購読に登録したとき
- `begin_checkout`: ユーザーが購入手続きを開始したとき
- `purchase`: ユーザーが購入を完了したとき

これらは [Google Analytics 4](https://support.google.com/analytics/answer/9267735?hl=en "Google Analytics 4 Events") での利用を想定しています。
