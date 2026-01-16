---
description: The API for exploration and trending content
---

# Explore API

## Trending Posts

```prolog
GET API_BASE/explore/trending/posts?offset=:offset&limit=:limit&lang=:lang
```

### Query Parameters

| Parameter | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| `offset`  | number | Pagination offset.                              |
| `limit`   | number | Pagination limit (default: 16).                 |
| `lang`    | string | Optional language code (defaults by request).   |

### Response

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

## Trending Lists

```prolog
GET API_BASE/explore/trending/lists
```

### Response

```json
{
  "data": null,
  "ts": 1723923923
}
```
