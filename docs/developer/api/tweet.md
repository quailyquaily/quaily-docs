---
description: The API for tweets
---

# Tweet API

## Get Tweets

```prolog
GET API_BASE/tweets?list=:list&offset=:offset&limit=:limit&public=:public
```

### Parameters

| Parameter | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| `list`    | string | The list slug or numeric ID (required).  |
| `offset`  | number | Pagination offset.                       |
| `limit`   | number | Pagination limit (default: 16).          |
| `public`  | number | 1: public tweets, 0: all tweets.         |

### Notes

- When `public` is set or the caller is not authenticated, tweets are masked.
- Authenticated users receive tweets based on their subscription level.

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
    "items": [TweetObject, ...]
  },
  "ts": 1723923923
}
```

## Get Pinned Tweets

```prolog
GET API_BASE/tweets/pinned?list=:list
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires an active subscription to the list (or list owner access).

### Parameters

| Parameter | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| `list`    | string | The list slug or numeric ID (required). |

### Response

```json
{
  "data": [TweetObject, ...],
  "ts": 1723923923
}
```

## Create Tweet

```prolog
POST API_BASE/tweets?list=:list
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Parameters

| Parameter | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| `list`    | string | The list slug or numeric ID (required). |

### Request Body

```json
{
  "text": "...",
  "is_premium": false,
  "tags": ["tag1", "tag2"]
}
```

### Response

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## Get Tweet

```prolog
GET API_BASE/tweets/:tweet_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires an active subscription to the list (or list owner access).

### Response

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## Delete Tweet

```prolog
DELETE API_BASE/tweets/:tweet_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list cooperator access.

### Response

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## Pin Tweet

```prolog
PUT API_BASE/tweets/:tweet_id/pin
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list owner access.

### Response

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## Unpin Tweet

```prolog
DELETE API_BASE/tweets/:tweet_id/unpin
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires list owner access.

### Response

```json
{
  "data": TweetObject,
  "ts": 1723923923
}
```

## React to Tweet

```prolog
POST API_BASE/tweets/:tweet_id/reactions
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires an active subscription to the list (or list owner access).

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
  "data": TweetObject,
  "ts": 1723923923
}
```

## List Tweet Replies

```prolog
GET API_BASE/tweets/:tweet_id/replies?offset=:offset&limit=:limit
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires an active subscription to the list (or list owner access).

### Query Parameters

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| `offset`  | number | Pagination offset.     |
| `limit`   | number | Pagination limit.      |

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
    "items": [TweetReplyObject, ...]
  },
  "ts": 1723923923
}
```

## Create Tweet Reply

```prolog
POST API_BASE/tweets/:tweet_id/replies
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires an active subscription to the list (or list owner access).

### Request Body

```json
{
  "text": "...",
  "reply_id": 0
}
```

### Response

```json
{
  "data": TweetReplyObject,
  "ts": 1723923923
}
```

## Delete Tweet Reply

```prolog
DELETE API_BASE/tweets/:tweet_id/replies/:reply_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

Requires an active subscription to the list (or list owner access). Only reply authors or list owners can delete.

### Response

```json
{
  "data": TweetReplyObject,
  "ts": 1723923923
}
```
