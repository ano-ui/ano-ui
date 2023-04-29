<script setup lang='ts'>
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './use-checkbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const { checked, disabled, size, toggle } = useCheckbox(props, emit)
</script>

<template>
  <div class="flex items-center" :class="[`a-checkbox-${size}`, cc]" :style="cs">
    <div
      class="relative box-border inline-block border border-[#C8C9CC] rounded-sm border-solid bg-clip-padding a-transition"
      :class="[`a-checkbox-checkbox-${size}`, checked ? `a-${type} a-${variant}` : '', { 'a-checkbox-disabled': disabled }, ccc]"
      :style="ccs" @click="toggle"
    >
      <ATransition cc="['absolute inset-0']" :show="!!checked" name="fade" :duration="200" />
      <div
        class="absolute inset-0 flex animate-duration-200 items-center justify-center"
        :class="[checked ? 'animate-zoom-in text-white' : 'animate-zoom-out text-transparent']"
      >
        <slot name="icon" :checked="checked">
          <div class="i-tabler-check" :class="[icon]" />
        </slot>
      </div>
    </div>
    <slot name="label">
      <div class="ml2" :class="{ 'text-[#C8C9CC] dark:text-[#4D4D4D]': disabled }">
        {{ label }}
      </div>
    </slot>
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

.a-checkbox-disabled {
  --at-apply: 'bg-[#EBEDF0] border-[#C8C9CC] dark:bg-[#3A3A3C] text-[#C8C9CC] dark:text-[#4D4D4D]'
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
