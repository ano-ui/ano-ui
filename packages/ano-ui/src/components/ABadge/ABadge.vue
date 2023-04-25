<script lang="ts" setup>
import ATransition from '../ATransition/ATransition.vue'
import { useBadge } from './use-badge'
import { badgeProps } from './badge'

const props = defineProps(badgeProps)

const { className, visible, content, offsetStyle, dotStyle } = useBadge(props)
</script>

<template>
  <div class="inline-block relative text-xs">
    <slot />
    <ATransition
      :style="[offsetStyle, dotStyle]" :class="[className]" class="a-badge-sup" :show="visible" name="fade"
      :duration="300"
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

<style>
@keyframes badge-wave-spread {
  from {
    box-shadow: 0 0 0.5px 0px rgba(var(--ano-c-context),var(--un-bg-opacity));
    opacity: 0.6;
  }

  to {
    box-shadow: 0 0 0.5px 4.5px rgba(var(--ano-c-context),var(--un-bg-opacity));
    opacity: 0;
  }
}
.a-badge-wave {
  z-index: 1;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  animation-name: badge-wave-spread;
}
</style>
