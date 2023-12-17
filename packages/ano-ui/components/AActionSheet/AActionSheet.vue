<script setup lang='ts'>
import AButton from '../AButton/AButton.vue'
import AOverlay from '../AOverlay/AOverlay.vue'
import ATransition from '../ATransition/ATransition.vue'
import { actionSheetEmits, actionSheetProps } from './action-sheet'
import { useActionSheet } from './use-action-sheet'

const props = defineProps(actionSheetProps)
const emit = defineEmits(actionSheetEmits)
const { showValue, cancelHandler } = useActionSheet(props, emit)
</script>

<template>
  <div>
    <AOverlay :show="showValue" :duration="duration" @click="showValue = false" />
    <ATransition
      :show="showValue" name="slide-up" :duration="duration"
      :custom-class="['a-bg-2 fixed z-200 overflow-hidden bottom-0 left-0 right-0 w-full pb-safe', { 'rounded-t-2xl': round }, customClass]"
      :custom-style="customStyle" @click.stop
    >
      <template v-for="action, _idx of actions" :key="_idx">
        <AButton variant="text" block square :custom-class="['color-inherit border-none', action.className]">
          {{ action.name }}
        </AButton>
      </template>
      <slot />
      <template v-if="cancelText">
        <div class="w-full h-2 bg-gray-200/20" />
        <AButton v-if="cancelText" variant="text" block :custom-class="['color-inherit border-none']" @click="cancelHandler">
          {{ cancelText }}
        </AButton>
      </template>
    </ATransition>
  </div>
</template>

<style scoped>
</style>
