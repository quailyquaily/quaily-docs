---
description: ユーザー Credits の API
---

# Credit API

## Credits 残高を取得する

```prolog
GET /auxilia/credits/balance
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `credit.read` または `credit.full`

### レスポンス

```json
{
  "data": USER_CREDIT_OBJECT,
  "ts": 1723923923
}
```

## Credits 台帳を取得する

```prolog
GET /auxilia/credits/ledger?offset=:offset&limit=:limit
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `credit.read` または `credit.full`

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `offset`  | number | ページネーション offset |
| `limit`   | number | ページネーション limit（デフォルト: `16`） |

### レスポンス

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

## Credits をチャージする

```prolog
POST /auxilia/credits/topup
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| No    | No     |

### リクエストボディ

```json
{
  "amount": 10,
  "credit_amount": 1000,
  "currency": "USD",
  "channel": "stripe",
  "redirect_url": "https://example.com/credit/return"
}
```

注意:

- `redirect_url` は必須です
- `amount` または `credit_amount` のどちらか一方は正の値である必要があります

### レスポンス

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

## Credits を消費する

```prolog
POST /auxilia/credits/consume
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

OAuth scope: `credit.full`

### リクエストボディ

```json
{
  "amount_credit": 10,
  "source_id": "post_ai",
  "meta": {
    "post_id": 1
  }
}
```

注意:

- `amount_credit` は正の値である必要があります
- `source_id` は必須です

### レスポンス

```json
{
  "data": CREDIT_LEDGER_OBJECT,
  "ts": 1723923923
}
```
