---
outline: deep
description: 收费订阅。设置收费订阅和广告。
---

# 收费订阅

## 什么是收费订阅？

收费订阅是一种通过订阅者支付费用来获取作者内容的模式。在 Quaily 上，作者可以通过发布付费文章、付费专栏、付费课程等形式的内容来获取收入。

## 两种基于 Stripe 的支付

### Quaily 托管的支付

在 Quaily 托管的支付模式下，Quaily 会负责内容商品的销售、收款、发票、退款、退税等事项。作者无需担心税务问题，Quaily 会在付款时处理对应的消费税。

Quaily 托管的支付模式下，Quaily 会在作者的收入中扣除以下费用：

1. 平台费：Quaily 会在作者的收入中扣除 10% 的平台费。
2. 支付结算费：对于法定货币支付，Quaily 使用 Stripe 来处理交易，具体费率请参考 [Stripe 官方网站](https://stripe.com/en-jp/pricing)。
3. 消费税：根据日本税法规定，Quaily 需要向所有订单购买者收取消费税，税率为 10%。

使用 Quaily 托管的支付模式，需要：

1. 完成[准备收款](./monetization.md) 中提到的相关设置。
2. 在[付款设置](./payment-settings.md) 中，设置商品的价格。

### 作者自行托管的支付

在作者自行托管的支付模式下，作者需要在 Quaily 上设置自己的 Stripe 帐号信息。当读者向作者支付时，会通过作者设置的 Stripe 帐号来进行支付。

Quaily 不负责内容商品的销售、收款、发票、退款、退税等事项，因此作者需要根据公司或者个人所在地的要求，自行处理税务相关工作。

在作者自行托管的支付模式下，Quaily 会在次月根据当月订单情况，从作者信用卡中扣除相当于订单金额 10% 的平台费（不含税）。

使用作者自行托管的支付模式，需要：

1. 完成[准备收款](./monetization.md)中提到的相关设置。
2. 在[付款设置](./payment-settings.md) 中，设置商品的价格。
3. 在[付款设置](./payment-settings.md) 中，开启自行托管支付。

## 基于区块链的支付

Quaily 支持基于区块链的支付方式。

读者可以使用支持的加密货币向作者支付订阅费用。作者需要在 Quaily 上设置自己的加密货币钱包地址，以便接收支付。具体请参阅 [绑定加密货币钱包](./payout-settings.html)

**Quaily 支持的区块链网络**

| Name | Symbol | Chain ID | Explorer |
| ---- | ------ | -------- | -------- |
| Ethereum Mainnet | ETH | 1 | [Etherscan](https://etherscan.io/) |
| Binance Smart Chain Mainnet | BNB | 56 | [BscScan](https://bscscan.com/) |
| Base Mainnet | BASE | 8453 | [BaseScan](https://basescan.org/) |
| Solana Mainnet | SOL | n/a | [Solscan](https://solscan.io/) |

其中，Ethereum Mainnet、Binance Smart Chain Mainnet 和 Base Mainnet 支持 ETH 和 ERC-20 代币支付，Solana Mainnet 支持 SOL 和 SPL 代币支付。

完成绑定加密货币钱包后，需要在[付款设置](./payment-settings.md) 中，设置商品的加密货币价格。

请阅读以下文章设置您的加密货币钱包：

- [以太坊设置](https://quaily.com/quail-zh/p/how-to-enable-eth-blockchain-payment-for-newsletter)
- [Base 链设置](https://quaily.com/quail-zh/p/how-to-enable-base-blockchain-payment-for-newsletter)
- [币安智能链设置](https://quaily.com/quail-zh/p/how-to-enable-bsc-blockchain-payment-for-your-newsletter)

:::tip
商品的法定货币价格与加密货币价格可以同时设置，也可以只设置其中一种。互相独立。
:::
