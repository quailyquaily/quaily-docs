---
description: 認証とトークン交換の API
---

# Auth API

## メールコードを送る

```prolog
POST API_BASE/auth/code
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### リクエストボディ

```json
{
  "email": "user@example.com",
  "lang": "en",
  "scene": "login"
}
```

`scene` には `login` または `replace_email` を指定できます。

### レスポンス

```json
{
  "data": null,
  "ts": 1723923923
}
```

## Google OAuth URL を取得する

```prolog
POST API_BASE/auth/google/url?state=:state
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `state`   | string | OAuth state 値（必須） |

### レスポンス

```json
{
  "data": {
    "url": "https://..."
  },
  "ts": 1723923923
}
```

## ログイン

```prolog
POST API_BASE/auth/login
```

### リクエストボディ

```json
{
  "method": "email_code",
  "email": "user@example.com",
  "code": "123456",
  "lang": "en"
}
```

Google OAuth でログインする場合:

```json
{
  "method": "google_oauth",
  "code": "oauth_code",
  "state": "state",
  "lang": "en"
}
```

### レスポンス

```json
{
  "data": {
    "user": UserObject,
    "access_token": "..."
  },
  "ts": 1723923923
}
```

## Ephemeral Token を発行する

```prolog
POST API_BASE/auth/ephemeral?origin=:origin
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `origin`  | string | Ephemeral token の発行元 origin |

### レスポンス

```json
{
  "data": {
    "ephemeral_token": "..."
  },
  "ts": 1723923923
}
```

## Ephemeral Token を交換する

```prolog
POST API_BASE/auth/ephemeral/exchange?token=:token
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `token`   | string | Ephemeral token（必須） |

### レスポンス

```json
{
  "data": {
    "user": UserObject,
    "access_token": "..."
  },
  "ts": 1723923923
}
```
