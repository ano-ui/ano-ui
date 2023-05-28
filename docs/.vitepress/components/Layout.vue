<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { computed, ref, watch } from 'vue'
import { useData, useRouter } from 'vitepress'

const { Layout } = DefaultTheme
const { route, go } = useRouter()
const { isDark } = useData()
const isComponentPage = computed(() => route.path.startsWith('/components'))

const iframeUrl = computed(() => {
  const path = route.path.replace('/components', '').split('.')[0]

  return import.meta.env.DEV
    ? `http://localhost:5173/ui/#/pages${path}`
    : `/ui/#/pages${path}`
})

const showPreview = ref(false)

watch(isDark, (val) => {
  const iframe = document.querySelector('iframe')
  if (iframe) {
    iframe.contentWindow?.postMessage(
      {
        type: 'theme',
        data: val ? 'dark' : 'light',
      },
      '*',
    )
  }
})

window.addEventListener('message', (e) => {
  if (e.data.type === 'route') {
    const path = e.data.data.split('/').slice(1).join('/')
    if (path !== 'index')
      go(`/components/${path}.html`)
  }
})
</script>

<template>
  <Layout />
  <div
    v-if="isComponentPage" class="fixed bottom-0 top-80px flex right-0 flex transition-all rounded-l-xl"
    :class="[showPreview ? 'w-345px' : 'w-0']"
  >
    <div
      class="rounded-full absolute cursor-pointer shadow dark:bg-black flex items-center h-8 w-10 justify-start pl-1 -left-6 bg-gray-1 top-337px"
      @click="showPreview = !showPreview"
    >
      <div :class="[showPreview ? 'i-tabler-chevron-right' : 'i-tabler-chevron-left']" />
    </div>
    <iframe class="border-none absolute top-0 h-675px w-345px shadow rounded-xl" :src="iframeUrl" />
  </div>
</template>
