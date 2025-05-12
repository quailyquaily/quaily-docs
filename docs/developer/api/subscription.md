# Subscription API

## Transfer Members

```prolog
POST /subscriptions/:list_id/members/:user_id/transfer?dst_list_id=:dst_list_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | Yes    |

### Parameters

| Parameter     | Type   | Description                    |
| ------------- | ------ | ------------------------------ |
| `list_id`     | uint64 | The ID of the list             |
| `user_id`     | uint64 | The ID of the user             |
| `dst_list_id` | uint64 | The ID of the destination list |

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Update Email Sending Settings

```prolog
PUT /subscriptions/:list_id/members/:user_id/email
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | Yes    |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The ID of the list |
| `user_id` | uint64 | The ID of the user |

### Request Body

```json
{
  "enabled": true // true or false
}
```

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Delete Member

```prolog
DELETE /subscriptions/:list_id/members/:user_id
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | Yes    |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `list_id` | uint64 | The ID of the list |
| `user_id` | uint64 | The ID of the user |

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```
