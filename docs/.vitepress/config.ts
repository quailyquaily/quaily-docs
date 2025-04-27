import { defineConfig } from 'vitepress'
import { t } from "../lang/messages"

const genNav = () => {
  // @TODO: support multi-language
  let ret:any = [];
  for (const lang of ['en']) {
    const prefix = lang === 'en' ? '' : '/' + lang;
    ret = [
      { text: t(lang, 'home'), link: '/' },
      { text: t(lang, "writer_manual"), link: `${prefix}/writer/index` },
      { text: t(lang, "developer_docs"), link: `${prefix}/developer/index` }
    ]
  }
  return ret;
}

const genI18nSidebar = () => {
  const ret = {};
  for (const lang of ['en', 'zh']) {
    const prefix = lang === 'en' ? '' : '/' + lang;
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
    ret[`developer/`] = [
      {
        items: [
          { text: t(lang, 'dev_overview'), link: `developer/overview` },
          { text: t(lang, 'authorization'), link: `developer/authorization` },
        ]
      },
      {
        text: t(lang, 'api'),
        items: [
          { text: t(lang, 'api_response_object'), link: `developer/api/response-object` },
          { text: t(lang, 'api_user'), link: `developer/api/user` },
          { text: t(lang, 'api_channel'), link: `developer/api/channel` },
          { text: t(lang, 'api_post'), link: `developer/api/post` },
          { text: t(lang, 'api_attachment'), link: `developer/api/attachment` },
          { text: t(lang, 'api_composer'), link: `developer/api/composer` },
        ]
      }
    ]
  }
  return ret;
}

const year = new Date().getFullYear();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Quaily Documentation",
  description: "The official documentation for Quaily",
  appearance: false,

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
    }
  },

  themeConfig: {
    logo: { light: 'https://quaily.com/portal-images/app-logo-w-text.svg', dark: 'https://quaily.com/portal-images/app-logo-w-text.svg', alt: 'Quaily' },

    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: genNav(),

    sidebar: genI18nSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/quailyquaily/quaily-docs' }
    ],

    footer: {
      copyright: `©${year} <a href="https://quaily.com" title="A newsletter service">quaily.com</a>`,
    }
  }
})
