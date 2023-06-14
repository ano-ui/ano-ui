<script lang="ts" setup>
const gitHubUrl = 'https://github.com/ano-ui/ano-ui'
function open() {
  if (window && window?.open) {
    window.open(gitHubUrl)
  }
  else {
    uni.setClipboardData({
      data: gitHubUrl,
      success: () => {
        uni.showToast({
          icon: 'success',
          title: '已复制到剪贴板',
        })
      },
    })
  }
}
</script>

<template>
  <AButton type="primary" icon="i-tabler-brand-github" variant="text" cc="color-inherit" @click="open" />
</template>
