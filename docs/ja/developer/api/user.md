---
description: ユーザー管理 API
---

# User API

## 自分の情報を取得する

```prolog
GET API_BASE/users/me
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### レスポンス

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## 自分の情報を更新する

```prolog
PUT API_BASE/users/me
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

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

### レスポンス

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## Email を更新する

```prolog
PUT API_BASE/users/me/email
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "email": "new@example.com",
  "code": "123456"
}
```

### レスポンス

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## Options を更新する

```prolog
PUT API_BASE/users/me/options
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### リクエストボディ

```json
{
  "options": {
    "language": "en"
  }
}
```

### レスポンス

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## ユーザーを取得する

```prolog
GET API_BASE/users/:user_id
```

### パラメータ

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `user_id` | int  | user の ID |

### レスポンス

```json
{
  "data": UserObject,
  "ts": 1723923923
}
```

## ユーザーを検索する

```prolog
GET API_BASE/users/query
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### クエリパラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `email`   | string | user の email |

### レスポンス

```json
{
  "data": [UserObject],
  "ts": 1723923923
}
```
