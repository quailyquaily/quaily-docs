---
description: The response object for the API
---

# Response Object

## Standard Response Wrapper

```json
{
  "data": "...",
  "ts": 1723923923
}
```

Most JSON endpoints use this wrapper. Some endpoints return raw JSON (for example, OAuth token and userinfo) or non-JSON payloads (for example, post preview HTML and email tracking GIF).

## User Object

```json
{
  "id": 1,
  "name": "John Wick",
  "bio": "...",
  "bio_html": "...",
  "tagline": "...",
  "tagline_html": "...",
  "avatar_image_url": "https://...",
  "email": "john@wick.com",
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
  "id": 1,
  "slug": "my-channel",
  "title": "My Channel",
  "avatar_image_url": "https://...",
  "favicon_image_url": "https://...",
  "description": "...",
  "description_html": "...",
  "tagline": "...",
  "tagline_html": "...",
  "user_id": 1,
  "cooperators": [],
  "premium_plans_enabled": true,
  "delivery_quota": 3,
  "email_channel_enabled": true,
  "email_deny_list": [],
  "custom_domain_enabled": true,
  "domain": "...",
  "canonical_base": "https://...",
  "domain_status": 0,
  "domain_check_expired_at": "2025-04-19T00:00:01.233856Z",
  "domain_check_count": 0,
  "list_options": { ... },
  "text_templates": { ... },
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
  "bluesky_profile_url": "https://...",
  "slack_channel_invite_url": "https://...",
  "challenge_site_key": "...",
  "is_cooperated": false,
  "metrics": LIST_METRICS_OBJECT
}
```

## List Metrics Object

```json
{
  "total_posts": 0,
  "total_views": 0,
  "total_reads": 0,
  "total_subscribers": 0,
  "total_premium_subscribers": 0,
  "total_premium_posts": 0,
  "last_published_at": "2025-04-19T00:00:01.233856Z"
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
  "reactions": { "1": 128512 },
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
  "shorten_url": "https://...",
  "created_at": "2025-03-24T01:57:00.633911Z",
  "updated_at": "2025-04-19T07:20:25.926487Z",
  "is_paid_content": false,
  "paid_content_count": 0,
  "paid_content_percent": 0,
  "paid_content_removed": false,
  "user": USER_OBJECT,
  "list": null,
  "display_users": [USER_OBJECT, ...],
  "cover_image_url_twitter": "https://...",
  "cover_image_url_og": "https://...",
  "cover_image_url_thumb": "https://..."
}
```

## Subscription Object

```json
{
  "id": 1,
  "user_id": 1,
  "list_id": 1,
  "type": "silver",
  "paid_expiry": "2027-10-18T10:17:57.781+09:00",
  "email_enabled": true,
  "created_at": "2025-05-06T09:58:42.808272+09:00",
  "updated_at": "2025-05-19T00:53:05.871174+09:00",
  "user": null,
  "list": CHANNEL_OBJECT
}
```

## App Object

```json
{
  "id": 1,
  "app_id": "app_id",
  "app_secret": "app_secret",
  "name": "app-name",
  "display_name": "App Name",
  "redirect_uri": "https://...",
  "url": "https://...",
  "avatar_image_url": "https://...",
  "status": 0,
  "trusted": false,
  "created_at": "2025-04-19T00:00:00Z",
  "updated_at": "2025-04-19T00:00:00Z"
}
```

## List Channel Object

```json
{
  "id": 1,
  "list_id": 1,
  "telegram_channel_id": "@channel",
  "telegram_channel_enabled": false,
  "telegram_custom_bot_enabled": false,
  "discord_channel_id": "123",
  "discord_channel_invite_url": "https://...",
  "discord_channel_enabled": false,
  "line_channel_enabled": false,
  "line_channel_basic_id": "...",
  "line_channel_id": "...",
  "line_jwk_pub": "...",
  "twitter_channel_enabled": false,
  "twitter_token_id": 0,
  "bluesky_channel_enabled": false,
  "bluesky_service_url": "https://bsky.social",
  "bluesky_profile_url": "https://...",
  "bluesky_username": "user",
  "slack_channel_enabled": false,
  "slack_token_id": 0,
  "slack_channel_id": "...",
  "slack_channel_name": "...",
  "slack_channel_invite_url": "https://...",
  "created_at": "2025-04-19T00:00:00Z",
  "updated_at": "2025-04-19T00:00:00Z",
  "list": CHANNEL_OBJECT,
  "has_line_keys": false,
  "line_jwk_pub_decoded": "...",
  "twitter_profile": {},
  "twitter_token_expired_at": "2025-04-19T00:00:00Z",
  "slack_profile": {},
  "slack_token_expired_at": "2025-04-19T00:00:00Z"
}
```

