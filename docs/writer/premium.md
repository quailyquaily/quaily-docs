---
outline: deep
description: The premium subscription feature of Quaily
---

# Premium Subscription

## What is a Premium Subscription?

A premium subscription is a model in which subscribers pay to access an author's content. On Quaily, authors can earn revenue by publishing paid articles, columns, courses, and other forms of content.

## Two Stripe-based Payment

### Quaily-Hosted Payment

In the Quaily-hosted payment model, Quaily is responsible for the sale of content goods, collection, invoices, refunds, tax refunds, etc. Authors do not need to worry about tax issues. Quaily will handle the corresponding consumption tax at the time of payment .

In the Quaily-hosted payment model, Quaily will deduct the following fees from the author's revenue:

1. Platform fee: Quaily will deduct a 10% platform fee from the author's revenue.
2. Payment settlement fee: For legal currency payments, Quaily uses Stripe to process transactions. Please refer to [Stripe's official website](https://stripe.com/en-jp/pricing) for specific rates.
3. Consumption tax: According to Japanese tax law, Quaily needs to collect consumption tax from all order buyers, with a tax rate of 10%.

To use the Quaily-hosted payment model, you need to:

1. Complete the relevant settings mentioned in [Preparing for Payment](./monetization.md).
2. Set the price in [Payment Settings](./payment-settings).

### Self-Hosted Payment

In the self-hosted payment model, authors need to set up their Stripe account information on Quaily. When readers pay authors, they will pay through the Stripe account set up by the author.

Quaily is not responsible for the sale of content goods, collection, invoices, refunds, tax refunds, etc. Authors need to handle tax matters according to the requirements of the company or individual's location.

In the self-hosted payment model, Quaily will deduct a platform fee equivalent to 10% of the order amount (excluding tax) from the author's credit card the following month based on the order situation of the current month.

To use the self-hosted payment model, you need to:

1. Complete the relevant settings mentioned in [Preparing for Payment](./monetization.md).
2. Set the price in [Payment Settings](./payment-settings).
3. Enable self-hosted payment in [Payment Settings](./payment-settings).

## Blockchain-based Payment

Quaily supports blockchain-based payment methods.

Readers can use supported cryptocurrencies to pay subscription fees to authors. Authors need to set up their cryptocurrency wallet address on Quaily to receive payments. For details, please refer to [Binding Cryptocurrency Wallet](./payout-settings.html)

**Supported Blockchain Networks by Quaily**

| Name | Symbol | Chain ID | Explorer |
| ---- | ------ | -------- | -------- |
| Ethereum Mainnet | ETH | 1 | [Etherscan](https://etherscan.io/) |
| Binance Smart Chain Mainnet | BNB | 56 | [BscScan](https://bscscan.com/) |
| Base Mainnet | BASE | 8453 | [BaseScan](https://basescan.org/) |
| Solana Mainnet | SOL | n/a | [Solscan](https://solscan.io/) |

Among them, Ethereum Mainnet, Binance Smart Chain Mainnet, and Base Mainnet support ETH and ERC-20 token payments, while Solana Mainnet supports SOL and SPL token payments.

After binding the cryptocurrency wallet, you need to set the cryptocurrency price of the product in [Payment Settings](./payment-settings.md).

:::tip
Writer can set both fiat currency prices and cryptocurrency prices for the subscription, or only one of them. They are independent of each other.
:::
