<script setup>
import DefaultTheme from 'vitepress/theme'
import DocSourceActions from '../components/DocSourceActions.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <DocSourceActions />
    </template>
    <template #doc-after>
    </template>
  </Layout>
</template>
