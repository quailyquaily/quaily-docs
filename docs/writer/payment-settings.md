---
outline: deep
---

# Payment Settings

## Preparation

### Set Up Payout

Before setting up payment, please refer to [Payout Settings](./payout-settings.md) to complete the necessary steps.

### Provide Merchant Information

Provide merchant information in Quaily, including company name, company address, company number, etc.

## Payment

In the list's [Payment Settings](https://quaily.com/dashboard/lists/@current/settings/payment), authors can enable payment to receive payments from subscribers.

![](/images/screenshots/payment-settings-01.webp)

### Set Price

Quaily supports annual, quarterly, and bi-weekly payment cycles, with the unit in USD. Authors can set their prices separately or turn off one of the cycles.

## Self-Hosted Payment

If the author has their Stripe account, they can choose to host payments themselves.

In this case, the author needs to set up their Stripe account information. For more information about this model, please refer to [Premium Subscription - Self-Hosted Payment](./premium.md).

Click the settings icon button to enter the self-hosted payment settings page.

### Step 1: Subscribe to Quaily's External Payment Service

Click the subscribe button to go to the Stripe website and follow the instructions to complete the subscription.

![](/images/screenshots/payment-settings-02.webp)

### Step 2: Configure Stripe

Set up your Stripe information in Quaily, including Stripe's API Key and Webhook Signature Key, and set up Webhooks in Stripe.

![](/images/screenshots/payment-settings-04.webp)

The API Key and Webhook Signature Key can be found in the Stripe developer settings. Here's how to do it:

**API Key**

Open the [Stripe API Key page](https://dashboard.stripe.com/apikeys) and create a new Restricted Key.

![](/images/screenshots/create-stripe-api-key-01.webp)

Give this Key a name, then select the permissions related to Checkout, choose "Write", and click "Create Key".

![](/images/screenshots/create-stripe-api-key-02.webp)

Then, copy this Key to Quaily's Stripe API Key.

![](/images/screenshots/create-stripe-api-key-03.webp)

**Webhook Signature Key**

Open the [Stripe Webhook page](https://dashboard.stripe.com/webhooks) and click "Add endpoint".

![](/images/screenshots/create-stripe-webhook-01.webp)

Fill the `Endpoint URL` with The Webhook URL provided by Quaily, select the latest API version, and choose to listen for the required Checkout events, then click "Add endpoint".

![](/images/screenshots/create-stripe-webhook-02.webp)

In the Webhook page, find the Webhook you just created, and click "Signing secret".

![](/images/screenshots/create-stripe-webhook-03.webp)

Copy the `Signing secret` to Quaily's Stripe Webhook Signature Key.

![](/images/screenshots/create-stripe-webhook-04.webp)

## Cryptocurrency Payment

Quaily support 3 types of blockchain for cryptocurrency payment: Ethereum, Base and Binance Smart Chain.

Please read the following posts to set up your cryptocurrency wallet:

- [Ethereum Setup](https://quaily.com/blog/p/how-to-enable-eth-blockchain-payment-with-your-newsletter-by-quail)
- [Base Chain Setup](https://quaily.com/blog/p/how-to-enable-base-blockchain-payment-with-your-newsletter-by-quail)
- [Binance Smart Chain Setup](https://quaily.com/blog/p/how-to-empower-your-newsletter-with-bsc-blockchain-payments)

## Referral Program

To better promote your premium subscription, you can set up a referral program to reward your subscribers for inviting their friends to subscribe.

Please read [this weekly post](https://quaily.com/blog/p/quail-weekly-40) to set up your referral program.
