---
description: The API for managing API keys
---

# APIKey API

## Create API Key

```prolog
POST API_BASE/apikeys
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### Request Body

```json
{
  "name": "My Key"
}
```

### Response

```json
{
  "data": APIKeyObject,
  "ts": 1723923923
}
```

## List API Keys

```prolog
GET API_BASE/apikeys
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `apikey.read`

### Response

```json
{
  "data": [APIKeyObject, ...],
  "ts": 1723923923
}
```

## Delete API Key

```prolog
DELETE API_BASE/apikeys/:id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### Parameters

| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| `id`      | uint64 | The ID of the API key |

### Response

```json
{
  "data": APIKeyObject,
  "ts": 1723923923
}
```

## Verify API Key Hash

```prolog
POST API_BASE/apikeys/verify
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `apikey.read`

### Request Body

```json
{
  "hash": "sha256_hex_of_apikey"
}
```

### Response

```json
{
  "data": {
    "valid": true
  },
  "ts": 1723923923
}
```
