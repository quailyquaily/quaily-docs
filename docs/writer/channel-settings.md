---
outline: deep
---

# Channel Settings

Quaily supports to deliver posts to different channels. This document will guide you through the process of setting up channels.

At present, Quaily supports the following channels: Email, Telegram, Discord, LINE and X. We will add more channels in the future.

## Email Settings

Authors can adjust the list's email delivery related settings here.

### Email Delivery

When this option is turned on, every time an article is delivered, an email will be sent to all subscribers. When this option is turned off, no email will be sent when articles are delivered, but subscribers will still see new articles on the list page, feed, or other channels.

### Onboarding Text

When a subscriber subscribes to a list, they receive a welcome email.

Here you can edit the content of the welcome email. If the content is empty, **[Quaily](https://quaily.com "Quaily Official Website")** will use the default text.

### Signature Text

At the end of each email, a signature text is attached.

Here you can edit the content of the signature text. If the content is empty, Quaily will not attach the signature text to the message.

### Email Provider denylist

Some authors don't want their content to be subscribed by addresses provided by certain email providers, so they can add here. After adding the denylist, when subscribers use the email address provided by these email providers to subscribe, they will be prompted that they cannot subscribe:

`The list owner rejected your subscription, because your email provider is in the denylist.`

Please split multiple domains with commas, for example: set `qq.com, 163.com, soho.com`, it will reject emails from `@qq.com`, `@163.com` and `@soho. com` email address to subscribe.

## Discord Settings

Quaily Supports sending posts to Discord. Please read [this weekly post](https://quaily.com/blog/p/how-to-integrate-discord-with-your-newsletter-by-quail) to learn how to set up Discord.

## Telegram Settings

### Create a telegram channel

The 1st step is to create a telegram channel. You can follow the the instructions below to create a channel:

- iPhone: Start a new message (tap the icon in the top-right corner in Chats). Then ‘New Channel’.
- Android: Tap the circular pencil icon in the chat list. Then ‘New Channel’.
- Windows Phone: Tap the ‘+’ button on the bottom bar. Then ‘New Channel’.

After you create the channel, please make it public so that everyone can join it. The public channel will have a link like this: `https://t.me/your_channel_name`. The channel id is `@your_channel_name`.

### Add Quaily's bot to the channel

Search `@QuailySenderBot` in telegram, then add it to the channel as administrator. Make sure the bot has the permission to send messages to the channel.

Setting up channels has two benefits:

1. When pdelivering articles, you can choose to send them to these channels.
2. If you have set up Telegram, Discord, Line, or X, Quaily will display buttons to readers on the Quaily webpage. Readers can click the button to join the channel and receive article updates.

### Connect Quaily to telegram

The remaining steps are very simple, just visit [Quaily's writer dashboard](https://quaily.com/dashboard), select the list you want to connect, and then click the `List Settings` at the sidebar.

You will see a "Channel Settings" section, just enable Telegram channel and fill in the channel id, then click the `Save` button.

If everything is ok, the new settings will be saved. Now all new deliveried posts will be sent to the channel too.

### Additional Topic 1: Set up a discussion for the channel

If you want to add a discussion board to your channel, you can follow these steps:

1. Log in to your Telegram channel and open your channel profile.
2. Then enter the Discussion section.
3. Select a existing group or click "Create a New Group" to create a new group for your channel, and confirm to link the group to your channel.

After these steps, if your telegram has been updated and commenting on the Telegram channel is activated, you can see the comment section below the posts of that channel. This section is labeled Comments, and this text appears in it: "Leave a Comment". You can easily put your comments below this post.

### Additional Topic 2: Use your own bot

Quaily also supports using your own bot to send messages to the channel.

**Create a telegram bot**

The first step is to create a telegram bot. You can follow the [official guide](https://core.telegram.org/bots#6-botfather) to create a bot.

After you create the bot, you will get a token:

1. send `/mybots` to `@BotFather`
2. select the bot you just created
3. select `API Token`
4. copy the token

Please keep it safe, we will use it later.

**Change the bot settings**

The next step is to add the bot to the channel and give it permissions. Let's modify the bot settings first:

1. send `/mybots` to `@BotFather`
2. select the bot you just created
3. select `Bot Settings`
4. select `Allow Groups`
5. select `Turn on`

Then you can add the bot to the channel, and fill in the token and channel id in the channel settings page.

## LINE Settings

Quaily supports sending posts to LINE Channel. Before you start, please make sure you have already created a LINE Channel at [LINE Developer Dashboard](https://developers.line.biz/console). Begin from stratch, you need to create a **Provider**, then create a **Messaging API Channel** under the channel.

1. Visit [Quaily's dashboard](https://quaily.com/dashboard), select the list you want to connect, and then click the `List Settings` at the sidebar.
2. You will see a "Channel Settings" section, just enable LINE channel
3. For the first time, you need to create a key pair for the channel, click the `Create` button. Then you will see the public key. Copy the public key for next step.
4. Visit [LINE Developer Dashboard](https://developers.line.biz/console), select the channel you want to connect, find **Assertion Signing Key** under **Basic Settings**, click **Register a public key** button, paste the public key you just copied, then click **Register** button.
5. Copy the **Assertion Signing Key** and paste it to the channel settings page.
6. Then fill in the **Channel ID** and **Channel Secret**. You can find them under **Basic Settings**.
7. Optional: fill in the **Basic ID**, an LINE icon with invite URL will be added to the subscribe form. You can find it under **Messaging API Settings**.

That's all. Now you can save the settings. The new deliveried posts will be sent to the LINE channel too.

## X Settings

Connecting Quaily to X (formerly Twitter) is quite simple. In the "[List Settings - General Settings](https://quaily.com/dashboard/lists/@current/settings/general)," just follow the prompts to authorize Quaily to access your X account.
