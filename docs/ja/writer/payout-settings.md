---
outline: deep
---

# 出金設定

> **Payout** とは、Quaily が作者へ収益を支払う方法を指します。

[Quaily](https://quaily.com) で収益を得るには、まず [Payout](https://quaily.com/dashboard/profile/payout) で税務情報の登録と出金方法の設定を行ってください。

## 税務情報の登録

Quaily で収益化するには、Quaily の事業所在地に基づく税務当局の要件に従って税務情報を登録する必要があります。Quaily は収益に応じて必要な税額を自動で控除します。

**主な登録項目**

- **Name**: 本名
- **National**: 国籍
- **Tax Residence**: 税務上の居住国・地域
- **Residential Address**: 国、都市、郵便番号、住所などの居住地情報
- **Tax ID**: 税務上の居住地に応じた税番号（SSN、TIN、個人番号など）
- **Proof of Residence**: 税務上の居住地に応じた居住証明（公共料金請求書、銀行明細、身分証など）

入力後、Quaily チームが内容を確認します。

## 出金方法

出金方法とは、Quaily が作者へ収益を支払う際に使う方法です。[Payout Settings](https://quaily.com/dashboard/profile/payout) で設定できます。現在は次の方法に対応しています。

1. Stripe Connect Transfer: 日本居住者のみ。Quaily 上で Stripe Connect アカウントを設定し、本人確認を完了する必要があります
2. PayPal: 世界中の PayPal アカウントに対応。PayPal 側の手数料と為替手数料が発生します
3. Wise: 世界中の Wise アカウントに対応。Wise 側の手数料と為替手数料が発生します
4. Cryptocurrency: Ethereum、Base、Binance Smart Chain、Solana での暗号資産受け取りに対応します。チェーン上の送金手数料が発生します

出金方法を設定する際は、送金失敗を防ぐため、口座情報やアカウント情報が正確であることを確認してください。

Quaily は第一優先の出金方法を使って送金します。第一優先で失敗した場合は、第二優先の方法で再試行します。

::: tip
特にブロックチェーンでは次の点に注意してください。
1. 読者が暗号資産で支払った場合、入金はチェーン上の承認後に確定します。
2. Quaily は受け取った暗号資産を両替せず、そのまま作者へ送金します。
:::

### 出金履歴

作者は [Payout Settings](https://quaily.com/dashboard/profile/payout) で出金履歴を確認できます。履歴には出金日、出金方法、金額、ステータスが含まれます。
