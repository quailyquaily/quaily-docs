---
description: Quaily チャンネルのドメイン設定。独自ドメインをチャンネルに紐付けます。
outline: deep
---

# 独自ドメイン設定

作者は、自分のリストに独自ドメインを追加できます。追加後、そのリストは独自ドメイン経由でアクセスできるようになります。

## 要件

1. 追加したいドメインを自分で所有していること
2. そのドメインの DNS レコードを変更できること
3. `letters.example.com` のようなサブドメインであること。`example.com` のようなルートドメインは未対応です

## 独自ドメインを追加する

1. リスト設定ページへ移動し、「Domain Settings」セクションまでスクロールします
2. 「Your Domain Here」欄に追加したいドメイン名を入力します
3. 「CNAME Record」欄の値をコピーします
4. ドメイン管理サービス側で、入力したドメインに対する CNAME レコードを追加し、「Value」へ「CNAME Record」の値を貼り付けます
5. DNS の反映を待ってから、リスト設定ページで「Save」をクリックします

::: info
DNS の反映には数時間かかることがあります。独自ドメインでアクセスできない場合は、少し待ってから再度試してください。
それでも解決しない場合はお問い合わせください。
:::

::: warning
Cloudflare を使っている場合は、CNAME レコード追加時に「Proxy」をオフにし、TLS 設定では Full モードを選んでください。
:::

## Canonical URL Base

Canonical URL Base は、記事やリストの canonical URL を生成するために使われます。検索エンジンがコンテンツを正しく認識する助けになります。

通常は、独自ドメインを設定するのが適切です。

たとえば独自ドメインが `https://letters.example.com` なら、Canonical URL Base も `https://letters.example.com` に設定してください。
