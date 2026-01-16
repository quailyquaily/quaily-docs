---
description: The API for managing posts of a Quaily channel
---

# Post API

## Common Parameters

| Parameter      | Type   | Description                         |
| -------------- | ------ | ----------------------------------- |
| `channel_slug` | string | The slug or numeric ID of the channel |
| `post_id`      | string | The slug or numeric ID of the post  |

## Get Post List

```prolog
GET API_BASE/lists/:channel_slug/posts?offset=:offset&limit=:limit&public=:public
```

### Parameters

| Parameter      | Type   | Description                   |
| -------------- | ------ | ----------------------------- |
| `channel_slug` | string | The slug or numeric ID of the channel |
| `offset`       | number | The offset of the post list   |
| `limit`        | number | The limit of the post list    |
| `public`       | number | 1: public posts, 0: all posts |
| `type`         | string | Optional. Filters posts for channel owners/cooperators (e.g. draft). |
| `sort`         | string | Optional. Use `score` to sort by score. |
| `ids`          | string | Optional. Comma-separated numeric post IDs. Requires authorization. |

### Notes

- `limit` defaults to 16 when omitted.
- When `public` is set or the caller is not authenticated, only published posts are returned.
- When `ids` is set, the response is a plain array of `PostObject` without pagination.

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

Same as [Common Parameters](#common-parameters).

### Response

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```

## Get Pinned Posts

```prolog
GET API_BASE/lists/:channel_slug/pinned
```

### Parameters

| Parameter      | Type   | Description                   |
| -------------- | ------ | ----------------------------- |
| `channel_slug` | string | The slug or numeric ID of the channel |

### Response

```json
{
  "data": [PostObject, ...],
  "ts": 1723923923
}
```

## Pin Posts

```prolog
PUT API_BASE/lists/:channel_slug/pinned
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter      | Type   | Description                   |
| -------------- | ------ | ----------------------------- |
| `channel_slug` | string | The slug or numeric ID of the channel |

### Request Body

```json
{
  "ids": [1, 2, 3]
}
```

### Response

```json
{
  "data": [1, 2, 3],
  "ts": 1723923923
}
```

## Check Post Slug Existence

```prolog
GET API_BASE/lists/:channel_slug/posts/check/:slug
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Parameters

| Parameter      | Type   | Description                   |
| -------------- | ------ | ----------------------------- |
| `channel_slug` | string | The slug or numeric ID of the channel |
| `slug`         | string | The post slug to check         |

### Response

```json
{
  "data": {
    "existence": 0
  },
  "ts": 1723923923
}
```

## Create Post

```prolog
POST API_BASE/lists/:channel_slug/posts
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Parameters

| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| `channel_slug` | string | The slug or numeric ID of the channel |

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
PUT API_BASE/lists/:channel_slug/posts/:post_id/update
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Parameters

| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| `channel_slug` | string | The slug or numeric ID of the channel |
| `post_id`      | string | The slug or numeric ID of the post    |

### Request Body

Same as [Create Post](#create-post).

### Response

Same as [Create Post](#create-post).

## Publish Post

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_id/publish
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Parameters

Same as [Update Post](#update-post).

### Response

Same as [Update Post](#update-post).

## Unpublish Post

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_id/unpublish
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

Same as [Publish Post](#publish-post).

## Send Post

```prolog
PUT API_BASE/lists/:channel_slug/posts/:post_id/deliver
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Parameters

Same as [Publish Post](#publish-post).

### Response

Same as [Publish Post](#publish-post).

## Get Post Content

```prolog
GET API_BASE/lists/:channel_slug/posts/:post_id/content
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Parameters

Same as [Common Parameters](#common-parameters).

### Access Rules

- List owners and cooperators always have access.
- Other users need an active paid subscription unless the post has no paid content.

### Response

```json
{
  "data": {
    "free-content": "...",
    "paid-content": "..."
  },
  "ts": 1723923923
}
```

## Duplicate Post

```prolog
POST API_BASE/lists/:channel_slug/posts/:post_id/duplicate
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Parameters

Same as [Common Parameters](#common-parameters).

### Response

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```

## Preview Post

```prolog
GET API_BASE/lists/:channel_slug/posts/:post_id/preview
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Parameters

Same as [Common Parameters](#common-parameters).

### Response

Returns an HTML document.

## Delete Post

```prolog
DELETE API_BASE/lists/:channel_slug/posts/:post_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list owner or cooperator access for the target list.

### Parameters

Same as [Common Parameters](#common-parameters).

### Response

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```

## Get Subscribed Posts

```prolog
GET API_BASE/posts/subscribed?offset=:offset&limit=:limit
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Query Parameters

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| `offset`  | number | The offset of the post list |
| `limit`   | number | The limit of the post list  |

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
    "items": [PostObject, ...]
  },
  "ts": 1723923923
}
```

## Search Similar Posts (Public)

```prolog
POST API_BASE/posts/search
```

### Request Body

```json
{
  "q": "search keyword",
  "list": 1,
  "offset": 0
}
```

### Response

```json
{
  "data": {
    "pagination": {
      "offset": 0,
      "next_offset": 30,
      "limit": 30
    },
    "items": [PostObject, ...]
  },
  "ts": 1723923923
}
```

## Search Similar Posts (All Posts)

```prolog
POST API_BASE/posts/all/search
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list owner or cooperator access for the target list.

### Request Body

Same as [Search Similar Posts (Public)](#search-similar-posts-public).

### Response

Same as [Search Similar Posts (Public)](#search-similar-posts-public).

## React to Post

```prolog
POST API_BASE/posts/reactions?id=:post_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "emoji": "😀",
  "code": "0x1f600"
}
```

### Response

```json
{
  "data": PostObject,
  "ts": 1723923923
}
```
