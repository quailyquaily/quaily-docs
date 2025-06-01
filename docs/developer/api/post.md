---
description: The API for managing posts of a Quaily channel
---

# Post API

## Get Post List

```prolog
GET API_BASE/lists/:channel_slug/posts?offset=:offset&limit=:limit&public=:public
```

### Parameters

| Parameter      | Type   | Description                   |
| -------------- | ------ | ----------------------------- |
| `channel_slug` | string | The slug of the channel       |
| `offset`       | number | The offset of the post list   |
| `limit`        | number | The limit of the post list    |
| `public`       | number | 1: public posts, 0: all posts |

### Response

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

## Get Post

```prolog
GET API_BASE/lists/:channel_slug/posts/:post_id
```

### Parameters

| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| `channel_slug` | string | The slug of the channel |
| `post_id`      | number | The id of the post      |

### Response

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```

## Create Post

```prolog
POST API_BASE/lists/:channel_slug/posts
```

### Parameters

| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| `channel_slug` | string | The slug of the channel |

### Request Body

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

### Response

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```

## Update Post

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_slug
```

### Parameters

| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| `channel_slug` | string | The slug of the channel |
| `post_slug`    | string | The slug of the post    |

### Request Body

Same as [Create Post](#create-post).

### Response

Same as [Create Post](#create-post).

## Publish Post

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_slug/publish
```

### Parameters

Same as [Update Post](#update-post).

### Response

Same as [Update Post](#update-post).

## Unpublish Post

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_slug/unpublish
```

Same as [Publish Post](#publish-post).

## Send Post

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_slug/deliver
```

### Parameters

Same as [Publish Post](#publish-post).

### Response

Same as [Publish Post](#publish-post).

## Get Post Content

```prolog
GET API_BASE/lists/:channel_slug/posts/:post_slug/content
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

Same as [Get Post](#get-post).

### Response

```json
{
  "data": {
    "free_content": "...",
    "paid_content": "..."
  },
  "ts": 1723923923
}
```

## Delete Post

```prolog
DELETE API_BASE/lists/:channel_slug/posts/:post_slug
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

Same as [Get Post](#get-post).

### Response

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```
