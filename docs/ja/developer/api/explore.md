---
description: 探索・トレンド取得 API
---

# Explore API

## トレンド記事

```prolog
GET API_BASE/explore/trending/posts?offset=:offset&limit=:limit&lang=:lang
```

### クエリパラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `offset`  | number | ページネーション offset |
| `limit`   | number | ページネーション limit（デフォルト: 16） |
| `lang`    | string | 任意の言語コード（デフォルトはリクエストに応じて決定） |

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
    "items": [PostObject, ...],
    "langs": ["en"]
  },
  "ts": 1723923923
}
```

## トレンド List

```prolog
GET API_BASE/explore/trending/lists
```

### レスポンス

```json
{
  "data": null,
  "ts": 1723923923
}
```
