<script setup lang='ts'>
import type { PropType } from 'vue'
import { computed, inject, ref, watch } from 'vue'
import { BooleanProp, SizeProp, StringProp, VariantProp, useBaseProps } from '../composables'
import type { CheckboxGroupContext, CheckboxValueType } from '../composables/checkbox'
import { checkboxGroupContextKey } from '../composables/checkbox'

const props = defineProps({
  ...useBaseProps(),
  size: SizeProp,
  variant: VariantProp,
  disabled: BooleanProp,
  modelValue: BooleanProp,
  value: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>,
    default: true,
  },
  label: StringProp,
  icon: StringProp,
  loading: BooleanProp,
  customIcon: BooleanProp,
})

const emit = defineEmits(['update:modelValue', 'click'])

const { isGroup, groupValue, size: _groupSize, min, max, disabled: _disabled } = inject<CheckboxGroupContext>(checkboxGroupContextKey, {
  isGroup: false,
  groupValue: [],
  size: props.size,
  min: -1,
  max: -1,
  disabled: props.disabled,
})

const _checked = ref(false)

watch(() => props.modelValue, (val) => {
  _checked.value = val
}, { immediate: true })

watch(() => groupValue, (val) => {
  if (isGroup)
    _checked.value = val.includes(props.value)
}, { immediate: true })

const isDisabled = computed(() => {
  if (!isGroup)
    return props.loading || props.disabled

  if (_disabled)
    return true

  if (min !== -1 && groupValue.length === min)
    return groupValue.includes(props.value)

  if (max !== -1 && groupValue.length === max)
    return !groupValue.includes(props.value)
  return false
})

const clickHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (isDisabled.value)
    return

  if (isGroup) {
    if (min !== -1 && groupValue.length <= min) {
      if (groupValue.includes(props.value))
        return
    }

    if (max !== -1 && groupValue.length >= max) {
      if (!groupValue.includes(props.value))
        return
    }

    groupValue.includes(props.value)
      ? groupValue.splice(groupValue.indexOf(props.value), 1)
      : groupValue.push(props.value)
  }

  _checked.value = !_checked.value
  emit('update:modelValue', _checked.value)
  emit('click', e)
}
</script>

<template>
  <div class="a-checkbox-base" :class="[`a-checkbox-${_groupSize}`, cc]" :style="cs">
    <div
      class="a-checkbox-checkbox-base"
      :class="[`a-checkbox-checkbox-${_groupSize}`, `a-${variant}`, _checked ? `a-${color}` : '', { 'a-disabled': isDisabled }, ccc]"
      :style="ccs" @click="clickHandler"
    >
      <div class="a-checkbox-checkbox-icon">
        <template v-if="!_checked">
          <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
        </template>
        <template v-else>
          <slot v-if="customIcon" name="icon" />
          <div v-else class="i-carbon-checkmark animate-zoom-in animate-duration-200" :class="[icon]" />
        </template>
      </div>
    </div>
    <template v-if="label">
      {{ label }}
    </template>
    <slot v-else name="label" />
  </div>
</template>
