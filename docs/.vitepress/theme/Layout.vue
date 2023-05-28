<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { computed, ref, watch } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'

const { Layout } = DefaultTheme
const route = useRoute()
const router = useRouter()
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
  // iframe 通信发送深色模式
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
      router.go(`/components/${path}.html`)
  }
})
</script>

<template>
  <Layout />
  <div v-if="isComponentPage" class="fixed bottom-0 top-80px flex z-100 right-0 flex rounded-xl">
    <div
      class="rounded-full absolute cursor-pointer bg-white w-8 dark:bg-black flex justify-center items-center h-8 shadow -left-6 top-0"
      @click="showPreview = !showPreview"
    >
      <div class="i-tabler-device-mobile" />
    </div>
    <iframe class="border-none transition-all h-675px shadow rounded-xl" :class="[showPreview ? 'w-345px' : 'w-0']" :src="iframeUrl" />
  </div>
</template>
