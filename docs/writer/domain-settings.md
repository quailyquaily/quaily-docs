---
description: The domain settings for a Quaily channel. Set your custom domain to your channel.
outline: deep
---

# Domain Settings

Writers can add a custom domain to their list. After adding, the list will be accessible via the custom domain.

## Requirements

1. You must own the domain name you want to add.
2. You must be able to modify the DNS records of the domain name.
3. The domain name must be a subdomain, such as `letters.example.com`. Root domain, such as `example.com`, is not supported.

## Add a custom domain

1. Go to the list settings page, scroll down to the "Domain Settings" section
2. Input the domain name you want to add in the "Your Domain Here" field
3. Copy the value of the "CNAME Record" field
4. Go to your domain name registrar's website, add a CNAME record as the domain name you've added, and paste the value of the "CNAME Record" field into the "Value" field of the CNAME record
5. Wait for the DNS record to take effect, and then click the "Save" button on the list settings page

::: info
It may take a few hours for the DNS record to take effect. If you can't access the list via the custom domain, please wait a few hours and try again.
Please contact us if you still can't access it.
:::

::: warning
If you are using Cloudflare, please disable the "Proxy" option when adding the CNAME record, and be sure to select Full mode in the TLS settings.
:::

## Canonical URL base

The Canonical URL Base is used to generate the canonical URL of the article and list, to help search engines better index your content.

In most practices, it would be good to set it to your custom domain.

For example, if your custom domain is `https://letters.example.com`, then you should set the Canonical URL Base to `https://letters.example.com`.

