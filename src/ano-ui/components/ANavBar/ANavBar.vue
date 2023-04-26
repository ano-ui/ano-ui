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
  <div ref="navBarRef" class="a-nav-bar-base" :class="[className, cc]" :style="[zIndexStyle, navBarStyle, cs]">
    <div class="a-nav-bar-content-base" :style="navBarContentStyle">
      <slot v-if="$slots.default" />
      <template v-else>
        <div v-if="hasLeft" class="a-nav-bar-left" :class="clickableClassName" :hover-class="clickable ? 'a-nav-bar-clickable-hover' : ''" @click="clickLeftHandler">
          <slot v-if="$slots.left" name="left" />
          <template v-else>
            <div v-if="leftArrow" class="i-tabler-chevron-left mr-1 a-nav-bar-icon" />
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
