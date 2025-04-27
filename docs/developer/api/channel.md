# Channel API

## Get Channel Information

```prolog
GET API_BASE/lists/:channel_slug
```

### Parameters

| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| `channel_slug` | string | The slug of the channel |

### Response

```json
{
  "data" ChannelObject,
  "ts": 1723923923
}
```

## Get User's Channels

```prolog
GET API_BASE/users/:user_id/lists
```

### Parameters

| Parameter | Type | Description        |
| --------- | ---- | ------------------ |
| `user_id` | int  | The ID of the user |

### Response

```json
{
  "data": [ChannelObject, ...],
  "ts": 1723923923
}
```
