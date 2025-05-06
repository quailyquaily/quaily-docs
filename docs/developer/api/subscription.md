# Subscription API

## Transfer Members

```prolog
POST /subscriptions/{listID}/members/{userID}/transfer?dst_list_id={dstListID}
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | Yes    |

### Parameters

| Parameter   | Type   | Description                    |
| ----------- | ------ | ------------------------------ |
| `listID`    | uint64 | The ID of the list             |
| `userID`    | uint64 | The ID of the user             |
| `dstListID` | uint64 | The ID of the destination list |

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```

## Delete Member

```prolog
DELETE /subscriptions/{listID}/members/{userID}
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| No    | Yes    |

### Parameters

| Parameter | Type   | Description        |
| --------- | ------ | ------------------ |
| `listID`  | uint64 | The ID of the list |
| `userID`  | uint64 | The ID of the user |

### Response

```json
{
  "data": 1,
  "ts": 1723923923
}
```
