import path from 'node:path'
import { defineConfig } from 'vitepress'
import llmstxtPlugin from 'vitepress-plugin-llmstxt'
import { t } from "../lang/messages"

const localizedWriterLangs = ['en', 'zh', 'ja'] as const
const localizedDeveloperLangs = ['en', 'zh', 'ja'] as const

const getLocalePrefix = (lang: string) => {
  return lang === 'en' ? '' : `/${lang}`
}

const getDeveloperLink = (lang: string) => {
  if (lang === 'ja') {
    return '/ja/developer/index'
  }

  if (lang === 'zh') {
    return '/zh/developer/index'
  }

  return '/developer/index'
}

const genNav = (lang: string) => {
  const prefix = getLocalePrefix(lang)

  return [
    { text: t(lang, 'home'), link: prefix ? `${prefix}/` : '/' },
    { text: t(lang, "writer_manual"), link: `${prefix}/writer/index` },
    { text: t(lang, "developer_docs"), link: getDeveloperLink(lang) }
  ]
}

const genDeveloperSidebar = (lang: string) => {
  const prefix = getLocalePrefix(lang)

  if (lang === 'ja') {
    return [
      {
        items: [
          { text: '概要', link: `${prefix}/developer/index` },
          { text: '認可', link: `${prefix}/developer/authorization` },
        ]
      },
      {
        text: 'API リファレンス',
        items: [
          {
            text: '基本',
            items: [
              { text: 'レスポンスオブジェクト', link: `${prefix}/developer/api/response-object` },
              { text: 'Auth', link: `${prefix}/developer/api/auth` },
              { text: 'OAuth', link: `${prefix}/developer/api/oauth` },
              { text: 'APIKey', link: `${prefix}/developer/api/apikey` },
            ],
          },
          {
            text: '主要リソース',
            items: [
              { text: 'User', link: `${prefix}/developer/api/user` },
              { text: 'Channel', link: `${prefix}/developer/api/channel` },
              { text: 'List', link: `${prefix}/developer/api/list` },
            ],
          },
          {
            text: 'コンテンツ',
            items: [
              { text: 'Post', link: `${prefix}/developer/api/post` },
              { text: 'Attachment', link: `${prefix}/developer/api/attachment` },
              { text: 'Composer', link: `${prefix}/developer/api/composer` },
              { text: 'Pack', link: `${prefix}/developer/api/pack` },
            ],
          },
          {
            text: 'エンゲージメント',
            items: [
              { text: 'Subscription', link: `${prefix}/developer/api/subscription` },
              { text: 'Comment', link: `${prefix}/developer/api/comment` },
              { text: 'Tweet', link: `${prefix}/developer/api/tweet` },
            ],
          },
          {
            text: '分析',
            items: [
              { text: 'Analytics', link: `${prefix}/developer/api/analytics` },
              { text: 'Explore', link: `${prefix}/developer/api/explore` },
            ],
          },
          {
            text: '課金',
            items: [
              { text: 'Credit', link: `${prefix}/developer/api/credit` },
            ],
          },
        ]
      },
      {
        text: 'その他',
        items: [
          { text: 'Widget', link: `${prefix}/developer/widget` },
        ]
      }
    ]
  }

  if (lang === 'zh') {
    return [
      {
        items: [
          { text: '概览', link: `${prefix}/developer/index` },
          { text: '授权', link: `${prefix}/developer/authorization` },
        ]
      },
      {
        text: 'API 参考',
        items: [
          {
            text: '基础',
            items: [
              { text: '响应对象', link: `${prefix}/developer/api/response-object` },
              { text: 'Auth', link: `${prefix}/developer/api/auth` },
              { text: 'OAuth', link: `${prefix}/developer/api/oauth` },
              { text: 'APIKey', link: `${prefix}/developer/api/apikey` },
            ],
          },
          {
            text: '核心资源',
            items: [
              { text: 'User', link: `${prefix}/developer/api/user` },
              { text: 'Channel', link: `${prefix}/developer/api/channel` },
              { text: 'List', link: `${prefix}/developer/api/list` },
            ],
          },
          {
            text: '内容',
            items: [
              { text: 'Post', link: `${prefix}/developer/api/post` },
              { text: 'Attachment', link: `${prefix}/developer/api/attachment` },
              { text: 'Composer', link: `${prefix}/developer/api/composer` },
              { text: 'Pack', link: `${prefix}/developer/api/pack` },
            ],
          },
          {
            text: '互动',
            items: [
              { text: 'Subscription', link: `${prefix}/developer/api/subscription` },
              { text: 'Comment', link: `${prefix}/developer/api/comment` },
              { text: 'Tweet', link: `${prefix}/developer/api/tweet` },
            ],
          },
          {
            text: '分析',
            items: [
              { text: 'Analytics', link: `${prefix}/developer/api/analytics` },
              { text: 'Explore', link: `${prefix}/developer/api/explore` },
            ],
          },
          {
            text: '计费',
            items: [
              { text: 'Credit', link: `${prefix}/developer/api/credit` },
            ],
          },
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'Widget', link: `${prefix}/developer/widget` },
        ]
      }
    ]
  }

  return [
    {
      items: [
        { text: 'Overview', link: `${prefix}/developer/index` },
        { text: 'Authorization', link: `${prefix}/developer/authorization` },
      ]
    },
    {
      text: 'API Reference',
      items: [
        {
          text: 'Basics',
          items: [
            { text: 'Response Object', link: `${prefix}/developer/api/response-object` },
            { text: 'Auth', link: `${prefix}/developer/api/auth` },
            { text: 'OAuth', link: `${prefix}/developer/api/oauth` },
            { text: 'APIKey', link: `${prefix}/developer/api/apikey` },
          ],
        },
        {
          text: 'Core Resources',
          items: [
            { text: 'User', link: `${prefix}/developer/api/user` },
            { text: 'Channel', link: `${prefix}/developer/api/channel` },
            { text: 'List', link: `${prefix}/developer/api/list` },
          ],
        },
        {
          text: 'Content',
          items: [
            { text: 'Post', link: `${prefix}/developer/api/post` },
            { text: 'Attachment', link: `${prefix}/developer/api/attachment` },
            { text: 'Composer', link: `${prefix}/developer/api/composer` },
            { text: 'Pack', link: `${prefix}/developer/api/pack` },
          ],
        },
        {
          text: 'Engagement',
          items: [
            { text: 'Subscription', link: `${prefix}/developer/api/subscription` },
            { text: 'Comment', link: `${prefix}/developer/api/comment` },
            { text: 'Tweet', link: `${prefix}/developer/api/tweet` },
          ],
        },
        {
          text: 'Insights',
          items: [
            { text: 'Analytics', link: `${prefix}/developer/api/analytics` },
            { text: 'Explore', link: `${prefix}/developer/api/explore` },
          ],
        },
        {
          text: 'Commerce',
          items: [
            { text: 'Credit', link: `${prefix}/developer/api/credit` },
          ],
        },
      ]
    },
    {
      text: 'Misc',
      items: [
        { text: 'Widget', link: `${prefix}/developer/widget` },
      ]
    }
  ]
}

