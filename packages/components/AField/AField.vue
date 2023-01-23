<script setup lang="ts">
import { fieldEmits, fieldProps } from './field'
import { useField } from './use-field'

const props = defineProps(fieldProps)
const emit = defineEmits(fieldEmits)

const {
  disabled, modelValue, placeholderText, isClick, showPasswordText, focus,
  focusHandler, clickHandler, blurHandler, inputHandler, clearHandler,
} = useField(props, emit)
</script>

<template>
  <div
    class="a-field-base a-field-border a-bg-2 a-color-base"
    :class="[`a-field-${size}`, { 'a-disabled': disabled }, isClick ? 'border-context' : '', cc]"
    :style="cs"
  >
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot name="prefix" />
    <input
      v-if="type !== 'textarea'" class="a-field-content-base" :type="type !== 'password' ? type : 'text'"
      :class="[ccc]" :style="ccs" :value="modelValue" :placeholder="placeholderText" :maxlength="maxlength" :focus="focus"
      :disabled="disabled" :password="type === 'password' ? !showPasswordText : false"
      placeholder-style="color: #d1d5db" @click="clickHandler" @blur="blurHandler" @input="inputHandler" @focus="focusHandler"
    >
    <textarea
      v-else class="a-field-content-base h-12" :class="[ccc]" :style="ccs" :value="modelValue"
      :placeholder="placeholderText" :maxlength="maxlength" :focus="focus" :disabled="disabled"
      placeholder-style="color: #d1d5db" @click="clickHandler" @blur="blurHandler" @input="inputHandler" @focus="focusHandler"
    />
    <div v-if="showClear && modelValue" class="i-carbon-close-filled" @click="clearHandler" />
    <div
      v-if="type === 'password'" :class="showPasswordText ? 'i-carbon-view-filled' : 'i-carbon-view-off-filled'"
      @click.stop="showPasswordText = !showPasswordText"
    />
    <div v-if="suffixIcon" :class="suffixIcon" />
    <slot name="suffix" />
    <div v-if="showWordLimit && modelValue" class="a-field-word-limit text-caption">
      {{ modelValue.length }}/{{ maxlength }}
    </div>
  </div>
</template>
