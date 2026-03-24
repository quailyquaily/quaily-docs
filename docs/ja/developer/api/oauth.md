---
description: サードパーティアプリ向け OAuth 2.0 API
---

# OAuth API

## App を取得する

```prolog
GET API_BASE/apps/:app_id
```

### パラメータ

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| `app_id`  | string | app ID |

### レスポンス

```json
{
  "data": AppObject,
  "ts": 1723923923
}
```

## 認可する

```prolog
GET API_BASE/oauth/authorize?client_id=:client_id&redirect_uri=:redirect_uri&scope=:scope&state=:state&code_challenge=:code_challenge&code_challenge_method=:method&json=:json
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### クエリパラメータ

| Parameter               | Type   | Description |
| ----------------------- | ------ | ----------- |
| `client_id`             | string | OAuth client ID |
| `redirect_uri`          | string | リダイレクト URI（app 設定と一致する必要あり） |
| `scope`                 | string | OAuth scope（例: `user.public`, `post.write`, `credit.read`） |
| `state`                 | string | OAuth state 値 |
| `code_challenge`        | string | PKCE challenge |
| `code_challenge_method` | string | `S256` または `plain`（デフォルト: `S256`） |
| `json`                  | string | `true` を指定するとリダイレクトではなく JSON を返す |

### レスポンス

- デフォルトでは `redirect_uri` に `code` と `state` を付けてリダイレクトします
- `json=true` の場合は次を返します

```json
{
  "data": {
    "client_id": "app_id",
    "redirect_uri": "https://...",
    "url": "https://...",
    "code": "...",
    "state": "..."
  },
  "ts": 1723923923
}
```

## Scopes

| Scope         | Description |
| ------------- | ----------- |
| `user.public` | ユーザーの基本プロフィール情報を読み取る |
| `user.full`   | ユーザーの詳細プロフィール情報を読み取る |
| `post.write`  | Post と関連コンテンツの読み書き・管理 |
| `credit.read` | Credits 残高と台帳を読み取る |
| `credit.full`* | Credits 残高と台帳を読み取り、Credits を消費する |
| `apikey.read` | API Key の読み取りとハッシュ検証 |

> * trusted app が必要です。public app ではこの scope を要求できません。

## Token

```prolog
POST API_BASE/oauth/token
```

### リクエストボディ（Form）

```text
grant_type=authorization_code
client_id=...
redirect_uri=...
code=...
code_verifier=...
```

refresh の場合:

```text
grant_type=refresh_token
client_id=...
refresh_token=...
```

### レスポンス

ラッパーなしの生 JSON を返します。

```json
{
  "access_token": "...",
  "token_type": "Bearer",
  "refresh_token": "...",
  "expires_in": 2592000,
  "expiry": "2025-04-19T00:00:00Z"
}
```

## UserInfo

```prolog
GET API_BASE/oauth/userinfo
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | No     |

### レスポンス

ラッパーなしの生 JSON を返します。`sub` は app ごとの pairwise OAuth user ID、`uuid` はユーザーの global UUID です。Email 関連フィールドは利用可能な場合のみ含まれます。

```json
{
  "sub": "...",
  "uuid": "...",
  "name": "User Name",
  "picture": "https://...",
  "email": "user@example.com",
  "email_verified": true
}
```

## App を revoke する

```prolog
DELETE API_BASE/oauth/apps/:app_id
```

### 認可要否

| OAuth | APIKey |
| ----- | ------ |
| Yes   | Yes    |

### レスポンス

```json
{
  "data": null,
  "ts": 1723923923
}
```
