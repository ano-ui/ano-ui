<script setup lang="ts">
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
  <div
    class="a-field-base"
    :class="[{ 'items-center': type !== 'textarea' }, { 'a-field-disabled': disabled }, cc]" :style="cs"
  >
    <div v-if="icon" :class="icon" class="a-cell-icon" />
    <slot v-else name="icon" />
    <div v-if="$slots.label || label" class="a-field-title" :class="[`a-field-title-${labelAlign}`]">
      <span v-if="label">{{ label }}</span>
      <slot v-else name="label" />
    </div>
    <slot />
    <div class="a-field-value" :class="[labelAlign === 'top' ? 'w-full' : 'flex-1']">
      <slot name="prefix" />
      <input
        v-if="type !== 'textarea'" class="a-field-content-base min-h-auto"
        :type="type !== 'password' ? type : 'text'"
        :class="[`a-field-content-base-${inputAlign}`, { 'a-field-disabled': disabled }, ccc]" :style="ccs"
        :value="modelValue" :placeholder="placeholderText" :maxlength="maxlength" :focus="focus" :disabled="disabled"
        :password="type === 'password' ? !showPasswordText : false" placeholder-style="color: #C8C9CC"
        @click="clickHandler" @blur="blurHandler" @input="inputHandler" @focus="focusHandler"
      >
      <textarea
        v-else class="a-field-content-base h-20"
        :class="[`a-field-content-base-${inputAlign}`, { 'a-field-disabled': disabled }, ccc]" :style="ccs"
        :value="modelValue" :placeholder="placeholderText" :maxlength="maxlength" :focus="focus" :disabled="disabled"
        placeholder-style="color: #C8C9CC" @click="clickHandler" @blur="blurHandler" @input="inputHandler"
        @focus="focusHandler"
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

<style scoped>
.a-field-base {
  --at-apply: 'relative box-border a-transition flex a-bg-2 px-4 py-3 text-base a-text-color overflow-hidden flex-wrap'
}

.a-field-title {
  --at-apply: 'mr3 !w-24'
}

.a-field-title-top {
  --at-apply: 'mb-1 !w-full'
}

.a-field-value {
  --at-apply: 'text-right a-text-color-2 v-middle leading-inherit flex items-center gap-1'
}

.a-field-disabled {
  --at-apply: 'text-[#C8C9CC] dark:text-[#4D4D4D]'
}

.a-field-content-base {
  --at-apply: 'w-full flex-1 bg-transparent a-transition text-left m-0 p-0 leading-inherit'
}

.a-field-content-base-right {
  --at-apply: 'text-right'
}
</style>
