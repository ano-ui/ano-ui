<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData, useRouter } from 'vitepress'

const { Layout } = DefaultTheme
const { route, go } = useRouter()
const { isDark } = useData()
const isComponentPage = computed(() => route.path.startsWith('/components'))
const show = ref(false)

const iframeUrl = computed(() => {
  const path = route.path.replace('/components', '').split('.')[0]

  return import.meta.env.DEV
    ? `http://localhost:5173/ui/#/pages${path}`
    : `/ui/#/pages${path}`
})

function resizeHandler() {
  if (window.innerWidth < 1280)
    show.value = false
}

onMounted(() => {
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
  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})

watch(show, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})

function togglePreview() {
  show.value = !show.value
}
</script>

<template>
  <template v-if="isComponentPage">
    <button
      class="fixed right-0 xl:w-0 bottom-25 translate-x-40% op-40 cursor-pointer hover:op-100 hover:translate-x-0 transition-all z-9999"
      @click="togglePreview"
    >
      <div class="text-sm bg-[var(--vp-button-brand-bg)] color-[var(--vp-button-brand-text)] rounded-full p2">
        <svg v-if="!show" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clip-rule="evenodd" /></svg>
      </div>
    </button>
  </template>
  <Layout class="of-x-hidden" :class="[{ 'xl:[&>.VPContent]:!pr-100': isComponentPage }, show ? 'of-hidden' : '']" />
  <template v-if="isComponentPage">
    <div
      class="fixed right-0 bottom-0 top-80px flex flex rounded-l-xl xl:w-375px w-0 xl:right-10 xl:transition-all"
      :class="show ? ' w-100vw h-100vh top-0! z-999 left-0' : ''"
    >
      <iframe
        class="border-none rounded-xl block w-375px h-675px" :src="iframeUrl"
        :class="show ? 'w-screen! h-screen! rounded-0!' : ''"
      />
    </div>
  </template>
</template>
