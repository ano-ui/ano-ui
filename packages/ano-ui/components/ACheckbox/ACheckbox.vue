<script setup lang='ts'>
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './use-checkbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const {
  checked,
  disabled,
  size,
  iconClickHandler,
  labelClickHandler,
} = useCheckbox(props, emit)
</script>

<template>
  <div class="flex items-center space-x-2" :class="[`a-checkbox-${size}`, cc]" :style="cs">
    <div
      class="box-border relative inline-block border border-[#C8C9CC] rounded-sm border-solid bg-clip-padding a-transition"
      :class="[`a-checkbox-checkbox-${size}`, checked ? `a-${type} a-${variant}` : '', { 'op-50': disabled }, ccc]"
      :style="ccs" @click="iconClickHandler"
    >
      <div
        class="flex items-center justify-center absolute inset-0 animate-duration-200"
        :class="[checked ? 'animate-zoom-in text-white' : 'animate-zoom-out text-transparent']"
      >
        <slot name="icon" :checked="checked">
          <div :class=" icon ? icon : 'i-tabler-check'" />
        </slot>
      </div>
    </div>
    <div :class="{ 'text-[#C8C9CC] dark:text-[#4D4D4D]': disabled }" @click="labelClickHandler">
      <slot name="label">
        {{ label }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
.a-checkbox-mini {
  --at-apply: 'text-xs'
}

.a-checkbox-small {
  --at-apply: 'text-sm'
}

.a-checkbox-normal {
  --at-apply: 'text-base'
}

.a-checkbox-large {
  --at-apply: 'text-lg'
}

.a-checkbox-checkbox-base {
  --at-apply: 'relative inline-block box-border border border-solid border-[#C8C9CC] bg-clip-padding rounded-sm a-transition'
}

.a-checkbox-checkbox-icon {
  --at-apply: 'absolute inset-0 flex justify-center items-center'
}

.a-checkbox-checkbox-mini {
  --at-apply: 'h5 w5'
}

.a-checkbox-checkbox-small {
  --at-apply: 'h6 w6'
}

.a-checkbox-checkbox-normal {
  --at-apply: 'h7 w7'
}

.a-checkbox-checkbox-large {
  --at-apply: 'h8 w8'
}
</style>
