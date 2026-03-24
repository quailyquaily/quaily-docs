export const messages = {
  "en": {
    "home": "🏠 Home",
    "tutorial": "📚 Tutorial",
    "writer_manual": "✍️ Writer",
    "developer_docs": "👨‍💻 Developer",

    "compose_and_deliver": "Compose and Send",
    "compose_online": "📝 Compose Online",
    "delivery": "📤 Sending Posts",
    "markdown_syntax": "📝 Markdown Syntax",
    "ai": "🤖 AI Features",

    "monetization": "Monetization",
    "prepare_for_monetization": "💰 Prepare to Earn",
    "premium": "💎 Premium Subscriptions",
    "ads": "📢 Ads",

    "email_settings": "📧 Email Settings",
    "list_settings": "Settings",
    "general_settings": "⚙️ General Settings",
    "analytics_settings": "・ 📊 Analytics",
    "domain_settings": "・ 🌐 Custom Domain",
    "widget_settings": "・ 🔧 Widget",
    "channel_settings": "📡 Sending Settings",
    "monetization_settings": "💰 Monetization Settings",
    "payout_settings": "・ 💸 Payout Settings",
    "payment_settings": "・ 💳 Payment Settings",
    "ads_settings": "・ 📢 Ads Settings",

    "other_topics": "📚 Other Topics",
    "migration": "🔄 Migration",
    "troubleshooting": "🛠️ Troubleshooting",

    "tools": "🛠️ Tools",
    "obsidian_plugin": "🔌 Obsidian Plugin",
    "quail_cli": "⌨️ Quaily CLI",

    "markdown_source": "Markdown Source",
    "markdown_source_hint": "Use the raw markdown for copy, automation, and AI agents.",
    "view_markdown": "View Markdown",
    "copy_markdown": "Copy Markdown",
    "copied_markdown": "Copied",
    "copy_markdown_failed": "Copy failed"
  },
  "zh": {
    "home": "🏠 首页",
    "tutorial": "📚 教程",
    "writer_manual": "✍️ 作者手册",
    "developer_docs": "👨‍💻 开发者文档",

    "compose_and_deliver": "撰写与推送",
    "compose_online": "📝 在线撰写",
    "delivery": "📤 推送文章",
    "markdown_syntax": "📝 Markdown 语法",
    "ai": "🤖 AI 功能",

    "monetization": "收益化",
    "prepare_for_monetization": "💰 赚取收益",
    "premium": "💎 收费订阅",
    "ads": "📢 广告",

    "email_settings": "📧 邮件设置",
    "list_settings": "设置",
    "general_settings": "⚙️ 通用设置",
    "analytics_settings": "・ 📊 统计分析",
    "domain_settings": "・ 🌐 自定义域名",
    "widget_settings": "・ 🔧 Widget",
    "channel_settings": "📡 推送设置",
    "monetization_settings": "💰 收益设置",
    "payout_settings": "・ 💸 收款设置",
    "payment_settings": "・ 💳 付款设置",
    "ads_settings": "・ 📢 广告设置",

    "other_topics": "其他主题",
    "migration": "🔄 迁移",
    "troubleshooting": "🛠️ 故障排除",

    "tools": "工具",
    "obsidian_plugin": "🔌 Obsidian 插件",
    "quail_cli": "⌨️ Quaily 命令行工具",

    "markdown_source": "Markdown 原文",
    "markdown_source_hint": "可直接读取原始 markdown，适合复制、自动化和 AI agent。",
    "view_markdown": "查看 Markdown",
    "copy_markdown": "复制 Markdown",
    "copied_markdown": "已复制",
    "copy_markdown_failed": "复制失败"
  },
  "ja": {
    "home": "🏠 ホーム",
    "tutorial": "📚 チュートリアル",
    "writer_manual": "✍️ ライターガイド",
    "developer_docs": "👨‍💻 開発者向け",

    "compose_and_deliver": "執筆と配信",
    "compose_online": "📝 オンライン執筆",
    "delivery": "📤 記事配信",
    "markdown_syntax": "📝 Markdown 構文",
    "ai": "🤖 AI 機能",

    "monetization": "収益化",
    "prepare_for_monetization": "💰 収益化の準備",
    "premium": "💎 有料サブスクリプション",
    "ads": "📢 広告",

    "email_settings": "📧 メール設定",
    "list_settings": "設定",
    "general_settings": "⚙️ 一般設定",
    "analytics_settings": "・ 📊 分析",
    "domain_settings": "・ 🌐 独自ドメイン",
    "widget_settings": "・ 🔧 ウィジェット",
    "channel_settings": "📡 配信設定",
    "monetization_settings": "💰 収益化設定",
    "payout_settings": "・ 💸 出金設定",
    "payment_settings": "・ 💳 決済設定",
    "ads_settings": "・ 📢 広告設定",

    "other_topics": "その他",
    "migration": "🔄 データ移行",
    "troubleshooting": "🛠️ トラブルシューティング",

    "tools": "ツール",
    "obsidian_plugin": "🔌 Obsidian プラグイン",
    "quail_cli": "⌨️ Quaily CLI",

    "markdown_source": "Markdown ソース",
    "markdown_source_hint": "生の markdown をそのまま参照でき、コピー、自動化、AI agent に使えます。",
    "view_markdown": "Markdown を表示",
    "copy_markdown": "Markdown をコピー",
    "copied_markdown": "コピーしました",
    "copy_markdown_failed": "コピー失敗"
  },
}

export const t = (lang, key: string) => {
  if (lang === '') lang = 'en'
  return messages[lang][key] || messages["en"][key];
}
