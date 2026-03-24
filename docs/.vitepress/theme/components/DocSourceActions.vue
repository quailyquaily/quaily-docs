<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { t } from '../../../lang/messages'

const data = useData()
const route = useRoute()
const { lang, theme } = data
const copyState = ref<'idle' | 'done' | 'error'>('idle')

let resetTimer: ReturnType<typeof setTimeout> | null = null

const currentLang = computed(() => {
	if (lang.value.startsWith('zh')) {
		return 'zh'
	}

	if (lang.value.startsWith('ja')) {
		return 'ja'
	}

	return 'en'
})

const normalizePathname = (value: string) => {
	if (!value) {
		return ''
	}

	try {
		return new URL(value).pathname.replace(/\/+$/, '')
	} catch {
		return value.replace(/\/+$/, '')
	}
}

const markdownRouteData = computed(() => {
	const pageData = theme.value.llmstxt?.pageData || []
	const currentPath = normalizePathname(route.path)

	return pageData.find((item) => normalizePathname(item.url) === currentPath)
})

const markdownSourceUrl = computed(() => {
	const llmUrl = markdownRouteData.value?.llmUrl

	if (!llmUrl) {
		return ''
	}

	try {
		return withBase(new URL(llmUrl).pathname)
	} catch {
		return withBase(llmUrl)
	}
})

const copyMarkdown = async () => {
	if (!markdownSourceUrl.value || typeof navigator === 'undefined' || !navigator.clipboard) {
		copyState.value = 'error'
		return
	}

	try {
		const response = await fetch(markdownSourceUrl.value)

		if (!response.ok) {
			throw new Error(`Failed to fetch markdown source: ${response.status}`)
		}

		const text = await response.text()
		await navigator.clipboard.writeText(text)
		copyState.value = 'done'
	} catch {
		copyState.value = 'error'
	}

	if (resetTimer) {
		clearTimeout(resetTimer)
	}

	resetTimer = setTimeout(() => {
		copyState.value = 'idle'
	}, 2200)
}

const copyLabel = computed(() => {
	if (copyState.value === 'done') {
		return t(currentLang.value, 'copied_markdown')
	}

	if (copyState.value === 'error') {
		return t(currentLang.value, 'copy_markdown_failed')
	}

	return t(currentLang.value, 'copy_markdown')
})
</script>

<template>
	<div v-if="markdownSourceUrl" class="doc-source-actions">
		<div class="doc-source-copy">
			<p class="doc-source-title">{{ t(currentLang, 'markdown_source') }}</p>
			<p class="doc-source-hint">{{ t(currentLang, 'markdown_source_hint') }}</p>
		</div>
		<div class="doc-source-controls">
			<a class="doc-source-link" :href="markdownSourceUrl" target="_blank" rel="noreferrer">
				{{ t(currentLang, 'view_markdown') }}
			</a>
			<button class="doc-source-button" type="button" @click="copyMarkdown">
				{{ copyLabel }}
			</button>
		</div>
	</div>
</template>
