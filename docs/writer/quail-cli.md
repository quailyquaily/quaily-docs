---
outline: deep
---

# Quail CLI

`quail-cli` is a command-line interface for interacting with [Quaily](https://quaily.com), designed to simplify and automate operations such as user authentication, managing posts, and fetching user details.

Quaily CLI interacts with the Quaily API at `https://api.quaily.com`.

About this CLI's usage, please refer to "[🖥️ Introducing Quail CLI: Streamline Your Newsletter Workflow](https://quaily.com/blog/p/introducing-quail-cli-streamline-your-newsletter-workflow)".

## Installation

To install `quail-cli`, you can use the following command:

```bash
$ go install github.com/quailyquaily/quail-cli@latest
```

## Usage

After installation, you can start using `quail-cli` by calling the following command:

```bash
$ quail-cli [command]
```

### Available Commands

- **help**: Get help about any command.
- **login**: Authenticate with Quaily using OAuth.
- **me**: Retrieve current user information.
- **post**: Create, update, delete, or retrieve posts.

### Global Flags

- `--api-base string`: Quaily API base URL (default: `https://api.quaily.com`).
- `--auth-base string`: Quaily Auth base URL (default: `https://quaily.com`).
- `--config string`: Path to the configuration file (default: `$HOME/.config/quail-cli/config.yaml`).
- `--format string`: Specify output format, either `human` (human-readable) or `json` (default: `human`).
- `-h, --help`: Display help information for the `quail-cli`.

## Usage

### Authenticate with Quaily

```bash
$ quail-cli login
```

This will initiate OAuth login to authenticate with Quaily. Please follow the instructions to complete the authentication process.

1. visit the URL provided in the terminal.
2. Authorize the application.

### Retrieve Current User Information

```bash
$ quail-cli me
```

Get the details of the currently authenticated user.

### Post Operations

#### Upsert a Post

```bash
$ quail-cli post upsert your_markdown_file.md -l your_list_slug
```

quail-cli will read the frontmatter from the markdown file to create or update a post. If the post does not exist, it will be created. If it exists, it will be updated.

Here is an example of a markdown file:

```markdown
---
title: "Here is the title"
slug: your-post-slug
datetime: 2024-09-30 18:42
summary: "This is a summary of the post."
tags: tag1, tag2, tag3
cover_image_url: "your-image-url.jpg"
---

> Any sufficiently advanced technology is indistinguishable from magic.
>
> -- Arthur C. Clarke

This is the body of the post.

    int main() {
        printf("Hello, World!");
        return 0;
    }

## Section Title

This is the last section of the post.
```

#### Publish/Unpublish/Deliver/Delete a Post

```bash
$ quail-cli post publish -l your_list_slug -p your_post_slug
```

```bash
$ quail-cli post unpublish -l your_list_slug -p your_post_slug
```

```bash
$ quail-cli post deliver -l your_list_slug -p your_post_slug
```

```bash
$ quail-cli post delete -l your_list_slug -p your_post_slug
```

## Configuration

By default, `quail-cli` reads from `$HOME/.config/quail-cli/config.yaml`. You can specify a different configuration file by using the `--config` flag.

```bash
$ quail-cli --config /path/to/config.yaml
```

### Configuration File Example

```yaml
# DO NOT modify `app` section, quail-cli will manage it.
app:
  access_token: ""
  expiry: ""
  refresh_token: ""
  token_type: ""
post:
  # frontmatter_mapping is used to map the frontmatter keys
  # for this example:
  # you can use`featureImage` in the frontmatter and it will be mapped to `cover_image_url`
  frontmatter_mapping:
    cover_image_url: featureImage
```
