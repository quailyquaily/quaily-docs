---
outline: deep
---

# Obsidian Plugin

**[Quaily](https://quaily.com "Quaily Official Website")** provides an [Obsidian](https://obsidian.md/) plugin that allows you to use Quaily's publishing, unpublishing, and post delivering features within Obsidian.

Combined with Obsidian's powerful Markdown editing capabilities, Quaily's Obsidian plugin can help you better manage your posts.

About this plugin's usage, please refer to "[📝 Write with Favorite Editor and Publish to Quaily](https://quaily.com/blog/p/write-with-favorite-editor-and-publish-to-quaily)".

## Installing the Plugin

Quaily's Obsidian plugin can be found in the Obsidian community plugin list. You can install it directly from there.

1. Open Obsidian's settings page and click on the "Community Plugins" tab.
2. Click the "Browse" button at the right of the "Community Plugins" tab. A plugin list will appear.
3. Search for "Quaily" in the plugin list and click the "Install" button.

You may need to restart Obsidian again for the plugin to take effect.

Please refer to the [plugin homepage](https://github.com/quail-ink/obsidian-quail) for more installation instructions.

## Configuring the Plugin

After installing the plugin, you need to configure it to use the functionality provided by the plugin.

1. First, open Obsidian's settings page and click on the "Community Plugins" tab. Find the Quaily plugin and click the "Settings" button.
2. Log in to Quaily and complete the authorization process. (You can also use `Quail: Login` command in the command palette)
3. Choose a list from the dropdown list.

Restart Obsidian for the plugin to take effect.

## Writing Posts

You can write posts in Obsidian as usual. Once you have finished writing an post, you can use Quaily's Obsidian plugin to publish it.

Before publishing, you need to generate summaries for your posts according to Quaily's requirements.

## Generating Summaries and Metadata

Quaily provides the functionality to generate post summaries using AI. You can use Quaily's Obsidian plugin to invoke this feature. Here's how:

1. Press the shortcut key `Ctrl + P` to open Obsidian's command palette (or `Cmd + P` for macOS users).
2. Type "Quaily" and select the "Quaily: Generate Metadata" command, then press Enter.
3. Wait a moment, and Quaily will automatically generate the summary, tags, and other metadata for your post. It will insert them at the beginning of the post in [frontmatter](https://jekyllrb.com/docs/front-matter/) format.

You will see something similar to the following at the beginning of your post:

```yaml
---
slug: "post-slug"
datetime: 2021-08-01T00:00:00+08:00
summary: "post summary"
tags: "tag1, tag2"
cover: "URL of post cover image"
---
```

In the above frontmatter:

- `slug` is the slug of the post, which Quaily uses to generate the post's URL. This slug should be unique within the entire list and generally consists of English words representing the post's title. You can manually modify this slug if you don't want to use the generated one.
- `datetime` is the publication date of the post.
- `summary` is the summary of the post, which you can

also manually modify.

- `tags` are the post's tags, which you can also manually modify.
- `cover` is the URL of the post's cover image, which you can manually modify. However, when modifying it, please note that:
  1. The cover image must be publicly accessible, or
  2. The cover image must be an image from your Obsidian and use an absolute path. Please refer to the "Inserting Images" section below.

::: tip
You can also choose to manually enter the summary instead of using the AI-generated one.

If you don't want to use the AI-generated summary, you can select the "Quaily: Insert Metadata Template" command, and Obsidian will automatically insert a metadata template for you to manually enter the information.
:::

## Saving posts

Once you have finished writing and generating summaries and metadata for your posts, you can use Quaily's Obsidian plugin to save them:

1. Press the shortcut key `Ctrl + P` to open Obsidian's command palette (or `Cmd + P` for macOS users).
2. Type "Quaily" and select the "Quaily: Save" command, then press Enter.
3. Wait a moment, and Quaily will automatically save the post to Quaily.

If you log in to Quaily at this point, you will be able to see the post you just saved in the "[post List](https://quaily.com/dashboard)".

## Publishing posts

Publishing an post changes its status from "Draft" to "Published," making it visible to others:

1. Press the shortcut key `Ctrl + P` to open Obsidian's command palette (or `Cmd + P` for macOS users).
2. Type "Quaily" and select the "Quaily: Publish" command, then press Enter.
3. Wait a moment, and Quaily will automatically publish the post to Quaily and display the post's access URL.
4. You can click on the displayed URL to view your post.

## Unpublishing posts

Unpublishing an post changes its status from "Published" to "Draft," making it no longer visible to others.

The process is similar to publishing an post, but in the second step, select the "Quaily: Unpublish" command.

## Delivering posts

Delivering an post sends it via email to your subscribers. If you have set up a Telegram bot for your list, the bot will also automatically push the post to your Telegram channel.

The process is similar to publishing an post, but in the second step, select the "Quaily: Deliver" command.

## Inserting Images

If the images in your post come from your local vault of Obsidian, Quaily's Obsidian plugin can read them and automatically upload them to Quaily when saving or publishing posts.
You can use both Obsidian's internal link syntax and general Markdown image syntax to insert images into your posts.

:::tip
Once the images are uploaded to Quaily, Quaily will automatically convert the image into WebP format and replace the image links in your post with the URLs of the uploaded images.
:::

**Internal link syntax**

It could be either absolute path or image aliasing in the sentence.

Here's an example:

```
![[image-1.png]]

![[images/image-2.png]]
```

The code above will insert the images `image-1.png` and `image-2.png` into the post. In this case, `image-1.png` is the only file with this name in the post, `image-2.png` is the a file under the `images` folder.
You can also paste an image directly from the clipboard and Quaily will handle it automatically.

**Markdown image syntax**

Please use absolute path for inserting image in this way. Here's an example:

Suppose your Obsidian directory structure is as follows:

```
- [essay]
  - [images]
    - image-1.png
    - image-2.png
  - [posts]
    - test
```

Here, "essay," "images," and "posts" are folders, "image-1.png" and "image-2.png" are image files, and "test" is an post file.

If you want to insert the image "image-1.png" into "test," you need to use the following syntax:

```markdown
![image-1](/essay/images/image-1.png)
```

Instead of Obsidian syntax:

```markdown
![[image-1]]
```

Note that "/essay/images/image-1.png" is an absolute path (starting from the top-level folder), not a relative path. If you use a relative path, Quaily's Obsidian plugin will not be able to locate the image file.

---

That's the usage of Quaily's Obsidian plugin. If you have any questions, please feel free to raise them in the [GitHub Issue](https://github.com/quail-ink/obsidian-quail/issues).
