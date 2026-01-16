---
description: The API for packs (post collections)
---

# Pack API

## Get Packs

```prolog
GET API_BASE/lists/:list_id/packs
```

### Parameters

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `list_id` | uint64 | The numeric ID of the list.    |

### Response

```json
{
  "data": [PackObject, ...],
  "ts": 1723923923
}
```

## Create Pack

```prolog
POST API_BASE/lists/:list_id/packs
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `list_id` | uint64 | The numeric ID of the list.    |

### Request Body

```json
{
  "title": "Pack Title",
  "description": "...",
  "cover_image_url": "https://...",
  "post_ids": [1, 2, 3]
}
```

### Response

```json
{
  "data": PackObject,
  "ts": 1723923923
}
```

## Get Pack

```prolog
GET API_BASE/lists/:list_id/packs/:pack_id
```

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | uint64 | The numeric ID of the list.       |
| `pack_id` | string | Pack numeric ID or UUID.          |

### Response

```json
{
  "data": PackObject,
  "ts": 1723923923
}
```

## Get Pack Posts

```prolog
GET API_BASE/lists/:list_id/packs/:pack_id/posts?offset=:offset&limit=:limit
```

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | uint64 | The numeric ID of the list.       |
| `pack_id` | string | Pack numeric ID or UUID.          |

### Query Parameters

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| `offset`  | number | Pagination offset.          |
| `limit`   | number | Pagination limit (max 100). |

### Response

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

## Update Pack

```prolog
PUT API_BASE/lists/:list_id/packs/:pack_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

Same as [Create Pack](#create-pack).

### Response

```json
{
  "data": PackObject,
  "ts": 1723923923
}
```

## Delete Pack

```prolog
DELETE API_BASE/lists/:list_id/packs/:pack_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Response

```json
{
  "data": null,
  "ts": 1723923923
}
```
