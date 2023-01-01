<script setup lang="ts">
import { inputEmits, inputProps } from './input'
import { useInput } from './use-input'

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const { disabled, modelValue, isClick, showPasswordText, focus, focusHandler, clickHandler, blurHandler, inputHandler, clearHandler } = useInput(props, emit)
</script>

<template>
  <div
    class="a-input-base a-input-border a-bg-base-second w-full a-color-base"
    :class="[`a-${color}`, `a-input-${size}`, { 'a-disabled': disabled }, isClick ? 'border-context' : '', cc]"
    :style="cs"
  >
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot name="prefix" />
    <input
      v-if="type !== 'textarea'" class="a-input-content-base" :type="type !== 'password' ? type : 'text'"
      :class="[ccc]" :style="ccs" :value="modelValue" :placeholder="placeholder" :maxlength="maxlength" :focus="focus"
      :disabled="disabled" :password="type === 'password' ? !showPasswordText : false"
      placeholder-style="color: #d1d5db" @click="clickHandler" @blur="blurHandler" @input="inputHandler" @focus="focusHandler"
    >
    <textarea
      v-else class="a-input-content-base h-12" :class="[ccc]" :style="ccs" :value="modelValue"
      :placeholder="placeholder" :maxlength="maxlength" :focus="focus" :disabled="disabled"
      placeholder-style="color: #d1d5db" @click="clickHandler" @blur="blurHandler" @input="inputHandler" @focus="focusHandler"
    />
    <div v-if="showClear && modelValue" class="i-carbon-close-filled" @click="clearHandler" />
    <div
      v-if="type === 'password'" :class="showPasswordText ? 'i-carbon-view-filled' : 'i-carbon-view-off-filled'"
      @click.stop="showPasswordText = !showPasswordText"
    />
    <div v-if="suffixIcon" :class="suffixIcon" />
    <slot name="suffix" />
    <div v-if="showWordLimit && modelValue" class="a-input-word-limit text-caption">
      {{ modelValue.length }}/{{ maxlength }}
    </div>
  </div>
</template>
