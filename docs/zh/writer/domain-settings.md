---
outline: deep
description: 域名设置。设置自定义域名。
---

# 域名设置

作者可以将自定义域添加到他们的列表中。 添加后，将可以通过自定义域访问该列表。

## 要求

1. 您必须拥有要添加的域名。
2. 您必须能够修改域名的DNS记录。
3. 域名必须是子域名，例如 `letters.example.com`。 不支持根域，例如 `example.com`。

## 添加自定义域

1. 进入列表设置页面，向下滚动至「域名设置」部分
2. 在「你的域名」字段中输入您要添加的域名
3. 复制「CNAME记录」字段的值，通常是一个 `.quail.cc` 结尾的域名
4. 转到域名注册商的网站，添加 CNAME 记录作为您添加的域名，并将「CNAME 记录」字段的值粘贴到 CNAME 记录的「值」字段中
5. 等待DNS记录生效，然后在列表设置页面点击“保存”按钮

::: info
DNS 记录可能需要几个小时才能生效。如果您无法通过自定义域访问该列表，请等待几个小时，然后重试。
如果依然无法通过，请联系我们。
:::

::: warning
如果您使用的是 Cloudflare，请在添加 CNAME 记录时取消「代理」选项，并且务必在 TLS 设置中选择 Full 模式。
:::

## Canonical URL base

Canonical URL base 用于生成文章和列表的规范 URL，以帮助搜索引擎更好地索引您的内容。

在大多数实践中，最好将其设置为您的自定义域。例如，如果您的自定义域是 `https://letters.example.com`，那么您应该将 Canonical URL Base 设置为 `https://letters.example.com`。