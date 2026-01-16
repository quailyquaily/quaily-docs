---
description: The API for authentication and token exchange
---

# Auth API

## Request Email Code

```prolog
POST API_BASE/auth/code
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### Request Body

```json
{
  "email": "user@example.com",
  "lang": "en",
  "scene": "login"
}
```

`scene` can be `login` or `replace_email`.

### Response

```json
{
  "data": null,
  "ts": 1723923923
}
```

## Request Google OAuth URL

```prolog
POST API_BASE/auth/google/url?state=:state
```

### Parameters

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| `state`   | string | OAuth state value (required). |

### Response

```json
{
  "data": {
    "url": "https://..."
  },
  "ts": 1723923923
}
```

## Login

```prolog
POST API_BASE/auth/login
```

### Request Body

```json
{
  "method": "email_code",
  "email": "user@example.com",
  "code": "123456",
  "lang": "en"
}
```

For Google OAuth login:

```json
{
  "method": "google_oauth",
  "code": "oauth_code",
  "state": "state",
  "lang": "en"
}
```

### Response

```json
{
  "data": {
    "user": UserObject,
    "access_token": "..."
  },
  "ts": 1723923923
}
```

## Issue Ephemeral Token

```prolog
POST API_BASE/auth/ephemeral?origin=:origin
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter | Type   | Description                         |
| --------- | ------ | ----------------------------------- |
| `origin`  | string | The origin for the ephemeral token. |

### Response

```json
{
  "data": {
    "ephemeral_token": "..."
  },
  "ts": 1723923923
}
```

## Exchange Ephemeral Token

```prolog
POST API_BASE/auth/ephemeral/exchange?token=:token
```

### Parameters

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| `token`   | string | Ephemeral token (required). |

### Response

```json
{
  "data": {
    "user": UserObject,
    "access_token": "..."
  },
  "ts": 1723923923
}
```
