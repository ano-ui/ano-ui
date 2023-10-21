<script setup lang='ts'>
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const { disabled, size, checked, toggle } = useRadio(props, emit)
</script>

<template>
  <div class="flex items-center" :class="[`a-text-${size}`, customClass]" :style="customStyle">
    <div
      class="relative border border-solid inline-block transition-all rounded-full border-gray3 duration-200 dark:border-op80"
      :class="[`a-radio-radio-${size}`, { 'op-50': disabled }, ccc]"
      :style="ccs" @click="toggle"
    >
      <template v-if="checked">
        <div class="absolute inset-0 flex animate-duration-200 items-center justify-center animate-zoom-in" :class="[`a-${type}`]">
          <div v-if="!$slots.icon" class="rounded-full bg-context" :class="[`a-radio-radio-dot-${size}`]" />
          <slot v-else name="icon" />
        </div>
      </template>
    </div>
    <div v-if="$slots.default || label" class="ml2" :class="{ 'a-radio-disabled-label': disabled }">
      <template v-if="label">
        {{ label }}
      </template>
      <slot v-else />
    </div>
  </div>
</template>

<style scoped>
.a-radio-disabled-label {
  --at-apply: 'text-[#C8C9CC] dark:text-[#4D4D4D]'
}

.a-radio-radio-mini {
  --at-apply: 'h5 w5'
}

.a-radio-radio-small {
  --at-apply: 'h6 w6'
}

.a-radio-radio-normal {
  --at-apply: 'h7 w7'
}

.a-radio-radio-large {
  --at-apply: 'h8 w8'
}

.a-radio-radio-dot-mini {
  --at-apply: 'h2 w2'
}

.a-radio-radio-dot-small {
  --at-apply: 'h3 w3'
}

.a-radio-radio-dot-normal {
  --at-apply: 'h4 w4'
}

.a-radio-radio-dot-large {
  --at-apply: 'h5 w5'
}
</style>
