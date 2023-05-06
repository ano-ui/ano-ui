<script lang="ts" setup>
import ATransition from '../ATransition/ATransition.vue'
import { useBadge } from './use-badge'
import { badgeProps } from './badge'

const props = defineProps(badgeProps)

const { className, visible, content, offsetStyle, dotStyle } = useBadge(props)
</script>

<template>
  <div class="relative inline-block text-xs">
    <slot />
    <ATransition
      :style="[offsetStyle, dotStyle, cs]" :class="[className, cc]" class="a-badge-sup" :show="visible"
      name="fade" :duration="300"
    >
      <slot name="value">
        <template v-if="!dot">
          {{ content }}
        </template>
      </slot>
      <div v-if="processing" class="a-badge-wave" />
    </ATransition>
  </div>
</template>

<style scoped>
.a-badge-sup {
  --at-apply: 'absolute inline-block box-border rounded-full text-white left-full z-10 bg-context whitespace-nowrap'
}

.a-badge-s-dot {
  --at-apply: 'w-2 h-2'
}

.a-badge-s-default {
  --at-apply: 'h-36rpx px-2'
}

.a-badge-wave {
  --at-apply: 'z-1 absolute inset-0 rounded-inherit'
}

@keyframes badge-wave-spread {
  from {
    --at-apply: 'opacity-60'
    box-shadow: 0 0 1rpx 0 rgba(var(--ano-c-context), var(--un-bg-opacity))
  }

  to {
    --at-apply: 'opacity-0'
    box-shadow: 0 0 1rpx 9rpx rgba(var(--ano-c-context), var(--un-bg-opacity))
  }
}

.a-badge-wave {
  --at-apply: 'z-1 duration-200 delay-100'
  animation-iteration-count: infinite
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1)
  animation-name: badge-wave-spread
}
</style>
