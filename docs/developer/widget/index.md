---
outline: deep
---

# Widget

Quaily widget is a small JavaScript library that allows you to embed Quaily post, channel, and subscription form on your website.

for example, here is a subscribe form widget of [Quaily Blog](https://quaily.com/blog):

<iframe src="https://quaily.com/blog/widget.external?theme=light&amp;list_slug=blog&amp;layout=subscribe_form&amp;lang=en&amp;logged=ignore" data-theme="light" width="100%" height="128px" title="Quail Widget" frameborder="0" allow="web-share" allowfullscreen=""></iframe>

## Auto size 

The widget includes anti-bot protection, so the iframe content will grow in height in some cases.

To avoid the incomplete display of the iframe content, you can use javascript to resize the iframe to its content.

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

Let's assume the widget id is `quail-widget-id`. When the content of the iframe is resized, the iframe will send a message `resize` to the parent window with the new height.

The `handleSubscribeFrameMessage` function is a callback function that will be called when the iframe content is resized, and the iframe will resize to the new height.

