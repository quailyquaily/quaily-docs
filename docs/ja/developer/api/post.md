---
description: Quaily チャンネルの Post を管理する API
---

# Post API

## 共通パラメータ

| Parameter      | Type   | Description |
| -------------- | ------ | ----------- |
| `channel_slug` | string | channel の slug または数値 ID |
| `post_id`      | string | post の slug または数値 ID |

## 投稿一覧を取得する

```prolog
GET API_BASE/lists/:channel_slug/posts?offset=:offset&limit=:limit&public=:public
```

### パラメータ

| Parameter      | Type   | Description |
| -------------- | ------ | ----------- |
| `channel_slug` | string | channel の slug または数値 ID |
| `offset`       | number | 投稿一覧の offset |
| `limit`        | number | 投稿一覧の limit |
| `public`       | number | 1: 公開投稿のみ、0: すべての投稿 |
| `type`         | string | 任意。channel owner / cooperator 向けフィルタ（例: draft） |
| `sort`         | string | 任意。`score` を指定するとスコア順に並び替え |
| `ids`          | string | 任意。カンマ区切りの数値 post ID。認可が必要 |

### 注意

- `limit` のデフォルトは 16 です
- `public` が指定されているか、呼び出し元が未認証の場合は公開済み投稿のみ返します
- `ids` が指定されている場合、レスポンスはページネーションなしの `PostObject` 配列になります

### レスポンス

```json
{
  "data": {
    "pagination": {
      "total": 100,
      "offset": 0,
      "next_offset": 20,
      "limit": 20
    },
    "items": [PostObject, ...]
  },
  "ts": 1723923923
}
```

## 投稿を取得する

```prolog
GET API_BASE/lists/:channel_slug/posts/:post_id
```

### パラメータ

[共通パラメータ](#共通パラメータ) と同じです。

### レスポンス

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```

## 固定投稿を取得する

```prolog
GET API_BASE/lists/:channel_slug/pinned
```

### パラメータ

| Parameter      | Type   | Description |
| -------------- | ------ | ----------- |
| `channel_slug` | string | channel の slug または数値 ID |

### レスポンス

```json
{
  "data": [PostObject, ...],
  "ts": 1723923923
}
```

## 投稿を固定する

```prolog
PUT API_BASE/lists/:channel_slug/pinned
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter      | Type   | Description |
| -------------- | ------ | ----------- |
| `channel_slug` | string | channel の slug または数値 ID |

### リクエストボディ

```json
{
  "ids": [1, 2, 3]
}
```

### レスポンス

```json
{
  "data": [1, 2, 3],
  "ts": 1723923923
}
```

## Post Slug の存在を確認する

```prolog
GET API_BASE/lists/:channel_slug/posts/check/:slug
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator アクセスが必要です。

### パラメータ

| Parameter      | Type   | Description |
| -------------- | ------ | ----------- |
| `channel_slug` | string | channel の slug または数値 ID |
| `slug`         | string | 確認したい post slug |

### レスポンス

```json
{
  "data": {
    "existence": 0
  },
  "ts": 1723923923
}
```

## Post を作成する

```prolog
POST API_BASE/lists/:channel_slug/posts
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator アクセスが必要です。

### パラメータ

| Parameter      | Type   | Description |
| -------------- | ------ | ----------- |
| `channel_slug` | string | channel の slug または数値 ID |

### リクエストボディ

```json
{
  "slug": "post-slug",
  "cover_image_url": "https://...",
  "title": "Post Title",
  "summary": "...",
  "content": "...",
  "datetime": "2025-04-19T00:00:00Z",
  "first_published_at": "2025-04-19T00:00:00Z",
  "tags": "tag1,tag2,tag3",
  "theme": "light"
}
```

### レスポンス

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```

## Post を更新する

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_id/update
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator アクセスが必要です。

### パラメータ

| Parameter      | Type   | Description |
| -------------- | ------ | ----------- |
| `channel_slug` | string | channel の slug または数値 ID |
| `post_id`      | string | post の slug または数値 ID |

### リクエストボディ

[Post を作成する](#post-を作成する) と同じです。

### レスポンス

[Post を作成する](#post-を作成する) と同じです。

## Post を公開する

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_id/publish
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator アクセスが必要です。

### パラメータ

[Post を更新する](#post-を更新する) と同じです。

### レスポンス

[Post を更新する](#post-を更新する) と同じです。

## Post を非公開にする

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_id/unpublish
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator アクセスが必要です。

[Post を公開する](#post-を公開する) と同じです。

## Post を配信する

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_id/deliver
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator アクセスが必要です。

### パラメータ

[Post を公開する](#post-を公開する) と同じです。

### レスポンス

[Post を公開する](#post-を公開する) と同じです。

## Post 本文を取得する

```prolog
GET API_BASE/lists/:channel_slug/posts/:post_id/content
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator アクセスが必要です。

### パラメータ

[共通パラメータ](#共通パラメータ) と同じです。

### アクセスルール

- List owner と cooperators は常にアクセスできます
- その他のユーザーは、有効な有料購読が必要です。ただし post に paid content がない場合は不要です

### レスポンス

```json
{
  "data": {
    "free-content": "...",
    "paid-content": "..."
  },
  "ts": 1723923923
}
```

## Post を複製する

```prolog
POST API_BASE/lists/:channel_slug/posts/:post_id/duplicate
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator アクセスが必要です。

### パラメータ

[共通パラメータ](#共通パラメータ) と同じです。

### レスポンス

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```

## Post をプレビューする

```prolog
GET API_BASE/lists/:channel_slug/posts/:post_id/preview
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

list cooperator アクセスが必要です。

### パラメータ

[共通パラメータ](#共通パラメータ) と同じです。

### レスポンス

HTML ドキュメントを返します。

## Post を削除する

```prolog
DELETE API_BASE/lists/:channel_slug/posts/:post_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

対象 list の owner または cooperator 権限が必要です。

### パラメータ

[共通パラメータ](#共通パラメータ) と同じです。

### レスポンス

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```

## 購読中チャンネルの Post を取得する

```prolog
GET API_BASE/posts/subscribed?offset=:offset&limit=:limit
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### クエリパラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `offset`  | number | 投稿一覧の offset |
| `limit`   | number | 投稿一覧の limit |

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
    "items": [PostObject, ...]
  },
  "ts": 1723923923
}
```

## 類似 Post を検索する（公開投稿）

```prolog
POST API_BASE/posts/search
```

### リクエストボディ

```json
{
  "q": "search keyword",
  "list": 1,
  "offset": 0
}
```

### レスポンス

```json
{
  "data": {
    "pagination": {
      "offset": 0,
      "next_offset": 30,
      "limit": 30
    },
    "items": [PostObject, ...]
  },
  "ts": 1723923923
}
```

## 類似 Post を検索する（すべての投稿）

```prolog
POST API_BASE/posts/all/search
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

対象 list の owner または cooperator 権限が必要です。

### リクエストボディ

[類似 Post を検索する（公開投稿）](#類似-post-を検索する公開投稿) と同じです。

### レスポンス

[類似 Post を検索する（公開投稿）](#類似-post-を検索する公開投稿) と同じです。

## Post にリアクションする

```prolog
POST API_BASE/posts/reactions?id=:post_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

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
  "data": PostObject,
  "ts": 1723923923
}
```
