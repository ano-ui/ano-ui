<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, ref } from 'vue'
import { useBaseProps } from '../composables/useLayer'
import { defaultFalseProp, disabledProp, iconProp, sizeProp } from '../composables/useProps'

type InputType = 'text' | 'number' | 'digit' | 'password' | 'textarea'

const props = defineProps({
  ...useBaseProps(),
  // custom class for input/textarea
  ccc: String,
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
  size: sizeProp,
  disabled: disabledProp,
  focus: defaultFalseProp,
  icon: iconProp,
  placeholder: String,
  modelValue: String,
})

const emits = defineEmits(['focus', 'blur', 'confirm', 'input', 'update:modelValue', 'clear', 'search', 'keyboardheightchange', 'click'])

const _value = ref(props.modelValue)

const isClick = ref(false)
const _focus = computed(() => (props.focus && !props.disabled) || isClick.value)

const clickHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (props.disabled)
    return
  isClick.value = true
}

const blur = () => {
  isClick.value = false
  emits('blur')
}

const inputHandler = (e: Event) => {
  const _e = e as CustomEvent
  _value.value = _e.detail.value
  emits('input', _e.detail.value)
  emits('update:modelValue', _e.detail.value)

  return _e.detail.value
}
</script>

<template>
  <div
    class="a-input-base w-full text-darkText"
    :class="[`a-${color}`, `a-input-${size}`, isClick ? 'b-context' : 'border-placeholder', cc]" @click.stop=""
  >
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <textarea
      v-if="type === 'textarea'" class="a-input-content-base h-12" :class="[{ 'a-disabled': disabled }, ccc]"
      :value="_value" :placeholder="placeholder" :focus="_focus" placeholder-style="color:#DCDCDC"
      @click="clickHandler" @blur="blur" @input="inputHandler"
    />
    <input
      v-else class="a-input-content-base" :type="type" :class="[{ 'a-disabled': disabled }, ccc]"
      :value="_value" :placeholder="placeholder" :focus="_focus" placeholder-style="color:#DCDCDC"
      @click="clickHandler" @blur="blur" @input="inputHandler"
    >
  </div>
</template>