## Delivery Task Object

```json
{
  "id": 1,
  "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "user_id": 1,
  "list_id": 1,
  "post_id": 1,
  "status": 0,
  "result": {
    "email": { "sent": 0, "failed": 0, "total": 0 },
    "telegram": { "sent": 0, "failed": 0, "total": 0 },
    "discord": { "sent": 0, "failed": 0, "total": 0 },
    "line": { "sent": 0, "failed": 0, "total": 0 },
    "twitter": { "sent": 0, "failed": 0, "total": 0 },
    "bluesky": { "sent": 0, "failed": 0, "total": 0 },
    "slack": { "sent": 0, "failed": 0, "total": 0 }
  },
  "scheduled_at": "2025-04-19T00:00:00Z",
  "channels": ["email"],
  "report_att_id": 0,
  "created_at": "2025-04-19T00:00:00Z",
  "updated_at": "2025-04-19T00:00:00Z",
  "user": USER_OBJECT,
  "list": CHANNEL_OBJECT,
  "post": POST_OBJECT
}
```

## APIKey Object

```json
{
  "id": 1,
  "name": "My Key",
  "key": "qk_...",
  "user_id": 1,
  "created_at": "2025-04-19T00:00:00Z",
  "updated_at": "2025-04-19T00:00:00Z"
}
```

## User Credit Object

```json
{
  "id": 1,
  "user_id": 1,
  "balance_credit": 1000,
  "status": 0,
  "created_at": "2025-04-19T00:00:00Z",
  "updated_at": "2025-04-19T00:00:00Z"
}
```

## Credit Ledger Object

```json
{
  "id": 1,
  "user_id": 1,
  "order_id": 1,
  "action": "consume",
  "amount_credit": 10,
  "balance_after": 990,
  "rate_usd_to_credit": 100,
  "currency": "USD",
  "source_type": "scene",
  "source_id": "post_ai",
  "meta": {
    "post_id": 1
  },
  "created_at": "2025-04-19T00:00:00Z"
}
```

## Comment Object

```json
{
  "id": 1,
  "quote_comment_id": 0,
  "post_id": 1,
  "list_id": 1,
  "author_id": 1,
  "content": "...",
  "status": 0,
  "created_at": "2025-04-19T00:00:00Z",
  "updated_at": "2025-04-19T00:00:00Z",
  "quote_comment": null,
  "replied_comments": [],
  "author": USER_OBJECT,
  "post": POST_OBJECT
}
```

## Tweet Object

```json
{
  "id": 1,
  "list_id": 1,
  "user_id": 1,
  "text": "...",
  "html": "...",
  "tags": ["tag1", "tag2"],
  "reactions": { "1": 128512 },
  "pinned": 0,
  "is_premium": false,
  "created_at": "2025-04-19T00:00:00Z",
  "updated_at": "2025-04-19T00:00:00Z",
  "user": USER_OBJECT,
  "latest_replies": [TWEET_REPLY_OBJECT, ...],
  "masked": false
}
```

## Tweet Reply Object

```json
{
  "id": 1,
  "reply_id": 0,
  "tweet_id": 1,
  "list_id": 1,
  "user_id": 1,
  "text": "...",
  "html": "...",
  "created_at": "2025-04-19T00:00:00Z",
  "updated_at": "2025-04-19T00:00:00Z",
  "tweet": TWEET_OBJECT,
  "user": USER_OBJECT,
  "replied": null
}
```

## Pack Object

```json
{
  "id": 1,
  "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "title": "Pack Title",
  "description": "...",
  "cover_image_url": "https://...",
  "list_id": 1,
  "post_ids": [1, 2, 3],
  "created_at": "2025-04-19T00:00:00Z",
  "updated_at": "2025-04-19T00:00:00Z",
  "posts": [POST_OBJECT, ...],
  "post_count": 3
}
```
