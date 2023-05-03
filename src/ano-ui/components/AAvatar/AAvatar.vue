<script setup lang="ts">
import { avatarEmits, avatarProps } from './avatar'
import { useAvatar } from './use-avatar'

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)

const { classes, clickHandler, mode } = useAvatar(props, emit)
</script>

<template>
  <div
    class="a-avatar box-border aspect-square inline-flex items-center justify-center overflow-hidden rounded"
    :class="[classes, `a-text-${size}`, cc]" :style="[cs]" @click="clickHandler"
  >
    <image v-if="src" :mode="mode" class="h-full w-full" :src="src" />
    <slot />
  </div>
</template>

<style scoped></style>
