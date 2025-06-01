---
outline: deep
description: 统计分析设置
---

# 统计分析

## 内置分析

Quaily 提供了开箱即用的简单内置分析功能，无需配置即可使用。

每篇文章的分析指标包括：

1. 浏览量：文章被查看的次数（包括网页和电子邮件）。
2. 阅读量：文章被阅读的次数。当用户在文章上停留超过 10 秒时，就认为文章已被阅读。
3. 电子邮件阅读量：在电子邮件中阅读文章的次数。仅在您通过电子邮件发送文章时提供此指标。

这三个指标默认会以「X 次浏览」的字样显示在文章列表中，不过作者可以在「[列表设置 - 一般设置](https://quaily.com/dashboard/lists/@current/settings/general)」中关闭显示。

## 第三方分析

Quaily 支持第三方分析服务：[Umami.is](https://umami.is/) 和 [Google Analytics](https://analytics.google.com/)。

请在「[列表设置 - 一般设置](https://quaily.com/dashboard/lists/@current/settings/general)」中开启第三方分析。

### Umami.is

Umami 是一个开源的，注重隐私的 Google Analytics 替代品。

可以在 [Umami.is](https://umami.is/) 上注册帐户，然后在 `Umami ID` 文本框输入 Umami 的 `Website ID`。

**自托管 Umami**

如果你使用自托管的 Umami，可以在 `Umami Base` 文本框输入自托管的 Umami 地址

### Google Analytics

Google Analytics 是一项流行的分析服务。与 Umami 类似，您需要在 [Google Analytics](https://analytics.google.com/) 上注册帐户，然后在 `Google Analytics ID` 文本框中输入 `Measurement ID`。
