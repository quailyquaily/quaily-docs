---
description: The API for managing subscriptions of a Quaily channel
---

# Subscription API

## Subscribe (With Challenge)

```prolog
POST /subscriptions/:list_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The numeric ID of the list |

### Request Body

```json
{
  "email": "user@example.com",
  "challenge-provider": "turnstile",
  "challenge-token": "...",
  "challenge-action": "subscribe"
}
```

When challenge is enabled, challenge fields are required. Logged-in users can use the no-challenge endpoint.

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Subscribe (No Challenge)

```prolog
POST /subscriptions/:list_id/no-challenge
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The numeric ID of the list |

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Unsubscribe

```prolog
DELETE /subscriptions/:list_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | uint64 | The ID of the list (slug is supported) |

### Request Body (Optional)

```json
{
  "trace_id": "..."
}
```

You can also pass `trace_id` as a query parameter.

Auth is optional when using `trace_id`. Logged-in users can omit `trace_id`.

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Update Email Settings

```prolog
PUT /subscriptions/:list_id/email
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The numeric ID of the list |

### Request Body

```json
{
  "enabled": true
}
```

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Disable Email Delivery (One-click)

```prolog
POST /subscriptions/:list_id/delete
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The numeric ID of the list |

### Request Body (Optional)

```json
{
  "trace_id": "..."
}
```

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Get Subscription Relation

```prolog
GET /subscriptions/:list_id/rel
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `list_id` | uint64 | The ID of the list (slug is supported) |

### Response

```json
{
  "data": SubscriptionObject,
  "ts": 1723923923
}
```

## Get My Subscriptions

```prolog
GET /subscriptions
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Response

```json
{
  "data": [SubscriptionObject, ...],
  "ts": 1723923923
}
```

## Get Subscription Opponent

```prolog
GET /subscriptions/opponent?trace_id=:trace_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### Query Parameters

| Parameter  | Type   | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| `trace_id` | string | Delivery trace ID for email-based lookup.    |
| `list_id`  | uint64 | List ID for logged-in user lookup (optional). |

### Response

```json
{
  "data": {
    "list": ChannelObject,
    "sub": SubscriptionObject
  },
  "ts": 1723923923
}
```

## Get List Subscriptions

```prolog
GET /lists/:list_id/subscriptions?offset=:offset&limit=:limit&email=:email&premium=:premium
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The ID of the list |

### Query Parameters

| Parameter | Type   | Description                         |
| --------- | ------ | ----------------------------------- |
| `offset`  | number | The offset of the subscription list |
| `limit`   | number | The limit of the subscription list  |
| `email`   | string | Filter by subscriber email          |
| `premium` | string | Filter by premium status            |

### Response

```json
{
  "data": {
    "pagination": {
      "total": 0,
      "offset": 0,
      "next_offset": 100,
      "limit": 100
    },
    "items": [SubscriptionObject, ...]
  },
  "ts": 1723923923
}
```

## Transfer Members

```prolog
POST /subscriptions/:list_id/members/:user_id/transfer?dst_list_id=:dst_list_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter     | Type   | Description                    |
| ------------- | ------ | ------------------------------ |
| `list_id`     | uint64 | The ID of the list             |
| `user_id`     | uint64 | The ID of the user             |
| `dst_list_id` | uint64 | The ID of the destination list |

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Delete Member

```prolog
DELETE /subscriptions/:list_id/members/:user_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The ID of the list |
| `user_id` | uint64 | The ID of the user |

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Update Email Sending Settings

```prolog
PUT /subscriptions/:list_id/members/:user_id/email
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The ID of the list |
| `user_id` | uint64 | The ID of the user |

### Request Body

```json
{
  "enabled": true // true or false
}
```

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## List Member Subscriptions

```prolog
GET /subscriptions/:list_id/members/:user_id/subs
```

This API will list all the subscriptions owned by the same channel owner of given member id

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The ID of the list |
| `user_id` | uint64 | The ID of the user |

### Response

```json
{
  "data": [ SUBSCRIPTION_OBJECT ... ],
  "ts": 1723923923
}
```

## \*Add Member

```prolog
POST /auxilia/subscriptions/:list_id/members/add
```

_This API is only available to the Quaily+ plan users_

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The ID of the list |

### Request Body

```json
{
  "members": [
    {
      "email": "test@example.com",
      "name": "Test User"
    },
    {
      "email": "test2@example.com",
      "name": "Test User 2"
    }
  ]
}
```

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```
