<script setup lang="ts">
import type { PropType } from 'vue'
import { ccProp, disabledProp, iconProp, sizeProp } from '../composables/useProps'

type InputType = 'text' | 'number' | 'digit' | 'password' | 'textarea'

defineProps({
  cc: ccProp,
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
  size: sizeProp,
  disabled: disabledProp,
  icon: iconProp,
  block: Boolean,
  placeholder: String,
})

const emits = defineEmits(['click'])

const handleClick = (e: MouseEvent) => {
  emits('click', e)
}
</script>

<template>
  <div class="a-input-base w-full bg-softBd focus:bg-red" :class="[`a-input-${size}`]">
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <textarea v-if="type === 'textarea'" id="" class="flex-1" name="" cols="30" rows="10" />
    <input v-else class="flex-1" :type="type" :class="[`a-${type}`, { 'a-disabled': disabled }, cc]" :placeholder="placeholder">
  </div>
</template>

