# Attachment API

## Upload Attachment

```prolog
POST /attachments?encrypted=:encrypted
```

### Parameters

| Parameter   | Type    | Description                       |
| ----------- | ------- | --------------------------------- |
| `encrypted` | boolean | Whether to encrypt the attachment |

### Form Data

| Parameter | Type | Description        |
| --------- | ---- | ------------------ |
| `file`    | file | The file to upload |

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
