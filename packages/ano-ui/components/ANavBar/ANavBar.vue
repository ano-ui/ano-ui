<script setup lang="ts">
import { navBarEmits, navBarProps } from './nav-bar'
import { useNavBar } from './use-nav-bar'

const props = defineProps(navBarProps)
const emit = defineEmits(navBarEmits)

const {
  navBarRef,

  className,
  clickableClassName,
  zIndexStyle,
  placeholderStyle,

  navBarStyle,
  navBarContentStyle,

  hasLeft,
  hasRight,

  clickLeftHandler,
  clickRightHandler,

} = useNavBar(props, emit)
</script>

<template>
  <div ref="navBarRef" class="a-nav-bar-base" :class="[className, customClass]" :style="[zIndexStyle, navBarStyle, customStyle]">
    <div class="a-nav-bar-content-base" :style="navBarContentStyle">
      <slot v-if="$slots.default" />
      <template v-else>
        <div v-if="hasLeft" class="a-nav-bar-left" :class="clickableClassName" :hover-class="clickable ? 'a-nav-bar-clickable-hover' : ''" @click="clickLeftHandler">
          <slot v-if="$slots.left" name="left" />
          <template v-else>
            <div v-if="leftArrow" class="mr-1 a-nav-bar-icon i-tabler-chevron-left" />
            <span v-if="leftText" class="a-nav-bar-text">{{ leftText }}</span>
          </template>
        </div>
        <div class="a-nav-bar-title">
          <slot v-if="$slots.title" name="title" />
          <template v-else>
            {{ title }}
          </template>
        </div>
        <div v-if="hasRight" class="a-nav-bar-right" :class="clickableClassName" :hover-class="clickable ? 'a-nav-bar-clickable-hover' : ''" @click="clickRightHandler">
          <slot v-if="$slots.right" name="right" />
          <span v-else class="a-nav-bar-text">{{ rightText }}</span>
        </div>
      </template>
    </div>
  </div>
  <div v-if="placeholder" :style="placeholderStyle" />
</template>

<style scoped>
.a-nav-bar-base {
  --at-apply: 'relative text-base select-none a-bg-2'
}

.a-nav-bar-fixed {
  --at-apply: 'fixed top-0 left-0 w-full'
}

.a-nav-bar-border {
  --at-apply: 'relative text-base select-none a-bg-2'
}

.a-nav-bar-clickable-hover {
  --at-apply: 'op60'
}

.a-nav-bar-clickable-hover-h5 {
  --at-apply: 'active:op60'
}

.a-nav-bar-content-base {
  --at-apply: 'relative flex items-center'
}

.a-nav-bar-left {
  --at-apply: 'absolute bottom-0 left-0 top-0 flex items-center px-2'
}

.a-nav-bar-title {
  --at-apply: 'line-clamp-1 m-auto max-w-60% text-base text-lg font-bold a-bg-2'
}

.a-nav-bar-right {
  --at-apply: 'absolute bottom-0 right-0 top-0 flex items-center px-2'
}

.a-nav-bar-text {
  --at-apply: 'color-blue'
}

.a-nav-bar-icon {
  --at-apply: 'a-nav-bar-text'
}
</style>
