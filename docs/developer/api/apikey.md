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
| Yes   | Yes    |

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
| Yes   | Yes    |

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
