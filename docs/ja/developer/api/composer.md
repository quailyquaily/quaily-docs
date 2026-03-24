---
description: Quaily AI でメタデータを生成する API
---

# Composer API

## メタデータを生成する

```prolog
POST /composer/metadata?includes=:includes
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter  | Type   | Description |
| ---------- | ------ | ----------- |
| `includes` | string | 生成対象。`slug`、`summary`、`tags` を指定可能。複数はカンマ区切り。デフォルトは `slug,summary,tags` |

### リクエストボディ

```json
{
  "title": "Post Title",
  "content": "Post Content"
}
```

### レスポンス

```json
{
  "data": {
    "slug": "post-slug",
    "summary": "Post Summary",
    "tags": "tag1,tag2,tag3"
  },
  "ts": 1723923923
}
```

## ツイート文を生成する

```prolog
POST /composer/generate-tweets
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "title": "Post Title",
  "content": "Post Content"
}
```

### レスポンス

```json
{
  "data": {
    "tweets": "..."
  },
  "ts": 1723923923
}
```

## Unsplash の画像を検索する

```prolog
GET /composer/unsplash/photos/search?query=:query&page=:page&limit=:limit
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### クエリパラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `query`   | string | 検索キーワード（必須） |
| `page`    | number | ページ番号（デフォルト: 1） |
| `limit`   | number | ページサイズ（デフォルト: 10） |

### レスポンス

Unsplash の検索レスポンスをそのまま返します。

## Unsplash の download URL をトリガーする

```prolog
GET /composer/unsplash/photos/download_url?endpoint=:endpoint
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### クエリパラメータ

| Parameter  | Type   | Description |
| ---------- | ------ | ----------- |
| `endpoint` | string | Unsplash の download endpoint |

### レスポンス

```json
{
  "data": {
    "url": "https://..."
  },
  "ts": 1723923923
}
```
