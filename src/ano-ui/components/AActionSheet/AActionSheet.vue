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
      :cc="['a-action-sheet-wrapper-base', { 'rounded-t-2xl': round }, cc]" :style="cs" @click.stop
    >
      <template v-for="action, _idx of actions" :key="_idx">
        <AButton variant="text" block :cc="['color-inherit rounded-none', action.className]">
          {{ action.name }}
        </AButton>
      </template>
      <slot />
      <template v-if="cancelText">
        <div class="h-2 w-full bg-gray-200/20" />
        <AButton v-if="cancelText" variant="text" block :cc="['color-inherit rounded-none']" @click="cancelHandler">
          {{ cancelText }}
        </AButton>
      </template>
    </ATransition>
  </div>
</template>

<style scoped>

</style>
