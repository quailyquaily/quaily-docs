# Response Object

## User Object

```json
{
  "id": 1,
  "name": "John Wick",
  "bio": "...",
  "tagline": "...",
  "avatar_image_url": "https://...",
  "email": "john@wick.com",
  "lang": "en",
  "status": 0,
  "social_ids": [
    {
      "name": "twitter",
      "value": "john_wick"
    },
    {
      "name": "mastodon",
      "value": "john_wick"
    },
    // ...
  ],
  "user_options": {...},
  "created_at": "2024-04-19T04:47:14Z"
}
```

## Channel Object

```json
{
  "data": {
    "id": 1,
    "slug": "my-channel",
    "title": "My Channel",
    "avatar_image_url": "https://...",
    "favicon_image_url": "https://...",
    "description": "...",
    "tagline": "...",
    "user_id": 1,
    "cooperators": [],
    "premium_plans_enabled": true,
    "delivery_quota": 3,
    "email_channel_enabled": true,
    "email_deny_list": [],
    "email_onboarding_text": "...",
    "email_signature_text": "...",
    "custom_domain_enabled": true,
    "domain": "...",
    "canonical_base": "https://...",
    "list_options": { ... },
    "widget_custom_styles": "...",
    "created_at": "2023-04-19T04:46:59Z",
    "updated_at": "2025-04-19T00:00:01.233856Z",
    "user": USER_OBJECT,
    "cousers": null,
    "subscriber_count": 100,
    "telegram_channel_url": "https://...",
    "discord_channel_invite_url": "https://...",
    "line_channel_url": "https://...",
    "twitter_account_url": "https://...",
    "is_cooperated": false
  },
  "ts": 1745046607
}
```

## Post Object

```json
{
  "id": 1,
  "slug": "post-slug",
  "cover_image_url": "https://...",
  "title": "Post Title",
  "summary": "...",
  "content": "...",
  "paid_content": "...",
  "user_id": 1,
  "list_id": 1,
  "tags": "tag1,tag2,tag3",
  "pinned": 0,
  "theme": "light",
  "last_delivered_at": "2025-04-02T11:31:16.861294Z",
  "published_at": "2025-03-31T01:47:54.398047Z",
  "first_published_at": "2025-03-23T14:22:00Z",
  "modified_at": "2025-04-09T11:33:50.530603Z",
  "page_view_count": 1,
  "page_read_count": 2,
  "email_view_count": 3,
  "score": 0.001,
  "lang": "en",
  "post_options": {
    // ...
  },
  "outline": [
    // ...
  ],
  "similar_post_items": [
    {
      "cover_image_url": "https://...",
      "post_id": 1,
      "similarity": 0.04,
      "slug": "post-slug",
      "summary": "...",
      "title": "Similar Post Title"
    },
    // ...
  ],
  "created_at": "2025-03-24T01:57:00.633911Z",
  "updated_at": "2025-04-19T07:20:25.926487Z",
  "is_paid_content": false,
  "paid_content_count": 0,
  "paid_content_percent": 0,
  "paid_content_removed": false,
  "user": USER_OBJECT,
  "list": null,
}
```
