---
description: Quaily の Markdown 構文
outline: deep
---

# Markdown 構文

## 基本構文

Quaily では、記事執筆の基本構文として GitHub Flavored Markdown を採用しています。詳細は [GFM spec](https://github.github.com/gfm/) を参照してください。

Quaily の基本的な Markdown 解説として、「[📚 ⏰ 💡 Master the Simplest Markdown Syntax in 5 Minutes](https://quaily.com/blog/p/simplest-markdown-syntax-learn-in-5-minutes)」も参照できます。

## 拡張構文

GFM では未対応でも、Quaily がサポートしている構文があります。詳しくは [live demo](https://quaily.com/blog/p/extended-markdown-syntax) を確認してください。

> 拡張構文の多くは現在ブラウザ表示向けであり、メールでは表示できません。

## 注意点

### 数式

- 記事内で数式を使う場合は、記事オプションで MathJax レンダリングを有効にしてください。
- インライン数式はまだ非対応です。ブロック数式を使ってください。

```
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```
