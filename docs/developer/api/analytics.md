---
description: The API for analytics and tracking
---

# Analytics API

## Post Analytics

```prolog
GET API_BASE/lists/:list_id/posts/:post_id/analytics?start_date=:start_date&end_date=:end_date&granularity=:granularity
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| `list_id` | uint64 | The numeric ID of the list. |
| `post_id` | uint64 | The numeric ID of the post. |

### Query Parameters

| Parameter     | Type   | Description                                   |
| ------------- | ------ | --------------------------------------------- |
| `start_date`  | string | Date in `YYYY-MM-DD` (default: last 30 days). |
| `end_date`    | string | Date in `YYYY-MM-DD` (default: today).        |
| `granularity` | string | `day` (default).                              |

### Response

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

## List Analytics (Posts)

```prolog
GET API_BASE/lists/:list_id/analytics/posts?start_date=:start_date&end_date=:end_date
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| `list_id` | uint64 | The numeric ID of the list. |

### Response

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

## List Analytics (Sources)

```prolog
GET API_BASE/lists/:list_id/analytics/sources?start_date=:start_date&end_date=:end_date
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description               |
| --------- | ------ | ------------------------- |
| `list_id` | uint64 | The numeric ID of the list. |

### Response

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
