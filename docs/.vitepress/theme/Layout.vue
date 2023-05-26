<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = DefaultTheme

const route = useRoute()

const isComponentPage = computed(() => route.path.startsWith('/components'))

const iframeUrl = computed(() => {
  const path = route.path.replace('/components', '').split('.')[0]

  return import.meta.env.DEV ? `http://localhost:5173/ui/#/pages${path}` : `https://ano-ui.vercel.app/ui/#/pages${path}`
})
</script>

<template>
  <Layout :class="[{ 'xl:[&>.VPContent]:!pr-100': isComponentPage }]" />
  <div
    v-if="isComponentPage"
    class="fixed bottom-0 overflow-hidden rounded-xl right-10 w-0 top-80px max-h-675px xl:w-375px"
  >
    <iframe class="h-full border-none w-full" :src="iframeUrl" />
  </div>
</template>
