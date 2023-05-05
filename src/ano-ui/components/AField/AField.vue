<script setup lang="ts">
import ACell from '../ACell/ACell.vue'
import { fieldEmits, fieldProps } from './field'
import { useField } from './use-field'

const props = defineProps(fieldProps)
const emit = defineEmits(fieldEmits)

const {
  disabled, modelValue, placeholderText, showPasswordText, focus,
  focusHandler, clickHandler, blurHandler, inputHandler, clearHandler,
} = useField(props, emit)
</script>

<template>
  <ACell
    :title="label" :cc="[{ 'flex-wrap': labelAlign === 'top' || type === 'textarea' }, cc]" :cs="[cs]" :icon="icon"
    :title-class="['!flex-1/3', { '[&>.flex]:justify-end': labelAlign === 'right' }, { '[&>.flex]:justify-center': labelAlign === 'center' }]"
    :value-class="['!flex-2/3']"
  >
    <template #icon>
      <slot name="icon" />
    </template>
    <template #value>
      <div class="flex items-center gap-1 text-right v-middle leading-inherit a-text-color">
        <slot name="prefix" />
        <input
          v-if="type !== 'textarea'" class="m-0 min-h-auto flex-1 bg-transparent p-0 text-left leading-inherit"
          :type="type !== 'password' ? type : 'text'"
          :class="[`a-field-content-base-${inputAlign}`, { 'a-field-disabled': disabled }, ccc]" :style="ccs"
          :value="modelValue" :placeholder="placeholderText" :maxlength="maxlength" :focus="focus" :disabled="disabled"
          :password="type === 'password' ? !showPasswordText : false" @click="clickHandler" @blur="blurHandler"
          @input="inputHandler" @focus="focusHandler"
        >
        <textarea
          v-else class="m-0 h-20 w-full flex-1 bg-transparent p-0 text-left leading-inherit"
          :class="[`a-field-content-base-${inputAlign}`, { 'a-field-disabled': disabled }, ccc]" :style="ccs"
          :value="modelValue" :placeholder="placeholderText" :maxlength="maxlength" :focus="focus" :disabled="disabled"
          @click="clickHandler" @blur="blurHandler" @input="inputHandler" @focus="focusHandler"
        />
      </div>
    </template>
    <template #right-icon>
      <div v-if="showClear && modelValue" class="i-tabler-circle-x" @click.stop="clearHandler" />
      <div
        v-if="type === 'password'" :class="showPasswordText ? 'i-tabler-eye' : 'i-tabler-eye-closed'"
        @click.stop="showPasswordText = !showPasswordText"
      />
      <div v-if="showWordLimit && modelValue">
        {{ modelValue.length }}/{{ maxlength }}
      </div>
    </template>
  </ACell>
</template>

<style scoped>
</style>
