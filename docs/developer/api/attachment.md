---
description: The API for uploading attachments to Quaily
---

# Attachment API

## Upload Attachment

```prolog
POST /attachments?encrypted=:encrypted
```

### Authorization Required

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### Parameters

| Parameter   | Type    | Description                                                                                   |
| ----------- | ------- | --------------------------------------------------------------------------------------------- |
| `encrypted` | boolean | Optional. `true`/`false` or `1`/`0`. Defaults to `false` when omitted.                          |

Invalid `encrypted` values return `400 Bad Request`.

### Form Data

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| `file`    | file | The file to upload (multipart/form-data). |

### File Limits

- Max size: 5 MB.
- Allowed extensions: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.ico`.

### Response

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
