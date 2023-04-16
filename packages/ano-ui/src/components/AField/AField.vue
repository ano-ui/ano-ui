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
    class="a-cell-base a-field-base"
    :class="[{ 'items-center': type !== 'textarea' }, { 'a-field-disabled': disabled }, cc]" :style="cs"
  >
    <div v-if="icon" :class="icon" class="a-cell-icon" />
    <slot v-else name="icon" />
    <div v-if="$slots.label || label" class="a-cell-title a-field-title" :class="[`a-field-title-${labelAlign}`]">
      <span v-if="label">{{ label }}</span>
      <slot v-else name="label" />
    </div>
    <slot />
    <div class="a-cell-value a-field-value" :class="[labelAlign === 'top' ? 'w-full' : 'flex-1']">
      <slot name="prefix" />
      <input
        v-if="type !== 'textarea'" class="a-field-content-base min-h-auto"
        :type="type !== 'password' ? type : 'text'" :class="[`a-field-content-base-${inputAlign}`, { 'a-field-disabled': disabled }, ccc]" :style="ccs"
        :value="modelValue" :placeholder="placeholderText" :maxlength="maxlength" :focus="focus" :disabled="disabled"
        :password="type === 'password' ? !showPasswordText : false" placeholder-style="color: #C8C9CC"
        @click="clickHandler" @blur="blurHandler" @input="inputHandler" @focus="focusHandler"
      >
      <textarea
        v-else class="a-field-content-base h-20" :class="[`a-field-content-base-${inputAlign}`, { 'a-field-disabled': disabled }, ccc]"
        :style="ccs" :value="modelValue" :placeholder="placeholderText" :maxlength="maxlength" :focus="focus"
        :disabled="disabled" placeholder-style="color: #C8C9CC" @click="clickHandler" @blur="blurHandler"
        @input="inputHandler" @focus="focusHandler"
      />
      <div v-if="showClear && modelValue" class="i-tabler-circle-x" @click.stop="clearHandler" />
      <div
        v-if="type === 'password'" :class="showPasswordText ? 'i-tabler-eye' : 'i-tabler-eye-closed'"
        @click.stop="showPasswordText = !showPasswordText"
      />
      <div v-if="showWordLimit && modelValue">
        {{ modelValue.length }}/{{ maxlength }}
      </div>
    </div>
  </div>
</template>
