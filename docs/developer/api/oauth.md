---
description: The OAuth 2.0 API for third-party applications
---

# OAuth API

## Get App

```prolog
GET API_BASE/apps/:app_id
```

### Parameters

| Parameter | Type   | Description   |
| --------- | ------ | ------------- |
| `app_id`  | string | The app ID.   |

### Response

```json
{
  "data": AppObject,
  "ts": 1723923923
}
```

## Authorize

```prolog
GET API_BASE/oauth/authorize?client_id=:client_id&redirect_uri=:redirect_uri&scope=:scope&state=:state&code_challenge=:code_challenge&code_challenge_method=:method&json=:json
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Query Parameters

| Parameter               | Type   | Description                                      |
| ----------------------- | ------ | ------------------------------------------------ |
| `client_id`             | string | OAuth client ID.                                 |
| `redirect_uri`          | string | Redirect URI (must match app config).            |
| `scope`                 | string | OAuth scope (e.g. `user.public`, `post.write`, `credit.read`). |
| `state`                 | string | OAuth state value.                               |
| `code_challenge`        | string | PKCE challenge.                                  |
| `code_challenge_method` | string | `S256` or `plain` (default: `S256`).             |
| `json`                  | string | `true` to return JSON instead of redirect.       |

### Response

- Redirects to `redirect_uri` with `code` and `state` by default.
- When `json=true`, returns:

```json
{
  "data": {
    "client_id": "app_id",
    "redirect_uri": "https://...",
    "url": "https://...",
    "code": "...",
    "state": "..."
  },
  "ts": 1723923923
}
```

## Scopes

| Scope         | Description                                      |
| ------------- | ------------------------------------------------ |
| `user.public` | Read basic profile information for the user.     |
| `user.full`   | Read full profile information for the user.      |
| `post.write`  | Read and manage posts and related content.       |
| `credit.read` | Read credit balance and credit ledger entries.   |
| `credit.full`* | Read credit balance and ledger, and consume credit. |
| `apikey.read` | Read API keys and verify API key hashes.         |

> * Requires the app to be trusted, public apps cannot request this scope.

## Token

```prolog
POST API_BASE/oauth/token
```

### Request Body (Form)

```text
grant_type=authorization_code
client_id=...
redirect_uri=...
code=...
code_verifier=...
```

For refresh:

```text
grant_type=refresh_token
client_id=...
refresh_token=...
```

### Response

Returns raw JSON (no wrapper):

```json
{
  "access_token": "...",
  "token_type": "Bearer",
  "refresh_token": "...",
  "expires_in": 2592000,
  "expiry": "2025-04-19T00:00:00Z"
}
```

## UserInfo

```prolog
GET API_BASE/oauth/userinfo
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | No     |

### Response

Returns raw JSON (no wrapper), in which `sub` is the pairwise OAuth user ID
for the app and `uuid` is the user's global UUID. Email fields are present
only when available.

```json
{
  "sub": "...",
  "uuid": "...",
  "name": "User Name",
  "picture": "https://...",
  "email": "user@example.com",
  "email_verified": true
}
```

## Revoke App

```prolog
DELETE API_BASE/oauth/apps/:app_id
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
