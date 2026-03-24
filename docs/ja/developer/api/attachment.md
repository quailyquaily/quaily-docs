---
description: Quaily へ添付ファイルをアップロードする API
---

# Attachment API

## 添付ファイルをアップロードする

```prolog
POST /attachments?encrypted=:encrypted
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### パラメータ

| Parameter   | Type    | Description |
| ----------- | ------- | ----------- |
| `encrypted` | boolean | 任意。`true` / `false` または `1` / `0`。省略時は `false` |

`encrypted` に不正な値を渡すと `400 Bad Request` が返ります。

### Form Data

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `file`    | file | アップロードするファイル（multipart/form-data） |

### ファイル制限

- 最大サイズ: 5 MB
- 許可拡張子: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.ico`

### レスポンス

```json
{
  "data": {
    "id": 1,
    "hash_id": "ax9lo0mxo",
    "size": 100,
    "mime_type": "image/webp",
    "pathname": "media/ax9lo0mxo.webp",
    "filename": "ax9lo0mxo.webp",
    "status": 2,
    "original_mime_type": "image/png",
    "checksum": "...",
    "checksum_method": "sha1",
    "created_at": "2021-01-01T00:00:00Z",
    "updated_at": "2021-01-01T00:00:00Z",
    "view_url": "https://..."
  },
  "ts": 1723923923
}
```
