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
