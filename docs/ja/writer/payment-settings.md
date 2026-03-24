---
outline: deep
description: Quaily チャンネルの決済設定
---

# 決済設定

> **Payment** とは、読者が作者へ購読料を支払う方法を指します。

## 事前準備

### 出金設定

決済設定の前に、まず [出金設定](./payout-settings.md) を完了してください。

### 事業者情報の登録

Quaily 上で、会社名、住所、法人番号などの事業者情報を登録してください。

## Stripe 決済

リストの [Payment Settings](https://quaily.com/dashboard/lists/@current/settings/payment) で決済を有効にすると、購読者から支払いを受け取れます。

![](/images/screenshots/payment-settings-01.webp)

### 価格設定

Quaily は年額と四半期課金に対応しており、単位は USD です。作者はそれぞれ別々に価格を設定するか、片方を無効にできます。

## Self-Hosted Stripe Payment

作者自身の Stripe アカウントを使って決済を受けたい場合は、self-hosted payment を選べます。

この場合、作者は Quaily 上に自分の Stripe 情報を設定する必要があります。仕組みの詳細は [Premium Subscription - Self-Hosted Payment](./premium.md) を参照してください。

設定アイコンを押すと、self-hosted payment 設定ページに入れます。

Self-hosted payment は **Credits** 課金です。利用するには十分な Credits を維持してください。

### Step 1: Credits をチャージする

[Profile - Credits](https://quaily.com/dashboard/profile/credits) で Credits 残高をチャージします。

self-hosted の注文が完了するたびに、注文額に応じたサービス手数料が Credits から差し引かれます。

- 手数料率: 注文額（VAT 除く）の 10%
- Credits が不足している場合、チャージするまで self-hosted payment は有効化できません

### Step 2: Stripe を設定する

Quaily に Stripe API Key と Webhook Signature Key を設定し、Stripe 側でも Webhook を設定します。

![](/images/screenshots/payment-settings-04.webp)

API Key と Webhook Signature Key は Stripe の開発者設定で確認できます。手順は次のとおりです。

**API Key**

[Stripe API Key page](https://dashboard.stripe.com/apikeys) を開き、新しい Restricted Key を作成します。

![](/images/screenshots/create-stripe-api-key-01.webp)

キーに名前を付け、Checkout Session 関連の権限を見つけて「Write」を選びます。

![](/images/screenshots/create-stripe-api-key-02_1.webp)

次に Webhooks 関連の権限で「Read」を選び、「Create Key」をクリックします。

![](/images/screenshots/create-stripe-api-key-02_2.webp)

作成したキーを Quaily の Stripe API Key 欄へコピーします。

![](/images/screenshots/create-stripe-api-key-03.webp)

**Webhook Signature Key**

[Stripe Webhook page](https://dashboard.stripe.com/webhooks) を開き、「Add endpoint」をクリックします。

![](/images/screenshots/create-stripe-webhook-01.webp)

`Endpoint URL` には Quaily が表示する Webhook URL を入力し、最新 API バージョンを選び、必要な Checkout イベントを購読します。

- `payment_intent.succeeded`
- `checkout.session.completed`
- `checkout.session.async_payment_failed`
- `checkout.session.async_payment_succeeded`

その後、「Add endpoint」をクリックします。

![](/images/screenshots/create-stripe-webhook-02.webp)

Webhook 一覧から作成した Webhook を開き、「Signing secret」をクリックします。

![](/images/screenshots/create-stripe-webhook-03.webp)

`Signing secret` を Quaily の Stripe Webhook Signature Key 欄へコピーします。

![](/images/screenshots/create-stripe-webhook-04.webp)

### Step 3: Self-Hosted Payment を有効にする

Credits と Stripe 設定の準備ができたら、リストの決済設定で self-hosted payment を有効にします。

## 暗号資産決済

Quaily は Ethereum、Base、Binance Smart Chain、Solana の 4 チェーンに対応しています。

ウォレット設定については、次の投稿を参照してください。

- [💰 How to Enable ETH Blockchain Payment with Your Newsletter by Quaily](https://quaily.com/blog/p/how-to-enable-eth-blockchain-payment-with-your-newsletter-by-quail)
- [💰 How to Enable Base Blockchain Payment with Your Newsletter by Quaily](https://quaily.com/blog/p/how-to-enable-base-blockchain-payment-with-your-newsletter-by-quail)
- [💰 How to empower Your Newsletter with BSC Blockchain Payments](https://quaily.com/blog/p/how-to-empower-your-newsletter-with-bsc-blockchain-payments)
- [🪙 Quaily now supports Solana: Subscribe with SOL, USDT or USDC](https://quaily.com/blog/p/quaily-supports-solana-subscribe-content)

### 紹介プログラム

有料購読を広めるために、既存購読者が友人を招待した際の紹介プログラムを設定できます。

設定方法は [this weekly post](https://quaily.com/blog/p/quail-weekly-40) を参照してください。

## ガイド: カスタム決済トークンを追加する

クリエイターは、特定チェーン上で読者が支払いに使え、受け取りにも使えるカスタムトークンの追加を申請できます。

### 対応チェーン

Ethereum、BSC、Base、Solana のみです。

### 要件

- **オンチェーン流動性:** 同一チェーン上の主要 DEX に十分で検証可能な流動性が必要です
- **提出情報:**
  - **コントラクトアドレス**
  - **名称**
  - **シンボル**
  - **ロゴ**（**128×128 px**、正方形キャンバス内に円形マーク、透過背景推奨）

### 費用

トークンごとに一度だけ USD \$1,999（税別）。

### 申請方法

[この Google Form](https://forms.gle/yGpn3NriJV9C6s4B9) に入力してください。コントラクト確認、流動性検証後、オンボーディングのために連絡します。
