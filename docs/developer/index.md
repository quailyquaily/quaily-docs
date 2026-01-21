---
outline: deep
# next: false
---

# Developer Documentation

## Overview

Welcome to the Quaily Developer Documentation! This guide provides all the information you need to integrate your applications and services with Quaily. Whether you're looking to build custom publishing workflows, automate content management, or create unique reader experiences, our API offers the flexibility and power to bring your ideas to life.

Quaily empowers creators to build vibrant membership communities. Our developer tools are designed to extend that power, allowing you to connect, create, and innovate.

## Getting Started

To start building with Quaily, you'll typically follow these steps:

1.  **Authentication**: Familiarize yourself with our [Authorization](./authorization.md) methods to securely connect to the API.
2.  **Explore API References**: Understand the available [API endpoints](#api-reference) for interacting with Users, Channels, Posts, and more.
3.  **Make Your First Call**: Try a simple API request, like fetching your user details or listing your channels.

## API Base

Quaily's API base URL is:

```
https://api.quaily.com
```

## Authentication

Securely access the Quaily API.

- [Authorization Guide](./authorization.md)

## Key Concepts

Understanding these core Quaily concepts will help you navigate our API:

- **User**: Represents an individual account on Quaily, whether a creator or a reader.
- **Channel**: A creator's publication space where posts are published.
- **Post**: An article or piece of content published within a channel.
- **Subscription**: Represents a reader's subscription to a channel.

## Opensource Projects

If you prefer to start with production-ready code, Quaily provides some opensource projects to help you get started.

- [Quaily CLI](https://github.com/quailyquaily/quail-cli): A command line tool to help you manage your Quaily account.
- [Obsidian Plugin of Quaily](https://github.com/quailyquaily/obsidian-quail): The Obsidian plugin for Quaily.

## API Reference

Detailed information about each API endpoint:

- [Response Object](./api/response-object.md): The standard response structure for all API calls.
- [Auth](./api/auth.md): Authentication and token exchange.
- [APIKey](./api/apikey.md): Manage API keys.
- [Credit](./api/credit.md): Manage user credits and ledgers.
- [User](./api/user.md): Manage user-related operations.
- [Channel](./api/channel.md): Interact with channels and their settings.
- [List](./api/list.md): Manage channels (lists) and list settings.
- [Post](./api/post.md): Create, retrieve, update, and delete posts.
- [Subscription](./api/subscription.md): Manage channel subscriptions.
- [Attachment](./api/attachment.md): Upload and manage file attachments for posts.
- [Composer](./api/composer.md): Leverage AI functionalities to assist with content creation.
- [Comment](./api/comment.md): Read and manage comments.
- [Tweet](./api/tweet.md): Read and manage tweets and replies.
- [Pack](./api/pack.md): Manage packs of posts.
- [Analytics](./api/analytics.md): Tracking and analytics data.
- [Explore](./api/explore.md): Trending content discovery.
- [OAuth](./api/oauth.md): OAuth 2.0 endpoints and tokens.

## Community & Support

Join our developer community on Discord to ask questions, share your projects, and get support from the Quaily team and other developers.

- [Join our Discord](https://discord.gg/FWrJ8bwhwe)
- [Github Page](https://github.com/quailyquaily)

We are excited to see what you build with Quaily!
