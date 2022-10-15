<script setup lang="ts">
import { computed, ref } from 'vue'
import { useBaseProps } from '../composables/useLayer'
import { InputTypeProp, defaultFalseProp, disabledProp, iconProp, sizeProp } from '../composables/useProps'

const props = defineProps({
  ...useBaseProps(),
  // custom class for input/textarea
  ccc: String,
  type: InputTypeProp,
  size: sizeProp,
  disabled: disabledProp,
  focus: defaultFalseProp,
  icon: iconProp,
  suffixIcon: iconProp,
  showClear: defaultFalseProp,
  placeholder: String,
  modelValue: String,
  maxlength: {
    type: Number,
    default: -1,
  },
  showWordLimit: defaultFalseProp,
})

const emits = defineEmits(['focus', 'blur', 'confirm', 'input', 'update:modelValue', 'clear', 'search', 'click'])

const _value = ref(props.modelValue)

const isClick = ref(false)
const _focus = computed(() => (props.focus && !props.disabled) || isClick.value)

const clickHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (!props.disabled)
    isClick.value = true
}

const blurHandler = () => {
  isClick.value = false
  emits('blur')
}

const inputHandler = (e: Event) => {
  const _e = e as CustomEvent
  _value.value = _e.detail.value
  emits('input', _e.detail.value)
  emits('update:modelValue', _e.detail.value)
}

const clearHandler = () => {
  _value.value = ''
  emits('input', '')
  emits('update:modelValue', '')
}

const showPasswordText = ref(false)
</script>

<template>
  <div
    class="a-input-base w-full text-darkText"
    :class="[`a-${color}`, `a-input-${size}`, { 'a-disabled': disabled }, isClick ? 'b-context' : 'border-placeholder', cc]"
  >
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot name="prefix" />
    <input
      v-if="type !== 'textarea'" class="a-input-content-base" :type="type !== 'password' ? type : 'text'"
      :class="[ccc]" :value="_value" :placeholder="placeholder" :maxlength="maxlength" :focus="_focus"
      :disabled="disabled" :password="type === 'password' ? !showPasswordText : 'false'"
      placeholder-style="color:#DCDCDC" @click="clickHandler" @blur="blurHandler" @input="inputHandler"
    >
    <textarea
      v-else class="a-input-content-base h-12" :class="[ccc]" :value="_value" :placeholder="placeholder"
      :maxlength="maxlength" :focus="_focus" :disabled="disabled" placeholder-style="color:#DCDCDC"
      @click="clickHandler" @blur="blurHandler" @input="inputHandler"
    />
    <div v-if="showClear && _value" class="i-carbon-close-filled" @click="clearHandler" />
    <div
      v-if="type === 'password'" class="a-transition"
      :class="showPasswordText ? 'i-carbon-view-filled' : 'i-carbon-view-off-filled'"
      @click.stop="showPasswordText = !showPasswordText"
    />
    <div v-if="suffixIcon" :class="suffixIcon" />
    <slot name="suffix" />
    <div v-if="showWordLimit && _value" class="a-input-word-limit text-caption">
      {{ _value.length }}/{{ maxlength }}
    </div>
  </div>
</template>

