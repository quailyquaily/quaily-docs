---
description: The analytics settings for a Quaily channel
outline: deep
---

# Analytics

## Built-in Analytics

Quaily provides simple built-in analytics out of the box. You don't need to configure anything to use it.

For each post, the analytics metrics include:

1. Page views: how many times the post has been viewed (including the webpages and the email).
2. Post reads: how many times the post has been read. A post is considered read when the user stays on the post for more than 10 seconds.
3. Email reads: how many times the post has been read in the email. This metric is only available when you send the post via email.

By default, these three metrics will be displayed in the article list with the label "X views." However, the author can disable this display in the "[List Settings - General Settings](https://quaily.com/dashboard/lists/@current/settings/general)".

## 3rd Party Analytics

Quaily supports 3rd party analytics services: [Umami.is](https://umami.is/) and [Google Analytics](https://analytics.google.com/).

### Umami.is

Umami is an open source, privacy-focused alternative to Google Analytics.

You can sign up for an account on [Umami.is](https://umami.is/), and then enter Umami's `Website ID` in the `Umami ID` text box.

#### Self-hosted Umami

If you are using a self-hosted version of Umami, you can enter the address of your self-hosted Umami instance in the `Umami Base` text box.

### Google Analytics

Google Analytics is a popular analytics service. Similar to Umami, you need to sign up for an account on [Google Analytics](https://analytics.google.com/), and then enter the `Measurement ID` in the `Google Analytics ID` text box.

#### Events

If Google Analytics is enabled, Quaily will send the following events to Google Analytics:

- `sign_up`: when a user signs up for email subscription.
- `begin_checkout`: when a user begins the checkout process.
- `purchase`: when a user completes the purchase.

They are recommended to be used in the [Google Analytics 4](https://support.google.com/analytics/answer/9267735?hl=en "Google Analytics 4 Events").