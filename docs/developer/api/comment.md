---
description: The API for comments
---

# Comment API

## List Comments By Post

```prolog
GET API_BASE/comments?post_id=:post_id&offset=:offset&limit=:limit
```

### Parameters

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| `post_id` | uint64 | The post ID.           |
| `offset`  | number | Pagination offset.     |
| `limit`   | number | Pagination limit.      |

### Response

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

## Create Comment

```prolog
POST API_BASE/comments
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "post_id": 1,
  "quote_comment_id": 0,
  "content": "..."
}
```

### Response

```json
{
  "data": CommentObject,
  "ts": 1723923923
}
```

## Approve Comment

```prolog
PUT API_BASE/comments/:comment_id/approve
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Only the post owner can approve or reject comments.

### Response

```json
{
  "data": null,
  "ts": 1723923923
}
```

## Reject Comment

```prolog
PUT API_BASE/comments/:comment_id/reject
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

## Mark Comment as Spam

```prolog
PUT API_BASE/comments/:comment_id/spam
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

## Delete Comment

```prolog
DELETE API_BASE/comments/:comment_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Authors and post owners can delete comments.

### Response

```json
{
  "data": null,
  "ts": 1723923923
}
```
