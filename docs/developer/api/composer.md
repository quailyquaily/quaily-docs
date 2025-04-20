# Composer API

## Generate Metadata

```prolog
POST /composer/metadata?includes=:includes
```

### Parameters

| Parameter  | Type   | Description                                                                                                                     |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `includes` | string | The includes to generate. Use `slug`, `summary`, `tags`. Use comma to separate multiple values. Default is `slug,summary,tags`. |

### Request Body

```json
{
  "title": "Post Title",
  "content": "Post Content"
}
```

### Response

```json
{
  "data": {
    "slug": "post-slug",
    "summary": "Post Summary",
    "tags": "tag1,tag2,tag3"
  },
  "ts": 1723923923
}
```
