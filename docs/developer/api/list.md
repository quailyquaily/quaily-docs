---
description: The API for managing channels (lists) and list settings
---

# List API

### Notes

- Most write operations require the list owner role.
- Endpoints under `/delivery` and `GET /lists/:list_id/channel` require list cooperator role.

## Create List

```prolog
POST API_BASE/lists
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "slug": "my-channel",
  "title": "My Channel",
  "description": "...",
  "avatar_image_url": "https://...",
  "favicon_image_url": "https://...",
  "widget_custom_styles": "..."
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Search Lists

```prolog
POST API_BASE/lists/search
```

### Request Body

```json
{
  "q": "keyword",
  "offset": 0,
  "limit": 20
}
```

### Response

```json
{
  "data": {
    "pagination": {
      "offset": 0,
      "next_offset": 20,
      "limit": 20
    },
    "items": [ChannelObject, ...]
  },
  "ts": 1723923923
}
```

## Get List

```prolog
GET API_BASE/lists/:list_id
```

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | string | The slug or numeric ID of the list |

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Get List Metrics

```prolog
GET API_BASE/lists/:list_id/metrics
```

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | string | The slug or numeric ID of the list |

### Response

```json
{
  "data": ListMetricsObject,
  "ts": 1723923923
}
```

## Get List By Domain

```prolog
GET API_BASE/lists/domains/:domain
```

### Parameters

| Parameter | Type   | Description         |
| --------- | ------ | ------------------- |
| `domain`  | string | The custom domain.  |

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update List

```prolog
PUT API_BASE/lists/:list_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | string | The slug or numeric ID of the list |

### Request Body

Same as [Create List](#create-list).

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update List Slug

```prolog
PUT API_BASE/lists/:list_id/slug?slug=:slug
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | string | The slug or numeric ID of the list |
| `slug`    | string | New slug value.                   |

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update List Options

```prolog
PUT API_BASE/lists/:list_id/options
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | string | The slug or numeric ID of the list |

### Request Body

```json
{
  "options": {
    "comment_enabled": true,
    "comment_strategy": 0,
    "shorten_url_enabled": false
  }
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update List Channel Settings

```prolog
PUT API_BASE/lists/:list_id/channel
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | string | The slug or numeric ID of the list |

### Request Body

```json
{
  "telegram_channel_enabled": false,
  "telegram_channel_id": "@channel",
  "discord_channel_enabled": false,
  "discord_channel_id": "123",
  "line_channel_enabled": false,
  "line_channel_id": "123",
  "twitter_channel_enabled": false,
  "bluesky_channel_enabled": false,
  "slack_channel_enabled": false
}
```

### Response

```json
{
  "data": ListChannelObject,
  "ts": 1723923923
}
```

## Get List Channel Settings

```prolog
GET API_BASE/lists/:list_id/channel
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | string | The slug or numeric ID of the list |

### Response

```json
{
  "data": ListChannelObject,
  "ts": 1723923923
}
```

## Generate Line Keypair

```prolog
POST API_BASE/lists/:list_id/channel/line/keys
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | string | The slug or numeric ID of the list |

### Response

```json
{
  "data": {
    "line_jwk_pub": "...",
    "line_jwk_pub_decoded": "..."
  },
  "ts": 1723923923
}
```

## Update List Bulletin

```prolog
PUT API_BASE/lists/:list_id/bulletin
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "bulletin": "..."
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update Text Templates

```prolog
PUT API_BASE/lists/:list_id/text_templates
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "text_templates": {
    "email_signature": "..."
  }
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update Email Settings

```prolog
PUT API_BASE/lists/:list_id/email_settings
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "email_channel_enabled": true,
  "email_deny_list": ["example.com"]
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update Analytics Settings

```prolog
PUT API_BASE/lists/:list_id/analytics
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "a_umami_id": "...",
  "a_umami_base": "https://...",
  "a_ga_id": "G-XXXXXXXXXX",
  "shorten_url_enabled": false,
  "shorten_url_provider": "sink",
  "sink_site_base": "https://...",
  "sink_site_token": "..."
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update Domain Settings

```prolog
PUT API_BASE/lists/:list_id/domain
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "custom_domain_enabled": true,
  "domain": "example.com",
  "canonical_base": "https://example.com"
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Verify Domain

```prolog
POST API_BASE/lists/:list_id/domain/verify
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update Comment Settings

```prolog
PUT API_BASE/lists/:list_id/comment
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "comment_enabled": true,
  "comment_strategy": 0
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update Tweet Settings

```prolog
PUT API_BASE/lists/:list_id/tweets
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "tweets_enabled": true,
  "bulletin": "..."
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Update Cooperators

```prolog
PUT API_BASE/lists/:list_id/cooperators
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "cooperators": [1, 2, 3]
}
```

### Response

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## Request Deletion

```prolog
DELETE API_BASE/lists/:list_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Response

```json
{
  "data": {
    "id": 1
  },
  "ts": 1723923923
}
```

## Export Data

```prolog
POST API_BASE/lists/:list_id/export.zip
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Response

```json
{
  "data": 0,
  "ts": 1723923923
}
```

## Delivery Tasks (List Scope)

```prolog
GET API_BASE/lists/:list_id/delivery?offset=:offset&limit=:limit
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

`list_id` must be a numeric ID for delivery endpoints.

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
    "items": [DeliveryTaskObject, ...]
  },
  "ts": 1723923923
}
```

```prolog
PUT API_BASE/lists/:list_id/delivery/:task_id
```

```prolog
PUT API_BASE/lists/:list_id/delivery/:task_id/cancel
```

```prolog
GET API_BASE/lists/:list_id/delivery/:task_id/report
```

All delivery task routes require list cooperator permission and return the matching task or report payload.
