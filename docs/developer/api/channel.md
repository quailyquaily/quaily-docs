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
