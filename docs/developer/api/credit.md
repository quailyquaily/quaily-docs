---
description: The API for user credits
---

# Credit API

## Get Credit Balance

```prolog
GET /auxilia/credits/balance
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `credit.read` or `credit.full`

### Response

```json
{
  "data": USER_CREDIT_OBJECT,
  "ts": 1723923923
}
```

## Get Credit Ledger

```prolog
GET /auxilia/credits/ledger?offset=:offset&limit=:limit
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `credit.read` or `credit.full`

### Parameters

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `offset`  | number | Pagination offset.                |
| `limit`   | number | Pagination limit (default: `16`). |

### Response

```json
{
  "data": {
    "pagination": {
      "offset": 0,
      "next_offset": 16,
      "limit": 16
    },
    "items": [CREDIT_LEDGER_OBJECT, ...]
  },
  "ts": 1723923923
}
```

## Topup Credit

```prolog
POST /auxilia/credits/topup
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### Request Body

```json
{
  "amount": 10,
  "credit_amount": 1000,
  "currency": "USD",
  "channel": "stripe",
  "redirect_url": "https://example.com/credit/return"
}
```

Notes:

- `redirect_url` is required.
- At least one of `amount` or `credit_amount` must be positive.

### Response

```json
{
  "data": {
    "order_id": 1,
    "payment_url": "https://...",
    "credit_amount": 1000
  },
  "ts": 1723923923
}
```

## Consume Credit

```prolog
POST /auxilia/credits/consume
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `credit.full`

### Request Body

```json
{
  "amount_credit": 10,
  "source_id": "post_ai",
  "meta": {
    "post_id": 1
  }
}
```

Notes:

- `amount_credit` must be positive.
- `source_id` is required.

### Response

```json
{
  "data": CREDIT_LEDGER_OBJECT,
  "ts": 1723923923
}
```
