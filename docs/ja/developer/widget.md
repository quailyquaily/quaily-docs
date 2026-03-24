---
outline: deep
---

# Widget

Quaily widget は、小さな JavaScript ライブラリです。Quaily の記事、チャンネル、購読フォームを自分のサイトへ埋め込めます。

たとえば、以下は [Quaily Blog](https://quaily.com/blog) の購読フォームウィジェットです。

<iframe src="https://quaily.com/blog/widget.external?theme=light&amp;list_slug=blog&amp;layout=subscribe_form&amp;lang=en&amp;logged=ignore" data-theme="light" width="100%" height="128px" title="Quail Widget" frameborder="0" allow="web-share" allowfullscreen=""></iframe>

## 自動リサイズ

このウィジェットには bot 対策が含まれているため、状況によって iframe 内の高さが変化します。

iframe の内容が途中で切れないように、JavaScript で iframe の高さを内容に合わせて調整できます。

```js
function handleSubscribeFrameMessage(selector) {
  window.addEventListener('message', function(event) {
    var ifr = document.querySelector(selector);
    if (event.data.action === 'resize') {
      let h = (event.data.height + 20);
      if (h > 342) {
        h = 342;
      }
      if (ifr) {
        ifr.style.height = h + 'px';
        ifr.height = "";
        ifr.height = h + 'px';
      }
    }
  }, false);
}
setTimeout(() => {
  handleSubscribeFrameMessage('#quail-widget-id');
}, 100);
```

ウィジェット ID を `quail-widget-id` と仮定すると、iframe 内の高さが変わったタイミングで、iframe は親ウィンドウへ `resize` メッセージを送ります。

`handleSubscribeFrameMessage` はそのメッセージを受け取り、新しい高さへ iframe を合わせるためのコールバックです。
