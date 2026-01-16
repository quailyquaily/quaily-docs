---
description: The API for generating metadata by Quaily AI
---

# Composer API

## Generate Metadata

```prolog
POST /composer/metadata?includes=:includes
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter  | Type   | Description                                                                                                                     |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `includes` | string | The includes to generate. Use `slug`, `summary`, `tags`. Use comma to separate multiple values. Default is `slug,summary,tags`. |

### Request Body

```json
{
  "title": "Post Title",
  "content": "Post Content"
}
```

### Response

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

## Generate Tweets

```prolog
POST /composer/generate-tweets
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "title": "Post Title",
  "content": "Post Content"
}
```

### Response

```json
{
  "data": {
    "tweets": "..."
  },
  "ts": 1723923923
}
```

## Search Unsplash Photos

```prolog
GET /composer/unsplash/photos/search?query=:query&page=:page&limit=:limit
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Query Parameters

| Parameter | Type   | Description                |
| --------- | ------ | -------------------------- |
| `query`   | string | Search keyword (required). |
| `page`    | number | Page number (default: 1).  |
| `limit`   | number | Page size (default: 10).   |

### Response

Returns the Unsplash search response payload.

## Trigger Unsplash Download URL

```prolog
GET /composer/unsplash/photos/download_url?endpoint=:endpoint
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Query Parameters

| Parameter  | Type   | Description                 |
| ---------- | ------ | --------------------------- |
| `endpoint` | string | Unsplash download endpoint. |

### Response

```json
{
  "data": {
    "url": "https://..."
  },
  "ts": 1723923923
}
```
