<script setup lang="ts">
import { avatarEmits, avatarProps } from './avatar'
import { useAvatar } from './use-avatar'

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)

const { className, clickHandler, mode } = useAvatar(props, emit)
</script>

<template>
  <span class="a-avatar-base rounded not-first:ml-[var(--a-gap)]" :class="[className, cc]" :style="[cs]" @click="clickHandler">
    <image v-if="src" :mode="mode" class="a-avatar-image" :src="src" />
    <span class="a-avatar-text">
      <slot />
    </span>
  </span>
</template>

<style>
  .a-avatar-base {
    --at-apply: 'overflow-hidden flex justify-center items-center box-border';
  }
  .a-avatar-image {
    --at-apply: 'align-middle w-full h-full'
  }
</style>
