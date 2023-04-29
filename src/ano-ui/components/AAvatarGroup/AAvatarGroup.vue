<script setup lang="ts">
import AAvatar from '../AAvatar/AAvatar.vue'
import { avatarGroupEmits, avatarGroupProps } from './avatar-group'
import { useAvatarGroup } from './use-avatar-group'

const props = defineProps(avatarGroupProps)
const emit = defineEmits(avatarGroupEmits)

const { className, clickHandler, spliceOptions, reset, lt } = useAvatarGroup(props, emit)
</script>

<template>
  <div
    class="inline-flex [&_.a-avatar+.a-avatar]:-ml-3 [&_a-avatar+a-avatar>.a-avatar]:-ml-3 [&_view+view]:-ml-3"
    :class="[className, cc]" :style="[cs]" @click="clickHandler"
  >
    <template v-for="(option, index) of spliceOptions" :key="index">
      <slot name="avatar" :option="option">
        <AAvatar cc="rounded-full" :src="option.src" />
      </slot>
    </template>
    <slot v-if="lt" name="reset" :reset="reset" :options="options">
      <AAvatar cc="z-1 rounded-full bg-primary text-white">
        +{{ reset }}
      </AAvatar>
    </slot>
  </div>
</template>

<style scoped></style>
