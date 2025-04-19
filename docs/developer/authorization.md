---
outline: deep
---

# Authorization

Quaily supports two types of authorization:

- API Key
- OAuth 2.0

## API Key

Visit [Quaily Dashboard](https://quaily.com/dashboard/profile/apikeys) to create an API Key.

After creating an API Key, you can use it to authenticate your requests to the Quaily APIs. Put the API Key in the `Authorization` header of your requests.

```
Authorization: Bearer <api_key>
```

## OAuth 2.0

Register an application to get the client ID and client secret.

> [!NOTE]
> OAuth 2.0 is currently only public for invited developers. Please contact Quaily team to get the client ID and client secret.
