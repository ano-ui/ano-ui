<script setup lang='ts'>
import { switchEmits, switchProps } from './switch'
import { useSwitch } from './use-switch'

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const { disabled, checked, dotTranslateClasses, toggle } = useSwitch(props, emit)
</script>

<template>
  <div
    class="relative rounded-full bg-context text-white transition-all dark:bg-op80 dark:text-op80"
    :class="[`a-switch-${size}`, `a-text-${size}`, checked ? `a-${type}` : 'a-gray3', { 'op-50': disabled }, cc]"
    :style="cs" @click="toggle"
  >
    <div
      class="absolute top-0.5 rounded-full bg-white text-context transition-all"
      :class="[`a-switch-dot-${size}`, checked ? dotTranslateClasses : 'left-0.5']"
    >
      <template v-if="checked">
        <div
          class="absolute inset-0 flex animate-zoom-in animate-duration-200 items-center justify-center text-context"
          :class="[`a-${type}`]"
        >
          <div v-if="loading" class="i-tabler-loader animate-spin" />
          <template v-else-if="showIcon">
            <div v-if="!$slots.icon" class="i-tabler-check" :class="[icon]" />
            <slot v-else name="icon" />
          </template>
        </div>
      </template>
    </div>

    <template v-if="checked">
      <div
        class="absolute left-0.5 right-auto top-0.5 flex animate-zoom-in animate-duration-200 items-center justify-center a-transition !leading-none"
        :class="[`a-switch-dot-${size}`]"
      >
        <template v-if="activeLabel">
          {{ activeLabel }}
        </template>
        <slot v-else name="active" />
      </div>
    </template>
    <template v-else>
      <div
        class="absolute right-0.5 top-0.5 flex animate-zoom-in animate-duration-200 items-center justify-center a-transition !leading-none"
        :class="[`a-switch-dot-${size}`]"
      >
        <template v-if="inactiveLabel">
          {{ inactiveLabel }}
        </template>
        <slot v-else name="inactive" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.a-switch-mini {
  --at-apply: 'min-w8 h5'
}

.a-switch-small {
  --at-apply: 'min-w10 h6'
}

.a-switch-normal {
  --at-apply: 'min-w12 h7'
}

.a-switch-large {
  --at-apply: 'min-w14 h8'
}

.a-switch-dot-mini {
  --at-apply: 'min-w4 h4'
}

.a-switch-dot-small {
  --at-apply: 'min-w5 h5'
}

.a-switch-dot-normal {
  --at-apply: 'min-w6 h6'
}

.a-switch-dot-large {
  --at-apply: 'min-w7 h7'
}
</style>
