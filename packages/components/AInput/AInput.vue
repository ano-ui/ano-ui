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
  placeholder: String,
  modelValue: String,
})

const emits = defineEmits(['focus', 'blur', 'confirm', 'input', 'update:modelValue', 'clear', 'search', 'click'])

const _value = ref(props.modelValue)

const isClick = ref(false)
const _focus = computed(() => (props.focus && !props.disabled) || isClick.value)

const clickHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (props.disabled)
    return
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

const showPasswordText = ref(props.type !== 'password')
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
      :value="_value" :placeholder="placeholder" :focus="_focus" placeholder-style="color:#DCDCDC" @click="clickHandler"
      @blur="blurHandler" @input="inputHandler"
    />
    <input
      v-else class="a-input-content-base" :type="showPasswordText ? '' : type"
      :class="[{ 'a-disabled': disabled }, ccc]" :value="_value" :placeholder="placeholder" :focus="_focus"
      placeholder-style="color:#DCDCDC" @click="clickHandler" @blur="blurHandler" @input="inputHandler"
    >
    <div
      v-if="type === 'password'" class="a-transition"
      :class="showPasswordText ? 'i-carbon-view' : 'i-carbon-view-off'"
      @click.stop="showPasswordText = !showPasswordText"
    />
  </div>
</template>

