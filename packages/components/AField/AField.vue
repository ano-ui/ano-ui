<script setup lang="ts">
import ACell from '../ACell/ACell.vue'
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
  <ACell :center="type !== 'textarea'" cc="a-field-base">
    <template #title>
      <div class="flex items-center gap1" :class="{ 'a-field-disabled': disabled }">
        <div v-if="icon" :class="icon" />
        <slot v-else name="icon" />
        <span v-if="label">{{ label }}</span>
      </div>
    </template>
    <template #value>
      <div class="flex items-center gap1 text-left">
        <slot name="prefix" />
        <input
          v-if="type !== 'textarea'" class="a-field-content-base" :type="type !== 'password' ? type : 'text'"
          :class="[{ 'a-field-disabled': disabled }, ccc]" :style="ccs" :value="modelValue" :placeholder="placeholderText" :maxlength="maxlength" :focus="focus"
          :disabled="disabled" :password="type === 'password' ? !showPasswordText : false"
          placeholder-style="color: #C8C9CC" @click="clickHandler" @blur="blurHandler" @input="inputHandler" @focus="focusHandler"
        >
        <textarea
          v-else class="a-field-content-base" :class="[{ 'a-field-disabled': disabled }, ccc]" :style="ccs" :value="modelValue"
          :placeholder="placeholderText" :maxlength="maxlength" :focus="focus" :disabled="disabled"
          placeholder-style="color: #C8C9CC" @click="clickHandler" @blur="blurHandler" @input="inputHandler" @focus="focusHandler"
        />
        <div v-if="showWordLimit && modelValue">
          {{ modelValue.length }}/{{ maxlength }}
        </div>
      </div>
    </template>
    <template #right-icon>
      <div v-if="showClear && modelValue" class="i-carbon-close-filled" @click="clearHandler" />
      <div
        v-if="type === 'password'" :class="showPasswordText ? 'i-carbon-view-filled' : 'i-carbon-view-off-filled'"
        @click.stop="showPasswordText = !showPasswordText"
      />
    </template>
  </ACell>
</template>
