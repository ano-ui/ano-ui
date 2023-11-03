<script setup lang="ts">
import { avatarEmits, avatarProps } from './avatar'
import { useAvatar } from './use-avatar'

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)

const { classes, clickHandler, mode } = useAvatar(props, emit)
</script>

<template>
  <div
    class="items-center justify-center box-border inline-flex rounded a-avatar aspect-square overflow-hidden"
    :class="[classes, `a-text-${size}`, customClass]" :style="[customStyle]" @click="clickHandler"
  >
    <image v-if="src" :mode="mode" class="w-full h-full" :src="src" />
    <slot />
  </div>
</template>

<style scoped></style>
