---
outline: deep
# next: false
---

# 開発者ドキュメント

## 概要

Quaily Developer Documentation へようこそ。このガイドでは、あなたのアプリケーションやサービスを Quaily と連携させるために必要な情報をまとめています。独自の公開フローを構築したい場合も、コンテンツ管理を自動化したい場合も、読者向けの独自体験を作りたい場合も、Quaily の API はそれを支える柔軟性を備えています。

Quaily は、クリエイターが活気あるメンバーシップコミュニティを築けるように設計されています。開発者向けツールは、その力を拡張し、接続し、作り、実験できるようにするためのものです。

## はじめに

Quaily で開発を始めるときは、通常次の流れになります。

1. **認可**: まずは [Authorization](./authorization.md) を確認し、安全に API へ接続する方法を把握します。
2. **API リファレンスを確認**: [API endpoints](#api-reference) を見て、User、Channel、Post などに対して何ができるかを確認します。
3. **最初の API 呼び出しを試す**: 自分のユーザー情報を取得したり、チャンネル一覧を取得したりする簡単なリクエストから始めます。

## API Base

Quaily API のベース URL は次のとおりです。

```
https://api.quaily.com
```

## 認可

Quaily API へ安全にアクセスするための認可方式です。

- [Authorization Guide](./authorization.md)

## 主要概念

Quaily API を理解するうえで、次の概念を把握しておくと便利です。

- **User**: Quaily 上の個人アカウント。クリエイターにも読者にもなれます
- **Channel**: クリエイターが記事を公開する配信スペースです
- **Post**: Channel 内で公開される記事またはコンテンツです
- **Subscription**: 読者が Channel を購読している関係を表します

## オープンソースプロジェクト

最初から実運用に近いコードベースを使いたい場合、Quaily はいくつかのオープンソースプロジェクトを提供しています。

- [Quaily CLI](https://github.com/quailyquaily/quail-cli): Quaily アカウントを操作するためのコマンドラインツール
- [Obsidian Plugin of Quaily](https://github.com/quailyquaily/obsidian-quail): Quaily 用の Obsidian プラグイン

## API リファレンス

各 API エンドポイントの詳細:

- [Response Object](./api/response-object.md): 全 API で共通のレスポンス構造
- [Auth](./api/auth.md): 認証とトークン交換
- [APIKey](./api/apikey.md): API キー管理
- [Credit](./api/credit.md): Credits と台帳の管理
- [User](./api/user.md): ユーザー関連操作
- [Channel](./api/channel.md): Channel と設定の取得
- [List](./api/list.md): Channel（List）とその設定管理
- [Post](./api/post.md): 記事の作成、取得、更新、削除
- [Subscription](./api/subscription.md): チャンネル購読管理
- [Attachment](./api/attachment.md): 記事用添付ファイルのアップロードと管理
- [Composer](./api/composer.md): AI を利用した執筆補助
- [Comment](./api/comment.md): コメントの取得と管理
- [Tweet](./api/tweet.md): ツイートと返信の取得・管理
- [Pack](./api/pack.md): Pack の管理
- [Analytics](./api/analytics.md): 分析・計測データ
- [Explore](./api/explore.md): トレンドコンテンツ取得
- [OAuth](./api/oauth.md): OAuth 2.0 エンドポイントとトークン

## コミュニティとサポート

Quaily の開発者 Discord に参加すると、質問、事例共有、サポート依頼ができます。

- [Join our Discord](https://discord.gg/FWrJ8bwhwe)
- [Github Page](https://github.com/quailyquaily)

Quaily を使って何を作るか、楽しみにしています。
