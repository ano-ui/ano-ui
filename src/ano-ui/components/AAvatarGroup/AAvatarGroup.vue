<script setup lang="ts">
import AAvatar from '../AAvatar/AAvatar.vue'
import { avatarGroupEmits, avatarGroupProps } from './avatar-group'
import { useAvatarGroup } from './use-avatar-group'

const props = defineProps(avatarGroupProps)
const emit = defineEmits(avatarGroupEmits)

const { className, clickHandler, spliceOptions, reset, lt } = useAvatarGroup(props, emit)
</script>

<template>
  <div class="flex" :class="[className, cc]" :style="[{ '--a-gap': '-24rpx' }, cs]" @click="clickHandler">
    <template v-for="(option, index) in spliceOptions" :key="index">
      <slot name="avatar" :option="option">
        <AAvatar rounded-full :src="option.src" />
      </slot>
    </template>
    <slot v-if="lt" name="reset" :reset="reset" :options="options">
      <AAvatar z-1 rounded-full bg-primary text-white>
        +{{ reset }}
      </AAvatar>
    </slot>
  </div>
</template>
