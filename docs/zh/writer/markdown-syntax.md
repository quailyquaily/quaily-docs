---
outline: deep
---

# Markdown 文法

## 基本語法

Quail 使用 GitHub Flavored Markdown Spec 作為撰寫貼文的基本語法。請參閱 [GFM 規範](https://github.github.com/gfm/) 以了解更多詳細資訊。

Markdown Guide 的[文法指南](https://www.markdownguide.org/basic-syntax/)也是一個很好的參考。

## 擴充語法

有些語法不受 GFM 支持，但受 Quail 支持，如下所示。您也可以查看[現場示範](https://quaily.com/blog/p/extended-markdown-syntax)

> 以下大部分語法目前僅在網頁瀏覽器中呈現，無法在電子郵件中顯示。

## 註釋

### 方程与公式

- 如果您想在帖子中編寫方程式，請確保您已在帖子選項中啟用 MathJax 渲染。
- 尚不支援內聯方程式。請改用分塊方程式。

```
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```
