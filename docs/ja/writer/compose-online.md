---
description: Quaily のオンラインエディタ
outline: deep
---

# オンラインで記事を書く

> このページでは、Quaily のオンラインエディタで記事を書く方法を説明します。Obsidian などの Markdown エディタを使う場合は「[📝 Write with Favorite Editor and Publish to Quaily](https://quaily.com/blog/p/write-with-favorite-editor-and-publish-to-quaily)」を参照してください。

## 記事タイトルと Slug

記事タイトルは記事ページのタイトルとして表示されます。記事 slug は記事を識別する一意の文字列で、URL に使われます。一般に、記事タイトルの英訳やローマ字表記を使います。

例:

- 記事タイトル: `Introduction to Quaily: Understanding Quaily in Five Minutes`
- 記事 slug: `quail-introduction-five-minutes-to-understand-quail`

**[Quaily](https://quaily.com "Quaily Official Website")** には slug 自動生成機能があります。slug 入力欄の右側にある魔法杖ボタンを押すと、タイトルをもとに自動で slug が生成されます。

## カバー画像、要約、タグ

記事カバーは、記事ページ上部と記事一覧に表示されるアイキャッチ画像です。

作者は自分で画像をアップロードするか、Unsplash が提供する無料画像を使えます。Unsplash を使う場合は以下の手順です。

1. カバー画像右側の「Unsplash」ボタンをクリックします。
2. ポップアップ内でキーワード検索します。
3. 使いたい画像を選び、「Select」をクリックします。
4. 画像が自動で挿入され、出典と作者情報も Quaily が自動で追記します。

カバー画像は表示場所によってトリミングが異なります。対応アスペクト比は 3 種類です。

- landscape: ratio = 217:130
- portrait: ratio = 7:12
- square: ratio = 1:1

記事要約は記事一覧、フィード、検索エンジンに表示される短い紹介文です。タグは記事に紐づくラベルとして記事詳細ページに表示されます。

Quaily は AI による要約・タグ抽出にも対応しています。魔法杖ボタンを押すと、本文から自動で要約とタグを抽出します。

## 記事本文

### Markdown 構文

Quaily では Markdown を使って記事を書きます。Markdown は、装飾ではなく内容に集中しやすい軽量マークアップです。

Markdown に慣れていない場合は、オンラインエディタ右上の「?」ボタンから簡易リファレンスを確認できます。あわせて Quaily のチュートリアル「[📚 ⏰ 💡 Master the Simplest Markdown Syntax in 5 Minutes](https://quaily.com/blog/p/simplest-markdown-syntax-learn-in-5-minutes)」も参照できます。

### Quaily の拡張 Markdown

Quaily はコードブロック、表、数式などの一般的な拡張に加え、Quaily 独自の拡張構文もサポートしています。詳しくは「[Extended Markdown Syntax in Quaily](https://quaily.com/blog/p/extended-markdown-syntax)」を参照してください。

### 画像の挿入

記事カバーと同様に、画像はアップロードすることも、Unsplash の無料画像を使うこともできます。ツールバーの各ボタンはカバー画像と同じ動作なので、ここでは詳細を省略します。

### 埋め込みオブジェクトの挿入

新しい埋め込み機能では、記事内にさまざまな種類のコンテンツを差し込めます。

- Channel: 関連する Quaily チャンネルを埋め込み、補足情報や購読導線を提供できます
- Post: Quaily の記事を埋め込み、追加情報を提示できます
- Video: YouTube 動画を直接埋め込めます
- X's Post: X の投稿（旧 Tweet）を記事に埋め込めます
- TradingView: TradingView の金融データやチャートを埋め込めます

**使い方**

1. 記事を書き、埋め込みたい位置にカーソルを移動します。
   ![](https://static.quaily.com/media/16nue5mm.webp)
2. コンテンツ種別を選び、埋め込みたい対象のリンクを入力します。
   ![](https://static.quaily.com/media/q38ueom6.webp)
3. 「Insert」をクリックすると記事に埋め込まれます。

### Members-Only Content（Paid Tag）の挿入

Quaily では記事中にペイウォールを挿入できます。ペイウォールより前は無料、後ろは有料会員のみ閲覧できます。

手順:

1. 記事を書き、ペイウォールを入れたい位置にカーソルを移動します。
2. エディタツールバーの「Insert Paywall」ボタン（Spock の手のアイコン）をクリックします。
3. エディタ上に `<!--paywall-->` タグが挿入されます。

記事公開後、その記事にはペイウォールが有効になります。

## 記事を公開する

記事を書き終えたら、エディタ右上の「Publish」を押して公開できます。

Quaily が自動保存し、そのまま公開します。

キャッシュの都合で、公開直後にサイト上へ反映されないことがあります。通常は 1 分以内に表示されます。

## 公開を取り消す

記事を非公開にしたい場合は、エディタ右上の「Unpublish」をクリックします。記事は非公開となり、サイト上から見えなくなります。

## Cross Publish

Quaily は、複数言語や複数チャンネルへのクロスポストに対応しています。

詳しくは「[🌐 Introducing Cross Publish: Streamlining Multilingual Content Creation](https://quaily.com/blog/p/cross-publish-multi-language-articles-different-channels)」を参照してください。
