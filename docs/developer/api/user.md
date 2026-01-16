---
description: The API for managing users
---

# User API

## Get Me

```prolog
GET API_BASE/users/me
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Response

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## Update Me

```prolog
PUT API_BASE/users/me
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "name": "John Wick",
  "bio": "...",
  "avatar_image_url": "https://...",
  "social_ids": [
    {
      "name": "twitter",
      "value": "john_wick"
    }
  ]
}
```

### Response

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## Update Email

```prolog
PUT API_BASE/users/me/email
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "email": "new@example.com",
  "code": "123456"
}
```

### Response

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## Update Options

```prolog
PUT API_BASE/users/me/options
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Request Body

```json
{
  "options": {
    "language": "en"
  }
}
```

### Response

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## Get User

```prolog
GET API_BASE/users/:user_id
```

### Parameters

| Parameter | Type | Description        |
| --------- | ---- | ------------------ |
| `user_id` | int  | The ID of the user |

### Response

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## Query Users

```prolog
GET API_BASE/users/query
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Query Parameters

| Parameter | Type   | Description           |
| --------- | ------ | --------------------- |
| `email`   | string | The email of the user |

### Response

```json
{
  "data": [UserObject],
  "ts": 1723923923
}
```
