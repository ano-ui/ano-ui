<script setup lang='ts'>
import { switchEmits, switchProps } from './switch'
import { useSwitch } from './use-switch'

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const { disabled, checked, toggle } = useSwitch(props, emit)
</script>

<template>
  <div
    class="relative rounded-full bg-context text-white a-transition dark:bg-op80 dark:text-op80"
    :class="[`a-switch-${size}`, checked ? `a-${type}` : 'a-gray3', { '!a-gray2 dark:!a-gray4': disabled }, cc]" :style="cs"
    @click="toggle"
  >
    <div
      class="absolute inset-0.5 right-auto rounded-full bg-white text-context a-transition"
      :class="[`a-switch-dot-${size}`, { 'left-50%': checked }, { 'a-gray3': disabled }]"
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
        class="absolute inset-0.5 right-auto flex animate-zoom-in animate-duration-200 items-center justify-center a-transition !leading-none"
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
        class="absolute inset-0.5 left-50% right-auto flex animate-zoom-in animate-duration-200 items-center justify-center a-transition !leading-none"
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
  --at-apply: 'min-w9 h5 text-xs'
}

.a-switch-small {
  --at-apply: 'min-w11 h6 text-sm'
}

.a-switch-normal {
  --at-apply: 'min-w13 h7 text-base'
}

.a-switch-large {
  --at-apply: 'min-w15 h8 text-lg'
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
