---
description: API キー管理 API
---

# APIKey API

## API Key を作成する

```prolog
POST API_BASE/apikeys
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### リクエストボディ

```json
{
  "name": "My Key"
}
```

### レスポンス

```json
{
  "data": APIKeyObject,
  "ts": 1723923923
}
```

## API Key 一覧

```prolog
GET API_BASE/apikeys
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `apikey.read`

### レスポンス

```json
{
  "data": [APIKeyObject, ...],
  "ts": 1723923923
}
```

## API Key を削除する

```prolog
DELETE API_BASE/apikeys/:id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `id`      | uint64 | API Key の ID |

### レスポンス

```json
{
  "data": APIKeyObject,
  "ts": 1723923923
}
```

## API Key ハッシュを検証する

```prolog
POST API_BASE/apikeys/verify
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `apikey.read`

### リクエストボディ

```json
{
  "hash": "sha256_hex_of_apikey"
}
```

### レスポンス

```json
{
  "data": {
    "valid": true
  },
  "ts": 1723923923
}
```