const genI18nSidebar = () => {
  const ret: Record<string, any> = {};
  for (const lang of localizedWriterLangs) {
    const prefix = getLocalePrefix(lang);
    ret[`${prefix}/writer/`] = [
      {
        text: t(lang, 'compose_and_deliver'),
        items: [
          { text: t(lang, 'compose_online'), link: `${prefix}/writer/compose-online` },
          { text: t(lang, 'delivery'), link: `${prefix}/writer/delivery` },
          { text: t(lang, 'markdown_syntax'), link: `${prefix}/writer/markdown-syntax` },
          { text: t(lang, 'ai'), link: `${prefix}/writer/ai` },
        ]
      },
      {
        text: t(lang, 'monetization'),
        items: [
          { text: t(lang, 'prepare_for_monetization'), link: `${prefix}/writer/monetization` },
          { text: t(lang, 'premium'), link: `${prefix}/writer/premium` },
          { text: t(lang, 'ads'), link: `${prefix}/writer/ads` },
        ]
      },
      {
        text: t(lang, 'list_settings'),
        items: [
          { text: t(lang, 'general_settings'), link: `${prefix}/writer/general-settings` },
          { text: t(lang, 'analytics_settings'), link: `${prefix}/writer/analytics-settings` },
          { text: t(lang, 'domain_settings'), link: `${prefix}/writer/domain-settings` },
          { text: t(lang, 'widget_settings'), link: `${prefix}/writer/widget-settings` },
          { text: t(lang, 'channel_settings'), link: `${prefix}/writer/channel-settings` },
          { text: t(lang, 'monetization_settings'), link: `${prefix}/writer/monetization-settings` },
          { text: t(lang, 'payout_settings'), link: `${prefix}/writer/payout-settings` },
          { text: t(lang, 'payment_settings'), link: `${prefix}/writer/payment-settings` },
          { text: t(lang, 'ads_settings'), link: `${prefix}/writer/ads-settings` },
        ]
      },
      {
        text: t(lang, 'tools'),
        items: [
          { text: t(lang, 'obsidian_plugin'), link: `${prefix}/writer/obsidian-plugin` },
          { text: t(lang, 'quail_cli'), link: `${prefix}/writer/quail-cli` },
        ]
      },
      {
        text: t(lang, 'other_topics'),
        items: [
          { text: t(lang, 'migration'), link: `${prefix}/writer/migration` },
          { text: t(lang, 'troubleshooting'), link: `${prefix}/writer/troubleshooting` },
        ]
      },
    ]
  }

  for (const lang of localizedDeveloperLangs) {
    const prefix = getLocalePrefix(lang)
    ret[`${prefix}/developer/`] = genDeveloperSidebar(lang)
  }

  return ret;
}

