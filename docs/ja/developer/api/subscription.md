---
description: Quaily チャンネルの購読を管理する API
---

# Subscription API

## 購読する（Challenge あり）

```prolog
POST /subscriptions/:list_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の数値 ID |

### リクエストボディ

```json
{
  "email": "user@example.com",
  "challenge-provider": "turnstile",
  "challenge-token": "...",
  "challenge-action": "subscribe"
}
```

challenge が有効な場合、challenge 関連フィールドは必須です。ログイン済みユーザーは no-challenge エンドポイントを使えます。

### レスポンス

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## 購読する（Challenge なし）

```prolog
POST /subscriptions/:list_id/no-challenge
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の数値 ID |

### レスポンス

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## 購読解除する

```prolog
DELETE /subscriptions/:list_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の ID（slug も対応） |

### リクエストボディ（任意）

```json
{
  "trace_id": "..."
}
```

`trace_id` はクエリパラメータでも渡せます。

`trace_id` を使う場合、認証は任意です。ログイン済みユーザーは `trace_id` を省略できます。

### レスポンス

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## メール配信設定を更新する

```prolog
PUT /subscriptions/:list_id/email
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の数値 ID |

### リクエストボディ

```json
{
  "enabled": true
}
```

### レスポンス

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## ワンクリックでメール配信を無効にする

```prolog
POST /subscriptions/:list_id/delete
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の数値 ID |

### リクエストボディ（任意）

```json
{
  "trace_id": "..."
}
```

### レスポンス

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## 購読関係を取得する

```prolog
GET /subscriptions/:list_id/rel
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の ID（slug も対応） |

### レスポンス

```json
{
  "data": SubscriptionObject,
  "ts": 1723923923
}
```

## 自分の購読一覧を取得する

```prolog
GET /subscriptions
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### レスポンス

```json
{
  "data": [SubscriptionObject, ...],
  "ts": 1723923923
}
```

## 購読相手を取得する

```prolog
GET /subscriptions/opponent?trace_id=:trace_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### クエリパラメータ

| Parameter  | Type   | Description |
| ---------- | ------ | ----------- |
| `trace_id` | string | メール経由で特定するための delivery trace ID |
| `list_id`  | uint64 | ログインユーザー向けの list ID（任意） |

### レスポンス

```json
{
  "data": {
    "list": ChannelObject,
    "sub": SubscriptionObject
  },
  "ts": 1723923923
}
```

## List の購読一覧を取得する

```prolog
GET /lists/:list_id/subscriptions?offset=:offset&limit=:limit&email=:email&premium=:premium
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の ID |

### クエリパラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `offset`  | number | 購読一覧の offset |
| `limit`   | number | 購読一覧の limit |
| `email`   | string | 購読者 email で絞り込み |
| `premium` | string | premium 状態で絞り込み |

### レスポンス

```json
{
  "data": {
    "pagination": {
      "total": 0,
      "offset": 0,
      "next_offset": 100,
      "limit": 100
    },
    "items": [SubscriptionObject, ...]
  },
  "ts": 1723923923
}
```

## メンバーを移動する

```prolog
POST /subscriptions/:list_id/members/:user_id/transfer?dst_list_id=:dst_list_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter     | Type   | Description |
| ------------- | ------ | ----------- |
| `list_id`     | uint64 | 元の List ID |
| `user_id`     | uint64 | 対象 user ID |
| `dst_list_id` | uint64 | 移動先 List ID |

### レスポンス

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## メンバーを削除する

```prolog
DELETE /subscriptions/:list_id/members/:user_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の ID |
| `user_id` | uint64 | user の ID |

### レスポンス

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## メンバーのメール送信設定を更新する

```prolog
PUT /subscriptions/:list_id/members/:user_id/email
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の ID |
| `user_id` | uint64 | user の ID |

### リクエストボディ

```json
{
  "enabled": true // true or false
}
```

### レスポンス

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## 同一オーナー配下の購読一覧を取得する

```prolog
GET /subscriptions/:list_id/members/:user_id/subs
```

この API は、指定メンバーと同じ channel owner 配下にある購読関係を一覧します。

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の ID |
| `user_id` | uint64 | user の ID |

### レスポンス

```json
{
  "data": [ SUBSCRIPTION_OBJECT ... ],
  "ts": 1723923923
}
```

## \*メンバーを追加する

```prolog
POST /auxilia/subscriptions/:list_id/members/add
```

_この API は Quaily+ プランのユーザーのみ利用できます_

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の ID |

### リクエストボディ

```json
{
  "members": [
    {
      "email": "test@example.com",
      "name": "Test User"
    },
    {
      "email": "test2@example.com",
      "name": "Test User 2"
    }
  ]
}
```

### レスポンス

```json
{
  "data": 1,
  "ts": 1723923923
}
```
