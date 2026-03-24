---
description: ツイート API
---

# Tweet API

## ツイート一覧を取得する

```prolog
GET API_BASE/tweets?list=:list&offset=:offset&limit=:limit&public=:public
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list`    | string | list の slug または数値 ID（必須） |
| `offset`  | number | ページネーション offset |
| `limit`   | number | ページネーション limit（デフォルト: 16） |
| `public`  | number | 1: 公開ツイートのみ、0: すべてのツイート |

### 注意

- `public` が指定されているか、呼び出し元が未認証の場合、ツイート内容はマスクされます
- 認証済みユーザーは、自分の購読レベルに応じたツイートを受け取ります

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
    "items": [TweetObject, ...]
  },
  "ts": 1723923923
}
```

## 固定ツイートを取得する

```prolog
GET API_BASE/tweets/pinned?list=:list
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

対象 list の有効な購読、または list owner 権限が必要です。

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list`    | string | list の slug または数値 ID（必須） |

### レスポンス

```json
{
  "data": [TweetObject, ...],
  "ts": 1723923923
}
```

## ツイートを作成する

```prolog
POST API_BASE/tweets?list=:list
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator 権限が必要です。

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list`    | string | list の slug または数値 ID（必須） |

### リクエストボディ

```json
{
  "text": "...",
  "is_premium": false,
  "tags": ["tag1", "tag2"]
}
```

### レスポンス

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## ツイートを取得する

```prolog
GET API_BASE/tweets/:tweet_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

対象 list の有効な購読、または list owner 権限が必要です。

### レスポンス

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## ツイートを削除する

```prolog
DELETE API_BASE/tweets/:tweet_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator 権限が必要です。

### レスポンス

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## ツイートを固定する

```prolog
PUT API_BASE/tweets/:tweet_id/pin
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list owner 権限が必要です。

### レスポンス

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## ツイート固定を解除する

```prolog
DELETE API_BASE/tweets/:tweet_id/unpin
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list owner 権限が必要です。

### レスポンス

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## ツイートにリアクションする

```prolog
POST API_BASE/tweets/:tweet_id/reactions
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

対象 list の有効な購読、または list owner 権限が必要です。

### リクエストボディ

```json
{
  "emoji": "😀",
  "code": "0x1f600"
}
```

### レスポンス

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## ツイート返信一覧

```prolog
GET API_BASE/tweets/:tweet_id/replies?offset=:offset&limit=:limit
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

対象 list の有効な購読、または list owner 権限が必要です。

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
    "items": [TweetReplyObject, ...]
  },
  "ts": 1723923923
}
```

## ツイート返信を作成する

```prolog
POST API_BASE/tweets/:tweet_id/replies
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

対象 list の有効な購読、または list owner 権限が必要です。

### リクエストボディ

```json
{
  "text": "...",
  "reply_id": 0
}
```

### レスポンス

```json
{
  "data": TweetReplyObject,
  "ts": 1723923923
}
```

## ツイート返信を削除する

```prolog
DELETE API_BASE/tweets/:tweet_id/replies/:reply_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

対象 list の有効な購読、または list owner 権限が必要です。削除できるのは返信作者または list owner のみです。

### レスポンス

```json
{
  "data": TweetReplyObject,
  "ts": 1723923923
}
```
