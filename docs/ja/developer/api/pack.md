---
description: Pack（記事コレクション）API
---

# Pack API

## Pack 一覧を取得する

```prolog
GET API_BASE/lists/:list_id/packs
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の数値 ID |

### レスポンス

```json
{
  "data": [PackObject, ...],
  "ts": 1723923923
}
```

## Pack を作成する

```prolog
POST API_BASE/lists/:list_id/packs
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の数値 ID |

### リクエストボディ

```json
{
  "title": "Pack Title",
  "description": "...",
  "cover_image_url": "https://...",
  "post_ids": [1, 2, 3]
}
```

### レスポンス

```json
{
  "data": PackObject,
  "ts": 1723923923
}
```

## Pack を取得する

```prolog
GET API_BASE/lists/:list_id/packs/:pack_id
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の数値 ID |
| `pack_id` | string | Pack の数値 ID または UUID |

### レスポンス

```json
{
  "data": PackObject,
  "ts": 1723923923
}
```

## Pack 内の Post 一覧を取得する

```prolog
GET API_BASE/lists/:list_id/packs/:pack_id/posts?offset=:offset&limit=:limit
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の数値 ID |
| `pack_id` | string | Pack の数値 ID または UUID |

### クエリパラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `offset`  | number | ページネーション offset |
| `limit`   | number | ページネーション limit（最大 100） |

### レスポンス

```json
{
  "data": {
    "pack": PackObject,
    "posts": [PostObject, ...],
    "pagination": {
      "total": 0,
      "offset": 0,
      "next_offset": 20,
      "limit": 20
    }
  },
  "ts": 1723923923
}
```

## Pack を更新する

```prolog
PUT API_BASE/lists/:list_id/packs/:pack_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

[Create Pack](#pack-を作成する) と同じです。

### レスポンス

```json
{
  "data": PackObject,
  "ts": 1723923923
}
```

## Pack を削除する

```prolog
DELETE API_BASE/lists/:list_id/packs/:pack_id
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
