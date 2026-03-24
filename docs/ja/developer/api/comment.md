---
description: コメント API
---

# Comment API

## 投稿ごとのコメント一覧

```prolog
GET API_BASE/comments?post_id=:post_id&offset=:offset&limit=:limit
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `post_id` | uint64 | Post ID |
| `offset`  | number | ページネーション offset |
| `limit`   | number | ページネーション limit |

### レスポンス

```json
{
  "data": {
    "pagination": {
      "total": 0,
      "offset": 0,
      "next_offset": 20,
      "limit": 20
    },
    "items": [CommentObject, ...]
  },
  "ts": 1723923923
}
```

## コメントを作成する

```prolog
POST API_BASE/comments
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "post_id": 1,
  "quote_comment_id": 0,
  "content": "..."
}
```

### レスポンス

```json
{
  "data": CommentObject,
  "ts": 1723923923
}
```

## コメントを承認する

```prolog
PUT API_BASE/comments/:comment_id/approve
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

コメントを承認または却下できるのは投稿オーナーのみです。

### レスポンス

```json
{
  "data": null,
  "ts": 1723923923
}
```

## コメントを却下する

```prolog
PUT API_BASE/comments/:comment_id/reject
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### レスポンス

```json
{
  "data": null,
  "ts": 1723923923
}
```

## コメントをスパム扱いにする

```prolog
PUT API_BASE/comments/:comment_id/spam
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### レスポンス

```json
{
  "data": null,
  "ts": 1723923923
}
```

## コメントを削除する

```prolog
DELETE API_BASE/comments/:comment_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

作者と投稿オーナーはコメントを削除できます。

### レスポンス

```json
{
  "data": null,
  "ts": 1723923923
}
```