const year = new Date().getFullYear();
const workspaceRoot = path.resolve(__dirname, '../../..')

const getDocsLocale = (relativePath: string) => {
  if (relativePath.startsWith('zh/')) {
    return 'zh'
  }

  if (relativePath.startsWith('ja/')) {
    return 'ja'
  }

  return 'en'
}

const getMarkdownSourcePath = (relativePath: string) => {
  const normalized = relativePath.replace(/^\/+/, '').replace(/\/+$/, '')
  if (!normalized) {
    return '/index.md'
  }

  if (!normalized.endsWith('.md')) {
    return `/${normalized}.md`
  }

  const withoutExtension = normalized.slice(0, -3)

  if (withoutExtension === 'index') {
    return '/index.md'
  }

  if (withoutExtension.endsWith('/index')) {
    return `/${withoutExtension.slice(0, -6)}.md`
  }

  return `/${normalized}`
}

const getFontHead = (relativePath: string) => {
  const locale = getDocsLocale(relativePath)

  if (locale === 'zh') {
    return [
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@200..900&family=Noto+Serif+SC:wght@200..900&display=swap'
      }]
    ]
  }

  if (locale === 'ja') {
    return [
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP:wght@200..900&display=swap'
      }]
    ]
  }

  return [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&family=Noto+Serif:wght@100..900&display=swap'
    }]
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Quaily Documentation",
  description: "The official documentation for Quaily",
  appearance: false,
  head: [
    ['meta', { name: 'theme-color', content: '#FAFAF8' }],
  ],
  transformHead({ pageData }) {
    const markdownSourcePath = getMarkdownSourcePath(pageData.relativePath)

    return [
      ...getFontHead(pageData.relativePath),
      ['link', { rel: 'alternate', type: 'text/markdown', title: 'Markdown Source', href: markdownSourcePath }],
      ['meta', { name: 'quaily:markdown-source', content: markdownSourcePath }],
    ]
  },

  vite: {
    plugins: [
      llmstxtPlugin({
        llmsFile: { indexTOC: 'only-llms' },
        hostname: 'https://docs.quaily.com',
        mdFiles: true,
        watch: true
      })
    ],
    server: {
      fs: {
        allow: [workspaceRoot]
      }
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: genNav('en')
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: genNav('zh')
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      themeConfig: {
        nav: genNav('ja')
      }
    }
  },

  themeConfig: {
    logo: { light: 'https://quaily.com/portal-images/app-logo-w-text.svg', dark: 'https://quaily.com/portal-images/app-logo-w-text.svg', alt: 'Quaily' },

    siteTitle: false,

    sidebar: genI18nSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/quailyquaily/quaily-docs' }
    ],

    footer: {
      copyright: `©${year} <a href="https://quaily.com" title="A newsletter service">quaily.com</a>`,
    }
  }
})
