---
description: 分析とトラッキングの API
---

# Analytics API

## 記事分析

```prolog
GET API_BASE/lists/:list_id/posts/:post_id/analytics?start_date=:start_date&end_date=:end_date&granularity=:granularity
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `list_id` | uint64 | List の数値 ID |
| `post_id` | uint64 | Post の数値 ID |

### クエリパラメータ

| Parameter     | Type   | Description |
| ------------- | ------ | ----------- |
| `start_date`  | string | `YYYY-MM-DD` 形式の日付（デフォルト: 過去 30 日） |
| `end_date`    | string | `YYYY-MM-DD` 形式の日付（デフォルト: 今日） |
| `granularity` | string | `day`（デフォルト） |

### レスポンス

```json
{
  "data": {
    "summary": { ... },
    "daily": [ ... ],
    "sources_summary": [ ... ]
  },
  "ts": 1723923923
}
```

## List 分析（記事）

```prolog
GET API_BASE/lists/:list_id/analytics/posts?start_date=:start_date&end_date=:end_date
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
  "data": {
    "items": [ ... ],
    "total": 0,
    "daily": [ ... ]
  },
  "ts": 1723923923
}
```

## List 分析（流入元）

```prolog
GET API_BASE/lists/:list_id/analytics/sources?start_date=:start_date&end_date=:end_date
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
  "data": {
    "sources": [
      {
        "source": "direct",
        "views": 0,
        "percentage": 0
      }
    ],
    "total_views": 0
  },
  "ts": 1723923923
}
```
