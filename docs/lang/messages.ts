export const messages = {
  "en": {
    "home": "Home",
    "tutorial": "Tutorial",
    "writer_manual": "Writer",

    "compose_and_deliver": "Compose and Deliver",
    "compose_online": "Compose Online" ,
    "delivery": "Deliver Posts" ,
    "markdown_syntax": "Markdown Syntax",
    "ai": "AI Features",

    "monetization": "Monetization" ,
    "prepare_for_monetization": "Prepare to Earn" ,
    "premium": "Premium Subscriptions" ,
    "ads": "Ads" ,

    "email_settings": "Email Settings" ,
    "list_settings": "Settings" ,
    "general_settings": "General Settings" ,
    "analytics_settings": "・Analytics" ,
    "domain_settings": "・Custom Domain" ,
    "widget_settings": "・Widget" ,
    "channel_settings": "Sending Settings" ,
    "monetization_settings": "Monetization Settings" ,
    "payout_settings": "・Payout Settings" ,
    "payment_settings": "・Payment Settings" ,
    "ads_settings": "・Ads Settings" ,

    "other_topics": "Other Topics",
    "migration": "Migration",
    "troubleshooting": "Troubleshooting",

    "tools": "Tools",
    "obsidian_plugin": "Obsidian Plugin",
    "quail_cli": "Quaily CLI",
  },
  "zh": {
    "home": "首页",
    "tutorial": "教程",
    "writer_manual": "作者手册",

    "compose_and_deliver": "撰写与推送",
    "compose_online": "在线撰写" ,
    "delivery": "推送文章" ,
    "markdown_syntax": "Markdown 语法",
    "ai": "AI 功能",

    "monetization": "收益化" ,
    "prepare_for_monetization": "赚取收益" ,
    "premium": "收费订阅" ,
    "ads": "广告" ,

    "email_settings": "邮件设置" ,
    "list_settings": "设置" ,
    "general_settings": "通用设置" ,
    "analytics_settings": "・统计分析" ,
    "domain_settings": "・自定义域名" ,
    "widget_settings": "・Widget" ,
    "channel_settings": "推送设置" ,
    "monetization_settings": "收益设置" ,
    "payout_settings": "・收款设置" ,
    "payment_settings": "・付款设置" ,
    "ads_settings": "・广告设置" ,

    "other_topics": "其他主题",
    "migration": "迁移",
    "troubleshooting": "故障排除",

    "tools": "工具",
    "obsidian_plugin": "Obsidian 插件",
    "quail_cli": "Quaily 命令行工具",
  },
}

export const t = (lang, key: string) => {
  if (lang === '') lang = 'en'
  return messages[lang][key] || messages["en"][key];
}
