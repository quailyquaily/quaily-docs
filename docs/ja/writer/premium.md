---
outline: deep
description: Quaily の有料サブスクリプション機能
---

# 有料サブスクリプション

## 有料サブスクリプションとは

有料サブスクリプションは、読者が作者のコンテンツへアクセスするために料金を支払う仕組みです。Quaily では、有料記事、連載、コースなどを公開して収益化できます。

## Stripe ベースの 2 つの決済方式

### Quaily-Hosted Payment

Quaily-hosted payment では、Quaily がコンテンツ販売、代金回収、請求書、返金、税務処理などを担当します。作者は税務処理を個別に気にする必要がありません。支払い時の消費税も Quaily が処理します。

この方式では、作者収益から次の費用が差し引かれます。

1. プラットフォーム手数料: 収益の 10%
2. 決済手数料: 法定通貨決済では Stripe を使います。料率は [Stripe 公式サイト](https://stripe.com/en-jp/pricing) を参照してください
3. 消費税: 日本の税法に基づき、すべての購入者から 10% の消費税を徴収します

Quaily-hosted payment を使うには、次を完了してください。

1. [収益化の準備](./monetization.md) の設定
2. [決済設定](./payment-settings) で価格を設定する

### Self-Hosted Payment

Self-hosted payment では、作者自身の Stripe アカウント情報を Quaily に設定します。読者の支払いは作者が設定した Stripe アカウント経由で処理されます。

この方式では、Quaily はコンテンツ販売、代金回収、請求書、返金、税金還付などに責任を持ちません。作者が自分の事業所在地の要件に従って税務処理を行う必要があります。

Self-hosted payment では、注文完了ごとに作者の **Credits** からプラットフォーム手数料が差し引かれます。

- 手数料率: 注文額（VAT 除く）の 10%
- Credits は前払い式で、[Profile - Credits](https://quaily.com/dashboard/profile/credits) で管理します

利用するには、次を完了してください。

1. [収益化の準備](./monetization.md) の設定
2. [決済設定](./payment-settings) で価格を設定する
3. [決済設定](./payment-settings) で self-hosted payment を有効にする

## Credits 課金の機能

一部の高度なライター向け機能は Credits 従量課金です。

- 追加配信枠: 1 枠あたり 100 Credits
- 購読者の手動追加: 1 人あたり 20 Credits
- インターネット記事の取り込み: 1 記事あたり 10 Credits

これらの機能は以前 Quaily Plus に含まれていましたが、現在は Credits 直接課金に変わっています。

## ブロックチェーン決済

Quaily はブロックチェーンベースの決済方法にも対応しています。

読者は対応暗号資産で購読料を支払えます。作者は Quaily 上に自分のウォレットアドレスを設定し、支払いを受け取ります。詳細は [出金設定](./payout-settings.html) を参照してください。

**Quaily が対応するブロックチェーン**

| Name | Symbol | Chain ID | Explorer |
| ---- | ------ | -------- | -------- |
| Ethereum Mainnet | ETH | 1 | [Etherscan](https://etherscan.io/) |
| Binance Smart Chain Mainnet | BNB | 56 | [BscScan](https://bscscan.com/) |
| Base Mainnet | BASE | 8453 | [BaseScan](https://basescan.org/) |
| Solana Mainnet | SOL | n/a | [Solscan](https://solscan.io/) |

Ethereum Mainnet、Binance Smart Chain Mainnet、Base Mainnet では ETH と ERC-20 トークン、Solana Mainnet では SOL と SPL トークンによる支払いに対応しています。

ウォレット連携後、[決済設定](./payment-settings.md) で商品の暗号資産価格を設定してください。

ウォレット設定については、次の投稿も参照できます。

- [💰 How to Enable ETH Blockchain Payment with Your Newsletter by Quaily](https://quaily.com/blog/p/how-to-enable-eth-blockchain-payment-with-your-newsletter-by-quail)
- [💰 How to Enable Base Blockchain Payment with Your Newsletter by Quaily](https://quaily.com/blog/p/how-to-enable-base-blockchain-payment-with-your-newsletter-by-quail)
- [💰 How to empower Your Newsletter with BSC Blockchain Payments](https://quaily.com/blog/p/how-to-empower-your-newsletter-with-bsc-blockchain-payments)
- [🪙 Quaily now supports Solana: Subscribe with SOL, USDT or USDC](https://quaily.com/blog/p/quaily-supports-solana-subscribe-content)

:::tip
サブスクリプション価格は、法定通貨と暗号資産の両方を設定しても、一方のみを設定しても構いません。両者は独立しています。
:::
