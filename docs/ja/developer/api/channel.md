---
description: Quaily アカウントのチャンネルを扱う API
---

# Channel API

## チャンネル情報を取得する

```prolog
GET API_BASE/lists/:channel_slug
```

### パラメータ

| Parameter      | Type   | Description |
| -------------- | ------ | ----------- |
| `channel_slug` | string | channel の slug または数値 ID |

### レスポンス

```json
{
  "data": ChannelObject,
  "ts": 1723923923
}
```

## ユーザーのチャンネル一覧を取得する

```prolog
GET API_BASE/users/:user_id/lists
```

### パラメータ

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `user_id` | int  | user の ID |

### レスポンス

```json
{
  "data": [ChannelObject, ...],
  "ts": 1723923923
}
```
