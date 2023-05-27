<script setup lang='ts'>
defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
  },
  backArrow: {
    type: Boolean,
    default: true,
  },
})

const curPage = getCurrentPages().at(-1) as any
const titleText = curPage.$page?.meta?.navigationBar?.titleText || '标题'

function onClickLeft() {
  const pages = getCurrentPages()
  if (pages.length > 1) {
    uni.navigateBack()
  }
  else {
    uni.redirectTo({
      url: '/',
    })
  }
}
</script>

<template>
  <APage cc="font-sans pb-10 fixed inset-0 overflow-auto">
    <ANavBar
      v-if="show" :title="title ?? titleText" :left-arrow="backArrow" placeholder fixed z-index="999"
      @click-left="onClickLeft"
    />
    <slot />
  </APage>
</template>
