---
outline: deep
---

# 認可

Quaily は 2 種類の認可方式をサポートしています。

- API Key
- OAuth 2.0

## API Key

[Quaily Dashboard](https://quaily.com/dashboard/profile/apikeys) で API Key を作成してください。

作成後は、その API Key を使って Quaily API へのリクエストを認証できます。`Authorization` ヘッダーに次の形式で設定します。

```
Authorization: Bearer <api_key>
```

## OAuth 2.0

アプリケーションを登録して、client ID と client secret を取得します。

> [!NOTE]
> OAuth 2.0 は現在、招待された開発者向けにのみ公開されています。client ID と client secret が必要な場合は Quaily チームへ連絡してください。
