---
outline: deep
description: 付款设置。设置付款方式。
---

# 付款设置

## 准备工作

### 设置提现

在设置支付之前，请先在 [Payout Settings](./payout-settings.md) 中完成必要的步骤。

### 补充公司信息

在 Quaily 中补充公司信息，包括公司名称、公司地址、公司编号等。

## 付款

在列表的 [付款设置](https://quaily.com/dashboard/lists/@current/settings/payment) 中，作者可以启用付款以接收来自订阅者的付款。

![](/images/screenshots/payment-settings-01.webp)

### 设置价格

Quaily 支持按年、按季度两周付费周期，单位为美元。作者可以分别设置他们的价格，也可以关闭其中一个周期。

## 作者自行托管的付款

如果作者拥有自己的 Stripe 帐号，可以选择自行托管付款。在这种情况下，作者需要设置他们的 Stripe 帐号信息。关于本模式的介绍，请参考 [收费订阅 - 作者自行托管的支付](./premium.md)。

点击设置图标按钮，进入到自行托管付款的设置页面。

### 第一步：订阅 Quaily 的外部付款服务

点击订阅按钮，会跳转到 Stripe 的网站，按照提示完成订阅。

![](/images/screenshots/payment-settings-02.webp)

### 第二步：配置 Stripe

在 Quaily 中设置你的 Stripe 信息，包括 Stripe 的 API Key 和 Webhook 签名密钥，并且在 Stripe 中设置 Webhook。

![](/images/screenshots/payment-settings-04.webp)

API Key 和 Webhook 签名密钥可以在 Stripe 的开发者设置中找到，具体的操作方式如下：

**API Key**

打开 [Stripe API Key 页面](https://dashboard.stripe.com/apikeys)，创建一个新的 Restricted Key。

![](/images/screenshots/create-stripe-api-key-01.webp)

给予这个 Key 一个名称，找到选择 Checkout 相关的权限，选择「Write」：


![](/images/screenshots/create-stripe-api-key-02_1.webp)


找到 Webhooks 相关的权限，选择「Read」，然后点击「Create Key」。

![](/images/screenshots/create-stripe-api-key-02_2.webp)

然后，将这个 Key 复制到 Quaily 的 Stripe API Key 中。

![](/images/screenshots/create-stripe-api-key-03.webp)

**Webhook 签名密钥**

打开 [Stripe Webhook 页面](https://dashboard.stripe.com/webhooks)，点击「Add endpoint」。

![](/images/screenshots/create-stripe-webhook-01.webp)

在 Endpoint URL 中填入 Quaily 提供的 Webhook URL，选择最新的 API 版本，并且选择监听所需的 Checkout 事件：

- `payment_intent.succeeded`
- `checkout.session.completed`
- `checkout.session.async_payment_failed`
- `checkout.session.async_payment_succeeded`

然后点击「Add endpoint」。

![](/images/screenshots/create-stripe-webhook-02.webp)

在 Webhook 页面中，找到刚刚创建的 Webhook，点击「Signing secret」

![](/images/screenshots/create-stripe-webhook-03.webp)

然后将这个签名密钥复制到 Quaily 的 Webhook 签名密钥中。

![](/images/screenshots/create-stripe-webhook-04.webp)

## 使用加密货币付款

Quaily 支持以太坊、Base 和币安智能链三种区块链的加密货币支付。

请阅读以下文章设置您的加密货币钱包：

- [以太坊设置](https://quaily.com/quail-zh/p/how-to-enable-eth-blockchain-payment-for-newsletter)
- [Base 链设置](https://quaily.com/quail-zh/p/how-to-enable-base-blockchain-payment-for-newsletter)
- [币安智能链设置](https://quaily.com/quail-zh/p/how-to-enable-bsc-blockchain-payment-for-your-newsletter)

### 推荐反佣计划

为了更好地推广您的付费订阅，您可以设置一个推荐反佣计划，以奖励您的订阅者邀请他们的朋友订阅。

请阅读 [这篇周报](https://quaily.com/quail-zh/p/quail-weekly-40) 来设置您的推荐反佣计划。

## 添加自定义支付代币指南

创作者可以申请自定义代币，以便读者可以在特定链上使用该代币支付（也可以使用该代币结算）。

### 支持哪些代币

仅限以太坊 (ETH)、BSC、Base、Solana。

### 要求

- **链上流动性**：代币必须在同一链上的主流 DEX 上拥有充足的、可验证的流动性，以便确认可靠价格。
- **需提供的信息**
  - **合约地址**
  - **名称**
  - **符号**
  - **Logo**（**128×128 像素**，方形画布，内部带有圆形标记；建议使用透明背景）

### 费用

每个代币一次性支付 1,999 美元（不含税）。

### 提交流程

[填写这份表单](https://forms.gle/yGpn3NriJV9C6s4B9)。我们会进行合规与技术校验（包括合约有效性、流动性可验证性、展示素材规范等），通过后将与你确认细节与收费事宜。
