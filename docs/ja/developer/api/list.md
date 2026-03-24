---
description: Channel（List）とその設定を管理する API
---

# List API

### 注意

- ほとんどの書き込み操作には list owner 権限が必要です
- `/delivery` 配下のエンドポイントと `GET /lists/:list_id/channel` には list cooperator 権限が必要です

## List を作成する

```prolog
POST API_BASE/lists
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "slug": "my-channel",
  "title": "My Channel",
  "description": "...",
  "avatar_image_url": "https://...",
  "favicon_image_url": "https://...",
  "widget_custom_styles": "..."
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## List を検索する

```prolog
POST API_BASE/lists/search
```

### リクエストボディ

```json
{
  "q": "keyword",
  "offset": 0,
  "limit": 20
}
```

### レスポンス

```json
{
  "data": {
    "pagination": {
      "offset": 0,
      "next_offset": 20,
      "limit": 20
    },
    "items": [ChannelObject, ...]
  },
  "ts": 1723923923
}
```

## List を取得する

```prolog
GET API_BASE/lists/:list_id
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | string | list の slug または数値 ID |

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## List Metrics を取得する

```prolog
GET API_BASE/lists/:list_id/metrics
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | string | list の slug または数値 ID |

### レスポンス

```json
{
  "data": ListMetricsObject,
  "ts": 1723923923
}
```

## ドメインから List を取得する

```prolog
GET API_BASE/lists/domains/:domain
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `domain`  | string | 独自ドメイン |

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## List を更新する

```prolog
PUT API_BASE/lists/:list_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | string | list の slug または数値 ID |

### リクエストボディ

[List を作成する](#list-を作成する) と同じです。

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## List Slug を更新する

```prolog
PUT API_BASE/lists/:list_id/slug?slug=:slug
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | string | list の slug または数値 ID |
| `slug`    | string | 新しい slug 値 |

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## List Options を更新する

```prolog
PUT API_BASE/lists/:list_id/options
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | string | list の slug または数値 ID |

### リクエストボディ

```json
{
  "options": {
    "comment_enabled": true,
    "comment_strategy": 0,
    "shorten_url_enabled": false
  }
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## List Channel 設定を更新する

```prolog
PUT API_BASE/lists/:list_id/channel
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | string | list の slug または数値 ID |

### リクエストボディ

```json
{
  "telegram_channel_enabled": false,
  "telegram_channel_id": "@channel",
  "discord_channel_enabled": false,
  "discord_channel_id": "123",
  "line_channel_enabled": false,
  "line_channel_id": "123",
  "twitter_channel_enabled": false,
  "bluesky_channel_enabled": false,
  "slack_channel_enabled": false
}
```

### レスポンス

```json
{
  "data": ListChannelObject,
  "ts": 1723923923
}
```

## List Channel 設定を取得する

```prolog
GET API_BASE/lists/:list_id/channel
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | string | list の slug または数値 ID |

### レスポンス

```json
{
  "data": ListChannelObject,
  "ts": 1723923923
}
```

## LINE Keypair を生成する

```prolog
POST API_BASE/lists/:list_id/channel/line/keys
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | string | list の slug または数値 ID |

### レスポンス

```json
{
  "data": {
    "line_jwk_pub": "...",
    "line_jwk_pub_decoded": "..."
  },
  "ts": 1723923923
}
```

## List Bulletin を更新する

```prolog
PUT API_BASE/lists/:list_id/bulletin
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "bulletin": "..."
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Text Templates を更新する

```prolog
PUT API_BASE/lists/:list_id/text_templates
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "text_templates": {
    "email_signature": "..."
  }
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Email 設定を更新する

```prolog
PUT API_BASE/lists/:list_id/email_settings
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "email_channel_enabled": true,
  "email_deny_list": ["example.com"]
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Analytics 設定を更新する

```prolog
PUT API_BASE/lists/:list_id/analytics
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "a_umami_id": "...",
  "a_umami_base": "https://...",
  "a_ga_id": "G-XXXXXXXXXX",
  "shorten_url_enabled": false,
  "shorten_url_provider": "sink",
  "sink_site_base": "https://...",
  "sink_site_token": "..."
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## ドメイン設定を更新する

```prolog
PUT API_BASE/lists/:list_id/domain
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "custom_domain_enabled": true,
  "domain": "example.com",
  "canonical_base": "https://example.com"
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## ドメインを検証する

```prolog
POST API_BASE/lists/:list_id/domain/verify
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## コメント設定を更新する

```prolog
PUT API_BASE/lists/:list_id/comment
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "comment_enabled": true,
  "comment_strategy": 0
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## ツイート設定を更新する

```prolog
PUT API_BASE/lists/:list_id/tweets
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "tweets_enabled": true,
  "bulletin": "..."
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Cooperators を更新する

```prolog
PUT API_BASE/lists/:list_id/cooperators
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "cooperators": [1, 2, 3]
}
```

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## 削除を要求する

```prolog
DELETE API_BASE/lists/:list_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### レスポンス

```json
{
  "data": {
    "id": 1
  },
  "ts": 1723923923
}
```

## データをエクスポートする

```prolog
POST API_BASE/lists/:list_id/export.zip
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### レスポンス

```json
{
  "data": 0,
  "ts": 1723923923
}
```

## Delivery Tasks（List scope）

```prolog
GET API_BASE/lists/:list_id/delivery?offset=:offset&limit=:limit
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

delivery 関連エンドポイントでは `list_id` は数値 ID である必要があります。

### クエリパラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `offset`  | number | ページネーション offset |
| `limit`   | number | ページネーション limit |

### レスポンス

```json
{
  "data": {
    "pagination": {
      "total": 0,
      "offset": 0,
      "next_offset": 16,
      "limit": 16
    },
    "items": [DeliveryTaskObject, ...]
  },
  "ts": 1723923923
}
```

```prolog
PUT API_BASE/lists/:list_id/delivery/:task_id
```

```prolog
PUT API_BASE/lists/:list_id/delivery/:task_id/cancel
```

```prolog
GET API_BASE/lists/:list_id/delivery/:task_id/report
```

すべての delivery task ルートには list cooperator 権限が必要で、対象 task または report payload を返します。
